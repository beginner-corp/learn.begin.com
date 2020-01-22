---
layout: layout.11ty.js
title: FASTstack training
---

# Sharing code

- `src/shared`
- `src/views`
- Dependency management 

## `src/share`

Share source code with all functions

## `src/views`

Share source code with all HTTP `GET` functions

## Dependency management

### Static assets

Architect has nice support for writing HTML markup, CSS files and JavaScript modules. From the perspective of dependency management the configuration setting to pay attention to:

- `folder` path to static assets to deploy (default: `/public`)

An example `.arc`:

```
@static
folder dist
```

### Hydrating Lambda functions

Architect encourages deploying isolated Lambda functions that vendor all their required dependencies. Whenever the sandbox is started or the code is deployed Architect checks for the runtime specific dependency manifest files (`package.json`, etc) and ensures that function code is correctly vendored. 

Architect hydrates dependency manifests in `src/**/*` for the following runtimes:

- *Node* looks for `package.json` and dependencies are vendored in `node_modules`
- *Deno* looks for `deps.ts` and dependencies are vendored in `.deno_dir`
- *Ruby* looks for `Gemfile` in `src` and dependencies are vendored in `./vendor`
- *Python* look for `requirements.txt` in `src` and dependencies are vendored in `./vendor`
