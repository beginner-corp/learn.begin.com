---
layout: basic.11ty.js
title: serverless web dev training with architect
---

# HTML forms

Before implementing complete REST and GraphQL backend APIs it is usually a good idea to quickly prove things out using plain HTML forms. Often they suffice and in many cases a basic HTML form is the best option for writing data in a web application.

In this guide we will implement a prototype CRUD app using Lambda, API Gateway and DynamoDB. Combining on the previous lessons we will deploy the 11ty static site generator with an oAuth login to an admin interface for saving drafts of articles. Articles can be created, updated, destroyed and published _back to GitHub_ as markdown documents. 

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
        <a href=/api/drafts/${i.key}>${i.title}</a>
        <form method=post action=/api/drafts/${i.key}/destroy>
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
      <form method=post action=/api/drafts>
        <input type=text name=title>
        <textarea name=body></textarea>
        <button>Save new draft</button>
      </form>
    `
  }
  return `
    <form method=post action=/api/drafts/${draft.key}>
      <input type=hidden name=key value=${draft.key}>
      <input type=hidden name=author value=${draft.author}>
      <input type=hidden name=avatar value=${draft.avatar}>
      <input type=text name=title value="${draft.title}">
      <textarea name=body>${draft.body}</textarea>
      <button>Save draft</button>
    </form>
    <form method=post action=/api/drafts/${draft.key}/publish>
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

You can consider Lambda functions as controllers. HTTP functions marshal user input, talk to the database and either render a web page or redirect the user elsewhere. 

```javascript
```

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

> The problem is HTTP verbs `PATCH`, `DELETE` and `PUT` are not supported by HTML forms in web browsers. `XMLHTTPRequest` and `fetch` support all verbs but this makes JavaScript a hard requirement for your application to function in addition to [less favorable accessibility behavior](https://www.w3.org/WAI/tutorials/forms/). 
