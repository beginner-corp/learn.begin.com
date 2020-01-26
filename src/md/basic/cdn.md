---
layout: sidebar.11ty.js
title: FASTstack training
---

# `@cdn`

Adding `@cdn` to `.arc` will tell Architect to setup a CloudFront distribution the next time it deploys. CloudFront is a Content Delivery Network (CDN) which speeds your web content to the edges of cities all over the world making your website fast no matter where your customers are.

## Exercise: enable fingerprinting

> Note: this only applies to deploying to AWS directly as [Begin.com](https://begin.com) automatically sets up CDN for you

1. Add `@cdn` to `.arc`

```bash
@app
mystaticapp

@cdn
@http
@static
fingerprint true
```

2. Add clientside JavaScript

```javascript
// public/index.js
console.log('hello from index.js')
```

3. Add helper to `public/index.html`

```html
<!doctype html>
<html>
<body>Hello world from public/index.html</body>
<script type=module src=${arc.static('index.js')}></script>
</html>
```
> Notice the special syntax for the script `src` attribute

2. Deploy it `arc deploy`

3. Be patient! CloudFront distributions are slow to propagate.
