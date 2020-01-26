---
layout: sidebar.11ty.js
title: FASTstack training
---

# `@http`

Often we need to run code in a backend trusted runtime process to access secure resources like databases or sensitive APIs. API Gateway lets us add Lambda functions to listening for HTTP events from the same domain as our static website.

HTTP functions are defined very plainly with one route per line. A route in Architect is defined as: an HTTP verb and a path separated by a space (e.g. `get /foo/bar`).

An example  project:

```bash
@app
mysite

@static
@http
get /about
post /contact
```
> Notice how clear it is what this app does by reviewing the .arc file

This will generate the following Lambda function code:

- `src/http/get-about`
- `src/http/post-contact`

Otherwise content in `public` will be served. You can also override `get /` with a Lambda function and access static assets at `/_static`.

### Exercise: add an about page and post form

