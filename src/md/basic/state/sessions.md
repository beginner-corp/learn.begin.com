---
layout: basic.11ty.js
title: serverless web dev training with architect
---

# Sessions

Hyper Text Transfer Protocol (HTTP) is how messages are formatted and transmitted over the internet. So far we've only built applications that utilize HTTP `GET` which *reads* information. HTTP `POST` is how a web browser _writes_ information. You are ready to move beyond HTTP GET requests. The web is rich, interactive and _stateful_ place which is a fancy way of saying we read and write data. 

Developing database backed stateful web applications used to require a web server, a database server, a whole supporting cast of software and frameworks and all the near-constant maintenance those things required. Now anyone with a text editor can handle `POST` requests directly with a Lambda function and API Gateway.

The first primitive to understand for building stateful interactions on the web is session state. HTTP is a stateless protocol which is a fancy way of saying every HTTP request is like a completely clean slate. If we want to remember things between HTTP requests you need a session.

1. Create a fresh Architect project

```bash
mkdir -p ./mysesh
cd mysesh
```

2. Create a `.arc` file

```bash
@app
bigsesh

@http
get /
post /count
post /reset
```

And generate the boilerplate code by running:

```bash
arc init
```

3. Add the `@architect/functions` runtime helper library to make reading/writing to the session clean

```bash
cd src/http/get-index
npm init -f
npm i @architect/functions

cd ../post-count
npm init -f
npm i @architect/functions

cd ../post-reset
npm init -f
npm i @architect/functions
```

4. Add `src/http/get-index/render.js` with plain vanilla HTML forms for adding and resetting the session

```javascript
/** this is perfectly acceptable and FAST server side rendering */
module.exports = function render({count}) {
  return `<!doctype html>
<html>
<body>
<form method=post action=/count>
  <button>Count ${count}</button>
</form>
<form method=post action=/reset>
  <button>Reset</button>
</form>
</body>
</html>
    `
}
```

5. Modify `src/http/get-index/index.js` to read the session if it exists and render the forms with the session state

```javascript
let arc = require('@architect/functions')
let render = require('./render')

async function home(req) {
  let count = req.session.count || 0
  return {
    html: render({ count })
  }
}

exports.handler = arc.http.async(home)
```

6. Modify `src/http/post-count/index.js` to mutate the session and redirect home


```javascript
let arc = require('@architect/functions')

async function counter(req) {
  let count = (req.session.count || 0) + 1
  return {
    session: { count },
    location: '/'
  }
}

exports.handler = arc.http.async(counter)
```

> FYI: Per recommended security practice Architect applications use `httpOnly` cookies for storing session state; anyone can implement their own mechanism using Set-Cookie headers directly

7. Modify `src/http/post-reset/index.js` to clear the session state

```javascript
let arc = require('@architect/functions')

async function reset(req) {
  return {
    session: {},
    location: '/'
  }
}

exports.handler = arc.http.async(reset)
```

8. Install `@architect/sandbox` local development server

```bash
npm install @architect/sandbox
```

9. Add a start command to the scripts section in `package.json`
```bash
...
"scripts": {
  "start": "npx sandbox"
}
...
```

10. Preview by starting the dev server

```bash
npm start
```

11. Clone the example source:

[![Deploy to Begin](https://static.begin.com/deploy-to-begin.svg)](https://begin.com/apps/create?template=https://github.com/begin-examples/learn-node-sessions)
