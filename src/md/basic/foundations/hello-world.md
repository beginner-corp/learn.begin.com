---
layout: basic.11ty.js
title: serverless web dev training with architect
---

# Hello world 

Begin.com supports building static web apps alongside the popular backend JS runtimes Node and Deno. You can even mix all these things in the same app. 

## Exercise 1: preview in the browser

Build and preview all the different runtime starter apps you are interested in!

### Static

A plain and simple static website

```bash
arc init --static ./my-static-app 
cd my-static-app
arc sandbox
```

### Node

An HTTP function with Node

```bash
arc init --runtime node ./my-node-app 
cd ./my-node-app
npm start
```

### Deno

An HTTP function with Deno

```bash
arc init --runtime deno ./my-deno-app 
cd ./my-deno-app
arc sandbox
```

---

## Exercise 2: setup testing

1. Generate an app 

```bash
arc init --node ./myapp
cd myapp
```

2. Install testing tools `npm i tape tap-spec -D`

3. Add to `package.json` 

```javascript
{
  "scripts": {
    "test": "tape test/index-test.js | tap-spec"
  }
}
```

4. Add the test scaffolding

```javascript
// example sandbox start/stop
let sandbox = require('@architect/sandbox')
let tape = require('tape')
let end

test('sandbox.start', async t=> {
  t.plan(1)
  end = await sandbox.start()
  t.ok(true, 'start the sandbox')
})

// your tests will go here

test('end', async t=> {
  t.plan(1)
  end()
  t.ok(true, 'shut down sandbox')
})
```

5. Run the tests `npm t`

6. Add a test to see that `http://localhost:3333` returns an HTTP statusCode 200 using `tiny-json-http`

