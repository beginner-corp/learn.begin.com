---
layout: basic.11ty.js
title: serverless web dev training with architect
---

# Static site generators

There are many static site generators to help you turn Markdown into HTML. This guide uses [Eleventy](https://www.11ty.dev/). [Literally!](https://github.com/smallwins/training.begin.com)

1. Create a fresh Architect project, go into your project directory, create a `package.json` file, and install npm packages.

```bash
npm init @architect --static ./my-ssg
cd my-ssg
npm init -f
npm install @architect/sandbox @11ty/eleventy @11ty/eleventy-plugin-syntaxhighlight
```

2. Change your build folder configuration in the `.arc` file inside your project to the following, and then save the file.

```bash
@app
my-ssg

@static
folder _site
```

3. Update the build script in the `package.json` file inside your project:

```javascript
"scripts": {
  "build": "eleventy",
  "watch": "eleventy --serve",
  "start": "npm run watch & ARC_STATIC_SPA=false sandbox"
}
```
> Note: We opt out of loading `index.html` by setting `ARC_STATIC_SPA=false` in the sandbox in one of the npm start scripts.

4. Add an `.eleventy.js` configuration file to enable syntax highlighting and to set the source directory to `src/md`.

```javascript
let syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(syntaxHighlight)
  return {
    dir: {
      input: 'src/md'
    }
  }
}
```

5. Add a `src` directory and an `md` directory inside it, and then add an `index.md` Markdown file to your `md` directory.

```md
# hi from markdown

- cool
- bullet
- list
```

6. Preview by starting the dev server.

```bash
npm start
```

7. Clone the example source:

[![Deploy to Begin](https://static.begin.com/deploy-to-begin.svg)](https://begin.com/apps/create?template=https://github.com/begin-examples/learn-node-ssg)
