---
layout: layout.11ty.js
title: FASTstack training
---

# Sharing code

- src/shared
- src/views
- Dependency management 

## `src/share`

Share source code with all functions

## `src/views`

Share source code with all HTTP `GET` functions

## Dependency management

### Static assets

Architect has nice support for writing html, css and esmodules javascript. From the perspective of dep management the configuration settings to pay attention to are:

- `folder` path to static assets to deploy (default: `/public`)
- `ignore` files to ignore 

An example `.arc`:

```
@static
folder dist
fingerprint true
ignore
  zip
  tar
```

### Hydrating Lambda functions

Architect encourages deploying isolated Lambda functions that vendor all their required dependencies. Whenever the sandbox is started or the code is deployed Architect checks for the runtime specific dependency manifest files (`package.json`, etc) and ensures that function code is correctly vendored. 

Architect hydrates dependency manifests in `src/**/*` for the following runtimes:

- *Node* looks for `package.json` and deps are vendored in `node_modules`
- *Deno* looks for `deps.ts` and deps are vendored in `.deno_dir`
- *Ruby* looks for `Gemfile` in `src` and deps are vendored in `./vendor`
- *Python* look for `requirements.txt` in `src` and deps are vendored in `./vendor`
