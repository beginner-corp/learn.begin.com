---
layout: basic.11ty.js
title: serverless web dev training with architect
---

# Static site generators

The are _many_ static site generators to help you turn Markdown into HTML. This guide uses [Eleventy](https://www.11ty.dev/). [Literally!](https://github.com/smallwins/training.begin.com)

1. Create a fresh Architect project

```bash
npm init @architect --static ./my-ssg
cd my-ssg
npm init -f
npm install @architect/sandbox @11ty/eleventy @11ty/eleventy-plugin-syntaxhighlight
```

2. Update the build folder configuration in `.arc`

```bash
@app
my-ssg

@static
folder _site
```

3. Update the build script in `package.json`:

```javascript
"scripts": {
  "build": "eleventy",
  "watch": "eleventy --serve",
  "start": "npm run watch & ARC_STATIC_SPA=false sandbox"
}
```
> Note we opt out of loading `index.html` by setting `ARC_SPA_FALSE` in the sandbox

4. Add a `.eleventy.js` config file to enable syntax highlighting and to set the source directory to `src/md`

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

5. Add `src/md/index.md`

```md
# hi from markdown

- cool 
- bullet
- list
```

6. Preview by starting the dev server

```bash
npm start
```

7. Deploy to [Begin.com](https://begin.com) (and do not forget you need to `ARC_STATIC_SPA`!)
