---
layout: basic.11ty.js
title: serverless web dev training with architect
---

# HTML forms

Before implementing complete REST and GraphQL backend APIs, we can prove things out using HTML forms. Often they suffice, and in many cases, a basic HTML form is the best option for writing data in a web application. Our example follows a similar Create, Read, Update, and Delete (CRUD) pattern that you may see in Rails, Sinatra, Django, or Flask, except now the operations will be backed by AWS Lambda functions.

For more on HTML Forms, [check out this article](https://developer.mozilla.org/en-US/docs/Learn/Forms).

This guide will walk through a prototype CRUD app that combines concepts from the previous lessons. We will use [Eleventy](https://www.11ty.dev/), with an authenticated `/admin` route using Github OAuth. Users will be able to login with their Github account to create and save drafts of markdown files. When the user is ready to publish the file, the application will directly publish the markdown file to Github.

## Set up

1. Start with deploying the example app on Begin and set up local development.

[![Deploy to Begin](https://static.begin.com/deploy-to-begin.svg)](https://begin.com/apps/create?template=https://github.com/begin-examples/learn-node-forms)

```bash
# Clone your app repo locally
git clone https://github.com/username/begin-app-project-name.git

# cd into your Begin project dir
cd begin-app-project-name

# Install NPM packages
npm install

# Build the code
npm run build

# Start Sandbox
npm start
```

2. Review the app structure

Let's take a look at how we can implement a common design pattern called [*Model* *View* *Controller* (MVC)](https://developer.mozilla.org/en-US/docs/Glossary/MVC) with Architect and AWS Lambda functions.

- Models or the *data access layer* go into `src/shared` and can be accessed by all runtime Lambda functions.

- View logic is added to `src/views` and will be copied into runtime Lambdas that handle HTTP `GET` requests.

- Lambda functions are Controller logic which will route user actions between models and views.

Writing your applications this way will give you and your collaborators a consistent process for maintaining the code base.

> Learn more about [project structures in the Begin Docs](https://docs.begin.com/en/getting-started/project-structure)

## Data access layer

The data access layer is a fancy way to describe logic to interact with your backend database.

The CRUD logic is contained in `src/shared/drafts.js` and we utilize the [`@begin/data` client library](https://docs.begin.com/en/data/begin-data) for DynamoDB.

Everything in `src/shared` gets copied into all Lambdas `node_modules/@architect/shared` at runtime so any Lambda function can use `require('@architect/shared/drafts')` to access these methods.

```javascript
// src/shared/drafts.js
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

> Notice that `src/shared` can also have its own `package.json` for dependencies. When `@architect/sandbox` is started, it will rehydrate these dependencies if necessary

## View layer

View layers are for templating logic. Everything in `src/views` gets copied into the `node_modules` folder of `/http/get-*` Lambda functions. 

[Learn more about how Architect uses shared view login in Lambdas](https://blog.begin.com/serverless-front-end-patterns-with-architect-views-cf4748aa1ec7)

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
// src/views/form.js
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
// src/views/signin.js
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
```
> You can add full Github OAuth functionality by following the method in the previous sections on [Environment Variables and Authentication](/basic/state/env). You will need to create environment variables for `GITHUB_CLIENT_ID`, `GITHUB_CLIENT_SECRET`, `GITHUB_REDIRECT`, and `GITHUB_REPO`

```bash
# .arc-env
@testing
GITHUB_CLIENT_ID xxx
GITHUB_CLIENT_SECRET xxx
GITHUB_REDIRECT http://localhost:3333/login
GITHUB_REPO github-user/project-repo
```

## Controller layer

You can consider Lambda functions as controllers. HTTP functions marshal user input, talk to the database and either render a web page or redirect the user elsewhere. Most of this apps frontend is static except the admin page. This Lambda function will check if there is an active session, read drafts from DynamoDB or instruct the user to sign in.

```javascript
// src/http/get-admin/index.js
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

When the `/admin` route receives a `GET` request, it invokes the Lambda code at `src/http/get-admin/index.js`. This function checks for an account session and renders the `admin.js` view (or prompts sign in if the user has not authenticated). All other controller logic in this app are HTML form `POST` operations. This is great because HTML form `POST`s always redirect back to a view. (So they have no view logic.) It is possible to render HTML from a form post, but you never want that behavior because it often results in duplicate form submissions.

To 'create' drafts, take a look at the Lambda function in `src/http/post-drafts/index.js`. This function checks for an authenticated account and redirects if it is not available.

```javascript
// src/http/post-drafts/index.js
let arc = require('@architect/functions')
let drafts = require('@architect/shared/drafts')

async function http(req) {
  if (!req.session.account) {
    return {
      location: '/?authorized=false'
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

This method checks for an authenticated account and redirects if it is not available. If everything checks out we use `@begin/data` to save a draft to DynamoDB.

To destroy a record we have `post /drafts/:key/destroy` code:

```javascript
// src/http/post-drafts-000key-destroy/index.js
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
// src/http/post-drafts-000key-publish/index.js
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
// src/http/post-drafts-000key-publish/github.js
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

GitHub has an amazing API. This method will write a new markdown document into our `src/md` folder on Github.

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
    <td style="background-color:#fff6e3">POST /drafts/:key/destroy</td>
    <td>DELETE /drafts/:key</td>
  </td>
</table>

> The problem is HTTP verbs `PATCH`, `DELETE` and `PUT` are not supported by HTML forms in web browsers. `XMLHTTPRequest` and `fetch` support all verbs but this makes JavaScript a hard requirement for your application to function in addition to [less favorable accessibility behavior](https://www.w3.org/WAI/tutorials/forms/).  The workaround is to add some extra state denoting deletion (which we do in the highlighted cell above by appending `destroy` to the resource URL.

So go ahead and give it a try, see if you can complete it working locally and ship it to production on [Begin](https://www.begin.com).