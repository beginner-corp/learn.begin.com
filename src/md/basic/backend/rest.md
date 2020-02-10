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

1. Create the app on Begin

[![Deploy to Begin](https://static.begin.com/deploy-to-begin.svg)](https://begin.com/apps/create?template=https://github.com/begin-examples/learn-node-rest)

2. Open up the `.arc` file

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

3. `src/shared/auth.js` middleware:

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

4. Frontend code

```html
<!-- public/index.html -->
<main>loading</main>
<script type=module src=/index.js></script>
```

```javascript
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

5. Read todos

Add dependencies to `src/shared`

```bash
cd src/shared
npm init --yes
npm i @begin/data
```

Create a new middleware in `src/shared/read.js`

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

And then modify `src/http/get-todos/index.js`

```javascript
let arc = require('@architect/functions')
let auth = require('@architect/shared/auth')
let read = require('@architect/shared/read')

exports.handler = arc.http.async(auth, read)
```

6. Create a todo `src/http/post-todo`

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

7. Update a todo `src/http/put-todo-000key`

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

And because all network requests return the same payload rendering on the client can be one pure function.
