---
layout: basic.11ty.js
title: serverless web dev training with architect
---

# Server side rendering 

Leverage the Deno runtime to render JSX on the backend.

1. Create a fresh Architect project

```bash
npm init @architect --runtime deno ./mydeno
cd mydeno
npm install -D mkdirp
```

2. Update the build folder configuration in `app.arc`

```bash
@app
mydeno

@static
folder dist

@http
get /
```

3. Update the build script in `package.json`:

```javascript
"scripts": {
  "build": "mkdirp dist && deno bundle src/browser.tsx > dist/browser.js",
  "start": "npm run build && sandbox"
}
```

> The `npm init` command above will install `@architect/architect`; you can remove that module and install `@architect/sandbox` if you want to make the install step faster 

4. Add `src/browser.tsx` for a browser entry file; notice since Deno by default compiles TypeScript for backend defaults we need to tell it to ignore the `window` global

```typescript
import { React, ReactDOM } from 'https://unpkg.com/es-react@16.8.60/index.js'
import { App } from './http/get-index/app.tsx'

window.addEventListener('DOMContentLoaded', () => {
  //@ts-ignore
  let el = window.document.getElementById('app')
  ReactDOM.hydrate(<App/>, el)
})
```

5. Modify `src/http/get-index/index.ts` to call into a render function

```typescript
import { render } from './render.tsx'

export async function handler() {
  return {
    headers: {
      'content-type': 'text/html; charset=utf8'
    },
    statusCode: 200,
    body: await render()
  }
}
```

6. Add `src/http/get-index/render.tsx`

```typescript
import ReactDOMServer from 'https://dev.jspm.io/react-dom/server';
import { React } from "https://unpkg.com/es-react";
import { App } from './app.tsx';

export async function render() {
  let body = ReactDOMServer.renderToString(<App/>);
  return `<!DOCTYPE html>
<html>
<body>
<div id=app>${body}</div>
<script type="module" src=/_static/browser.js></script>
</body>
</html>
`;
}
```

> `/_static` is a proxy to the compiled static assets on S3 which is useful when you have a Lambda function serving `get /`

7. Last of all, with all this scaffolding out of the way, add `src/http/get-index/app.tsx`

```typescript
import React, { Component } from "https://unpkg.com/es-react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      p: any;
    }
  }
}

type Props = {};

type State = {
  time: Date;
};

export class App extends Component<Props, State> {
  state = {
    time: new Date(),
  };

  componentDidMount() {
    setInterval(() => this.tick(), 1000);
  }

  tick() {
    //@ts-ignore
    this.setState({
      time: new Date(),
    });
  }

  render() {
    //@ts-ignore
    return <p>The current time is {this.state.time.toLocaleTimeString()}</p>;
  }
}
```

8. Clone the example source: 

[![Deploy to Begin](https://static.begin.com/deploy-to-begin.svg)](https://begin.com/apps/create?template=https://github.com/begin-examples/learn-deno-ssr)
