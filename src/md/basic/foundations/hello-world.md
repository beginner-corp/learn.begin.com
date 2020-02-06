---
layout: basic.11ty.js
title: serverless web dev training with architect
---

# Hello world

[Begin.com](https://begin.com/) supports building static web applications alongside the popular backend JavaScript runtimes Node and Deno. You can even use both Node and Deno in the same app. Or other programming languages like Ruby and Python.

## Exercise 1: preview in the browser

Build and preview all the different runtime starter apps you are interested in!

### Static website

To create a directory for a basic Architect static website, open a terminal window and run the following command:

```bash
arc init --static ./my-static-app
```

>To test that this was successful, run `ls` in the terminal. One of the directories should be `my-static-app`, or the name of your choice.

Change directories so you're now in your `my-static-app` directory:

```bash
cd my-static-app
```

To start a server running on your computer, run the following command:

```bash
arc sandbox
```

Copy `http://localhost:3333` from the terminal output into a web browser window to preview your static website.

>You should see `Hello world from public/index.html` in your browser window.

To stop the server, go back to your terminal window and hold down the `control` + `C` keys.

### Node

To create an HTTP function with Node, open a terminal window and run the following command:

```bash
arc init --runtime node ./my-node-app
```

You should see terminal output somewhat like this:

```bash
⚬ Create Bootstrapping new Architect project
  | Project name .. my-node-app
  | Creating in ... /my-node-app
✓ Create Created Architect project manifest (.arc)
✓ Create Created new project files in src/http
✓ Create Done!
```

Change directories so you're now in your new `my-node-app` directory:

```bash
cd my-node-app
```

To create a default `package.json` file inside your project using npm, run the following command:

```bash
npm init --yes
```
[need to add installing npm packages and a start script here for package.json]

To start the server using npm, run the following command:
```bash
npm start
```

Copy `http://localhost:3333` from the terminal output into a web browser window to preview your Node application.

To stop the server, go back to your terminal window and hold down the `control` + `C` keys.

### Deno

To create an HTTP function with Deno, open a terminal window and run the following command:

```bash
arc init --runtime deno ./my-deno-app
```

You should see output like this, as with your Node app:

```bash
⚬ Create Bootstrapping new Architect project
  | Project name .. my-deno-app
  | Creating in ... /my-deno-app
✓ Create Created Architect project manifest (.arc)
✓ Create Created new project files in src/http
✓ Create Done!
```

Change directories so you're now in your new `my-deno-app` directory:

```bash
cd my-deno-app
```

Start the server:

```bash
arc sandbox
```

Copy `http://localhost:3333` from the terminal output into a web browser window to preview your Deno application.

---

## Exercise 2: set up testing

1. Generate a new app with `arc init`

```bash
arc init --node ./my-app
cd my-app
```

You should now have a source tree that looks like this:
```bash
my-app
  └── src
      └── http
          └── get-index
              └── index.js
```

2. Install tape and tap-sec
Create a default `package.json` then install `tape` and `tap-sec` packages as development dependencies  

```bash
npm init --yes
npm i tape tap-spec -D
```

3. Replace the test script line in `package.json` to  

```javascript
    "test": "tape test/index-test.js | tap-spec"
```

4. Add the test scaffolding

Add the following to your `index.js` file

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
