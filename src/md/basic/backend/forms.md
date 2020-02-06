---
layout: basic.11ty.js
title: serverless web dev training with architect
---

# HTML forms

Before implementing complete REST and GraphQL backend APIs it is usually a good idea to quickly prove things out using plain HTML forms. Often they suffice and in many cases a basic HTML form is the best option for writing data in a web application.

The problem is HTTP verbs `PATCH`, `DELETE` and `PUT` are not supported by HTML forms in web browsers. `XMLHTTPRequest` and `fetch` support all verbs but this makes JavaScript a hard requirement for your application to function in addition to [less favorable accessibility behavior](https://www.w3.org/WAI/tutorials/forms/). 

In this guide we will implement a REST-ish CRUD API using Lambda and API Gateway. Combining on the previous lessons we will deploy the 11ty static site generator with an oAuth login to an admin interface for saving drafts of articles. Articles can be created, updated, destroyed and published _back to GitHub_ as markdown documents. 

1. Create a CRUD app in Begin

- `get /api/drafts/:key` edit draft 
- `post /api/drafts` create draft
- `post /api/drafts/:key` update draft
- `post /api/drafts/:key/destroy` destroy draft
- `post /api/drafts/:key/publish` publish draft!

[![Deploy to Begin](https://static.begin.com/deploy-to-begin.svg)](https://begin.com/apps/create?template=https://github.com/begin-examples/learn-node-forms)

# Structure

Architect loosely allows for the common Model View Controller (MVC) structure. Models or the *data access layer* can go into `src/shared` so all Lambda functions can access them. View logic in `src/views` is copied into Lambdas that handle HTTP `GET` requests.

## Data access layer

In this example the CRUD logic is all in `src/shared/drafts.js`. We utilize the `@begin/data` wrapper library for DynamoDB. 

```javascript
let data = require('@begin/data')
let xss = require('xss')

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

module.exports = {
  save,
  read,
  destroy
}

```

> Notice that `src/shared` can also have its own `package.json` for dependencies

## View layer

`src/views/admin.js` 
`src/views/form.js` 
`src/views/layout.js` 
`src/views/signin.js` 

### Admin interface

`src/http/get-admin`

```javascript
```

# HTTP controller layer

REST is often likened to CRUD for HTTP. The verbs map well and it provides a framework for thinking about how to structure our apps. 

<table>
  <tr>
    <th>HTTP route</th>
    <th>Lambda handler code</th>
    <th>Database call</th>
  </td>
  <tr>
    <td>`POST /api/drafts`</td>
    <td>`src/http/post-api-drafts/index.js`</td>
    <td>`drafts.save`</td>
  </td>
  <tr>
    <td>`GET /api/drafts/:key`</td>
    <td>`src/http/post-api-drafts/index.js`</td>
    <td>`drafts.read`</td>
  </td>
  <tr>
    <td>`PATCH /api/drafts/:key`</td>
    <td>`src/http/post-api-drafts-000key/index.js`</td>
    <td>`drafts.save`</td>
  </td>
  <tr>
    <td>`DELETE /api/drafts/:key`</td>
    <td>`src/http/post-api-drafts/index.js`</td>
    <td>`drafts.destroy`</td>
  </td>
</table>
