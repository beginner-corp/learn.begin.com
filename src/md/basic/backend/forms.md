---
layout: basic.11ty.js
title: serverless web dev training with architect
---

# HTML forms

Before implementing complete REST and GraphQL backend APIs it is usually a good idea to quickly prove things out using plain HTML forms. Often they suffice and in many cases a basic HTML form is the best option for writing data in a web application. This is essentially following the same sort of CRUD web app patterns as Rails, Sinatra, Django or Flask except serverless.

In this guide we implement a prototype CRUD app using Lambda, API Gateway and DynamoDB. Combining on the previous lessons we will deploy the 11ty static site generator with an OAuth login to an admin interface for saving drafts of articles. Drafts can be created, updated, destroyed and published _back to GitHub_ as markdown documents.

1. Create the app on Begin

[![Deploy to Begin](https://static.begin.com/deploy-to-begin.svg)](https://begin.com/apps/create?template=https://github.com/begin-examples/learn-node-forms)

2. Review the app structure

Implementing a *Model* *View* *Controller* (MVC) structure with Architect is straightforward. Models or the *data access layer* go into `src/shared` so all runtime Lambda function code can access them. View logic added to `src/views` is copied into runtime Lambdas that handle HTTP `GET` requests. Lambdas are Controller logic.

### Data access layer

Every backend has a data access layer. This code is responsible for interacting with the database which in our case is DynamoDB. In this example the CRUD logic is all in `src/shared/drafts.js` and wee utilize the `@begin/data` client library for DynamoDB. Everything in `src/shared` gets copied into all Lambdas `node_modules/@architect/shared` at runtime so any Lambda function can `require('@architect/shared/drafts')`.

```javascript
let data = require('@begin/data')
let xss = require('xss')

module.exports = {
  save,
  read,
  destroy
}

/**
 * save draft
 *
 * @param {object} draft
 * @param {string} draft.key
 * @param {string} draft.title
 * @param {string} draft.body
 * @param {string} draft.author
 * @param {string} draft.avatar
 */
async function save(draft) {
  let required = ['title', 'body', 'author', 'avatar']
  for (let param of required) {
    if (!draft[param])
      throw ReferenceError(`missing param ${param}`)
    if (draft[param] && draft[param].length < 4)
      throw RangeError(`${param} must be four or more characters`)
  }
  draft.title = xss(draft.title)
  draft.body = xss(draft.body)
  return data.set({
    table: 'drafts',
    ...draft
  })
}

/**
 * read draft(s)
 *
 * @param {object} params
 * @param {string} params.cursor
 * @param {string} params.key
 */
async function read(params={}) {
  return data.get({
    table: 'drafts',
    ...params
  })
}

/**
 * destroy draft
 *
 * @param {object} params
 * @param {string} params.key
 */
async function destroy(draft) {
  return data.destroy({
    table: 'drafts',
    ...draft
  })
}


```

> Notice that `src/shared` can also have its own `package.json` for dependencies

### View layer

View layers are for templating logic. Everything in `src/views` gets copied into HTTP `GET` Lambda functions `node_modules/@architect/views`.

```javascript
// src/views/admin.js
let layout = require('./layout')
let form = require('./form')

module.exports = function admin(drafts) {
  let html = form()
  for (let i of drafts) {
    html += `
      <li>
        <a href=/drafts/${i.key}>${i.title}</a>
        <form method=post action=/drafts/${i.key}/destroy>
          <button>X</button>
        </form>
      </li>
    `
  }
  return layout(`<ul>${html}</ul>`)
}
```

It is perfectly ok to render HTML strings from a template function. It is the fastest SSR technique.

```javascript
// src/views/layout.js
module.exports = function layout(body) {
  return `
<!doctype html>
<html>
<body>
<form method=post action=/logout>
  <button>Logout</button>
</form>
${body}
</body>
</html>`
}
```

Plain HTML forms create easy to follow logic when you know every route is a Lambda function.

```javascript
// `src/views/form.js`
module.exports = function form(draft) {
  if (!draft) {
    return `
      <form method=post action=/drafts>
        <input type=text name=title>
        <textarea name=body></textarea>
        <button>Save new draft</button>
      </form>
    `
  }
  return `
    <form method=post action=/drafts/${draft.key}>
      <input type=hidden name=key value=${draft.key}>
      <input type=hidden name=author value=${draft.author}>
      <input type=hidden name=avatar value=${draft.avatar}>
      <input type=text name=title value="${draft.title}">
      <textarea name=body>${draft.body}</textarea>
      <button>Save draft</button>
    </form>
    <form method=post action=/drafts/${draft.key}/publish>
      <button>Publish draft</button>
    </form>
  `
}
```

```javascript
// `src/views/signin.js`
module.exports = function signin() {

  let client_id = process.env.GITHUB_CLIENT_ID
  let redirect_uri = process.env.GITHUB_REDIRECT
  let scope = 'user,repo'
  let base = 'https://github.com/login/oauth/authorize'
  let href = `${base}?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope}`

  return `
<!doctype html>
<html>
<body>
<a href=${href}>Sign in with GitHub</a>
</body>
</html>`
}
````

### Controller layer

You can consider Lambda functions as controllers. HTTP functions marshal user input, talk to the database and either render a web page or redirect the user elsewhere. Most of this apps frontend is static except the admin page:

```javascript
let arc = require('@architect/functions')
let drafts = require('@architect/shared/drafts')
let signin = require('@architect/views/signin')
let admin = require('@architect/views/admin')

async function http(req) {
  if (req.session.account) {
    let results = await drafts.read()
    return {
      html: admin(results)
    }
  }
  return {
    html: signin()
  }
}

exports.handler = arc.http.async(http)
```

The `get /admin` route handler checks for `req.session.account` and renders the admin view (or prompts sign in if the user has not authenticated). All other controller logic in this app is form posts which is great because form posts always redirect back to a view. (So they have no view logic.) It is possible to render HTML from a form post…but you never want that behavior because it often results in double form submissions.

The 'create' Lambda at `post /drafts` code:

```javascript
// src/http/post-drafts
let arc = require('@architect/functions')
let drafts = require('@architect/shared/drafts')

async function http(req) {
  if (!req.session.account) {
    return {
      location: '/?authorized=fase'
    }
  }
  try {
    let draft = req.body
    draft.author = req.session.account.name
    draft.avatar = req.session.account.avatar
    await drafts.save(draft)
    return {
      location: '/admin'
    }
  }
  catch(e) {
    return {
      html: `${e.message} <pre>${e.stack}`
    }
  }
}

exports.handler = arc.http.async(http)
```

This method checks for an authenticated account and redirects if it is not available. If everything checks out we use `@begin/data` to save a draft.

To destroy a record we have `post /drafts/:key/destroy` code:

```javascript
let arc = require('@architect/functions')
let drafts = require('@architect/shared/drafts')

async function destroy(req) {
  if (!req.session.account) {
    return {
      location: '/admin'
    }
  }
  await drafts.destroy(req.params)
  return {
    location: '/admin'
  }
}

exports.handler = arc.http.async(destroy)
```

Again we check for a legit session and if it exists we destroy the record and redirect back to `/admin`.

The final method worth noticing is `post /drafts/:key/publish`:

```javascript
let arc = require('@architect/functions')
let drafts = require('@architect/shared/drafts')
let github = require('./github')

async function publish(req) {

  if (!req.session.account || !req.params.key) {
    return {
      location: '/'
    }
  }

  try {
    let token = req.session.account.token
    let draft = await drafts.read(req.params)

    // publish to github
    await github({token, draft})

    // delete the draft
    await drafts.destroy(draft)

    // go back home
    return {
      location: '/admin'
    }
  }
  catch(e) {
    return {
      html: `
        <h3>${e.message}</h3>
        <pre>${e.stack}</pre>
      `
    }
  }
}

exports.handler = arc.http.async(publish)
```

Similar to previous controller logic we check the session. If legit, we grab a copy of the draft and attempt to write it to GitHub. If that all works out we'll destroy the record and redirect back to the admin view. Let's quickly check out the GitHub publish portion of this exercise:

```javascript
let { put } = require('tiny-json-http')

module.exports = async function publish({token, draft}) {

  let path = `${draft.title.toLowerCase().replace(/ /g, '-')}.md`
  let message = `feat: adds ${path}`
  let content = Buffer.from(draft.body).toString('base64')

  // https://developer.github.com/v3/repos/contents/#create-or-update-a-file
  await put({
    url: `https://api.github.com/repos/${process.env.GITHUB_REPO}/contents/src/md/${path}`,
    headers: {
      Accept: 'application/json',
      Authorization: `token ${token}`
    },
    data: {
      message,
      content,
    }
  })
}
```

GitHub has an amazing API. This method write a new markdown document into our `src/md` folder.

---

REST is often likened to CRUD for HTTP. The verbs map well and it provides a framework for thinking about how to structure our apps.


<table>
  <tr>
    <th>CRUD</th>
    <th>HTML forms</th>
    <th>REST</th>
  </td>
  <tr>
    <td>Create</td>
    <td>POST /drafts</td>
    <td>POST /drafts</td>
  </td>
  <tr>
    <td>Read</td>
    <td>GET /drafts/:key</td>
    <td>GET /drafts/:key</td>
  </td>
  <tr>
    <td>Update</td>
    <td>POST /drafts/:key</td>
    <td>PATCH /drafts/:key</td>
  </td>
  <tr>
    <td>Delete</td>
    <td style=background:lightyellow>POST /drafts/:key/destroy</td>
    <td>DELETE /drafts/:key</td>
  </td>
</table>

> The problem is HTTP verbs `PATCH`, `DELETE` and `PUT` are not supported by HTML forms in web browsers. `XMLHTTPRequest` and `fetch` support all verbs but this makes JavaScript a hard requirement for your application to function in addition to [less favorable accessibility behavior](https://www.w3.org/WAI/tutorials/forms/).  The workaround is to add some extra state denoting deletion (which we do in the highlighted cell above by appending `destroy` to the resource URL.
