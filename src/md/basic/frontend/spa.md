---
layout: basic.11ty.js
title: serverless web dev training with architect
---

# Single-page applications

There are many ways to build a single-page application. Larger applications can benefit from using a frontend library and bundler. Various libraries help us organize code, and the bundler helps us package it for optimal production delivery.

In this guide, we'll be using the frontend library <a href=https://reactjs.org/ target=blank>React</a> with the <a href=https://parceljs.org/recipes.html target=blank>Parcel bundler</a>. React is probably the most popular framework and works with many bundlers, but we like Parcel because of its speed and simplicity.

1. Create a fresh Architect project

Initialize an Architect project, change directories into the project folder, create a `package.json` file, and install npm packages:

```bash
npm init @architect --static ./my-spa
cd my-spa
npm init -f
npm install react react-dom parcel-bundler @architect/sandbox
```

2. Update the build folder configuration in `app.arc`

Edit the `app.arc` file in the root of your project directory so it shows the following:

```bash
@app
my-spa

@static
folder dist
```

3. Update the build script

Add the following start script to your `package.json` file:

```javascript
"scripts": {
  "start": "parcel public/index.html & sandbox"
}
```

4. Update `public/index.html`

Replace the contents of your `index.html` file with the following:

```html
<!doctype html>
<html>
<body>
  <div id=app></div>
<script src=/index.js></script>
</body>
</html>
```

5. Add `public/index.js`

Create an `index.js` file in the `public` directory and add the following to it:

```javascript
import React from "react";
import ReactDOM from "react-dom";

class HelloMessage extends React.Component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<HelloMessage name="Jane" />, mountNode);
```

6. Preview your app by starting the dev server

```bash
npm start
```

7. Clone the example source

[![Deploy to Begin](https://static.begin.com/deploy-to-begin.svg)](https://begin.com/apps/create?template=https://github.com/begin-examples/learn-node-spa)
