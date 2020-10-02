---
layout: basic.11ty.js
title: serverless web dev training with architect
---

# REST

Representational state transfer (REST) is a software architectural style that defines a set of constraints for creating web services. Defined by [Roy Fielding](https://www.ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm) in parallel with HTTP 1.1 the principles of REST are fundamental building blocks for web applications.

Roughly, the idea is that resources are represented by URLs and we can act on those resources with a common set of HTTP verbs. 

<table>
  <tr>
    <th>Database action</th>
    <th><code>HTTP</code></th>
  </td>
  <tr>
    <td><b>Create</b></td>
    <td><code>POST /todos</code></td>
  </td>
  <tr>
    <td><b>Read</b></td>
    <td><code>GET /todos</code></td>
  </td>

  <tr>
    <td><b>Update</b></td>
    <td><code>PATCH /todos/:key</code></td>
  </td>
  <tr>
    <td><b>Delete</b></td>
    <td><code>DELETE /todos/:key</code></td>
  </td>
</table>

> Create, read, update and delete verbs are often abbreviated as _CRUD app_

1. Start with deploying the completed app on Begin and set up local development.

[![Deploy to Begin](https://static.begin.com/deploy-to-begin.svg)](https://begin.com/apps/create?template=https://github.com/begin-examples/learn-node-rest)

```bash
# Clone your app repo locally
git clone https://github.com/username/begin-app-project-name.git

# cd into your Begin project dir
cd begin-app-project-name

# Install NPM packages
npm install

# Start Sandbox
npm start
```

2. Let's take a look at the `app.arc` file in the root of the project. This file is a manifest for the entire application. It defines the location of static assets, http routes as separate Lambda handlers, and a DynamoDB table.

```bash
@app
learn-rest

@static
folder public

@http
get /login  # create github oauth session
get /logout # clear session

# json api
get /todos
post /todos
put /todos/:key
delete /todos/:key

@tables
data
  scopeID *String
  dataID **String
  ttl TTL
```

3. `src/shared/auth.js` is shared code middleware checks for a legit session. Notice that you will need to set up `.arc-env` file and enter Environment Variables in the Begin console.

> [Take a peek at the previous section on Environment Variables for reference.](/basic/state/env)

```javascript
module.exports = async function auth(req) {
  if (!req.session.account) {
    let client_id = process.env.GITHUB_CLIENT_ID
    let redirect_uri = process.env.GITHUB_REDIRECT
    let base = `https://github.com/login/oauth/authorize`
    let href = `${base}?client_id=${client_id}&redirect_uri=${redirect_uri}`
    return {
      statusCode: 403,
      json: {
        error: 'not_authorized',
        message: 'please sign in',
        href
      }
    }
  }
}
```

4. Now let's look at the frontend code in the `/public` folder. 

This is all we need as an entry point for our app.
```html
<!-- public/index.html -->
<main>loading</main>
<script type=module src=/index.js></script>
```

The JavaScript is in two files. `crud.js` contains the REST API calls to the Lambda functions on the backend and `index.js` contains the event listeners and render methods. 

```javascript
// public/crud.js
/** POST /todos */
export async function create(params) {
  let req = await fetch('/todos', {
    method: 'post',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(params)
  })
  return req.json()
}

/** GET /todos */
export async function read() {
  let req = await fetch('/todos')
  return req.json()
}

/** PUT /todos/:key */
export async function update(params) {
  let req = await fetch(`/todos/${params.key}`, {
    method: 'put',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(params)
  })
  return req.json()
}

/** DELETE /todos/:key */
export async function destroy({key}) {
  let req = await fetch(`/todos/${key}`, {
    method: 'delete',
    headers: {
      'content-type': 'application/json'
    }
  })
  return req.json()
}
```

```javascript
// public/index.js
import {create, read, update, destroy} from './crud.js'

// main render function
async function render(payload) {

  if (payload.error === 'not_authorized') {
    let main = document.getElementsByTagName('main')[0]
    main.innerHTML = `<a href=${payload.href}>${payload.message}</a>`
    return;
  }
  
  let html = `
    <a href=/logout>logout</a>
    <input type=text id=new-todo placeholder="todo text here">
  `

  for (let todo of payload.todos) {
    html += `<li>
      <input type=checkbox class=js-todo-complete data-key=${todo.key} ${todo.complete? 'checked' : ''}>
      <span>${todo.text}</span>
      <button class=js-todo-destroy data-key=${todo.key}>x</button>
    </li>`
  }

  // render markup
  let main = document.getElementsByTagName('main')[0]
  main.innerHTML = html

  // listen for enter
  let text = document.getElementById('new-todo')
  text.addEventListener('keyup', enter)
  text.focus()

  // listen for checkbox change
  for (let i of document.querySelectorAll('.js-todo-complete')) {
    i.addEventListener('change', change)
  }

  // listen for destroy
  for (let i of document.querySelectorAll('.js-todo-destroy')) {
    i.addEventListener('click', click)
  }
}

/** create a todo */
async function enter(event) {
  if (event.key === 'Enter') {
    let value = event.target.value
    let res = await create({text: value})
    await render(res)
  }
}

/** toggle todo complete */
async function change(event) {
  let key = event.target.dataset.key
  let complete = event.target.checked
  let res = await update({key, complete})
  await render(res)
}

/** destroy todo */
async function click(event) {
  let key = event.target.dataset.key
  let res = await destroy({key})
  await render(res)
}

// run the program
try {
  (async function main() {
    let res = await read()
    await render(res)
  })()
} 
catch(err) {
  console.log('err', err)
}

```

5. Now let's look at the Lambda function to read todos

Make sure the `@begin/data` DynamoDB client is added to `src/shared` 

```bash
cd src/shared
npm init --yes
npm i @begin/data
```

`src/shared/read.js` is a middleware function that allows your Lambda functions to get documents from DynamoDB. 

```javascript
let data = require('@begin/data')

module.exports = async function read(req) {
  let table = `todos-${req.session.account.id}`
  let todos = await data.get({table})
  let account = req.session.account
  delete account.token
  return {
    json: {
      account,
      todos
    }
  }
}
```
> [Check out more documentation about Begin data in the docs.](https://docs.begin.com/en/data/begin-data)

With the 'read' middleware in place, the handler found in `src/http/get-todos/index.js` will authenticate a user and retrieve their todos.

```javascript
let arc = require('@architect/functions')
let auth = require('@architect/shared/auth')
let read = require('@architect/shared/read')

exports.handler = arc.http.async(auth, read)
```
> [For a refresher on `arc.http.async` and middleware, check out the Architect docs.](https://arc.codes/reference/functions/http/node/async)

6. This handler will create todos, `src/http/post-todos/index.js`

```javascript
let arc = require('@architect/functions')
let auth = require('@architect/shared/auth')
let read = require('@architect/shared/read')
let data = require('@begin/data')

async function create(req) {
  let table = `todos-${req.session.account.id}`
  await data.set({table, ...req.body})
}

exports.handler = arc.http.async(auth, create, read)
```

7. This handler updates a todo `src/http/put-todos-000key`

```javascript
let arc = require('@architect/functions')
let auth = require('@architect/shared/auth')
let read = require('@architect/shared/read')
let data = require('@begin/data')

async function write(req) {
  let table = `todos-${req.session.account.id}`
  let {key, complete} = req.body
  let copy = await data.get({table, key})
  copy.complete = complete
  await data.set(copy)
}

exports.handler = arc.http.async(auth, write, read)
```

8. Delete a todo

```javascript
let arc = require('@architect/functions')
let auth = require('@architect/shared/auth')
let read = require('@architect/shared/read')
let data = require('@begin/data')

async function destroy(req) {
  let table = `todos-${req.session.account.id}`
  let key = req.params.key
  await data.destroy({table, key})
}

exports.handler = arc.http.async(auth, destroy, read)
```

And because all network requests return the same payload, rendering on the client can be one pure function.
