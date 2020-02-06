---
layout: basic.11ty.js
title: serverless web dev training with architect
---

# Single page apps

The are many ways to build a single page application. Larger applications can benefit from using a frontend library and bundler. Various libraries help us organize code and the bundler helps us package it for optimal production delivery. 

In this guide using the frontend library React with the [Parcel bundler](https://parceljs.org/recipes.html). React is probably the most popular framework and works with many bundlers but we like Parcel because of its speed and simplicity. 

1. Create a fresh Architect project

```bash
npm init @architect --static ./my-spa
cd my-spa
npm init -f
npm install react react-dom parcel-bundler @architect/sandbox
```

2. Update the build folder configuration in `.arc`

```bash
@app
my-spa

@static
folder dist
```

3. Update the build script in `package.json`:

```javascript
"scripts": {
  "start": "parcel public/index.html & sandbox"
}
```

4. Update `public/index.html`

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

6. Preview by starting the dev server

```bash
npm start
```

7. Clone the example source:

[![Deploy to Begin](https://static.begin.com/deploy-to-begin.svg)](https://begin.com/apps/create?template=https://github.com/begin-examples/learn-node-spa)
