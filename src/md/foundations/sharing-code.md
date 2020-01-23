---
layout: sidebar.11ty.js
title: FASTstack training
---

# Sharing code

As applications grow it becomes important to share code between functions. Architect provides several conventions for common code sharing use cases.

- `src/shared` to share code will all Lambdas
- `src/views` to share code with Lambdas handing `GET` requests
- `arc hydrate` runs common package managers to ensure each Lambda has exactly the dependencies specified in the code

## `src/share`

Share source code with all functions in `src`. Files in `src/shared` are copied into all functions defined by `.arc`. 

- *Node* `src/shared` dependencies are vendored in `node_modules/@architect/shared`
- *Deno* `src/shared` dependencies are vendored in `./vendor/shared`
- *Ruby* `src/shared` dependencies are vendored in `./vendor/shared`
- *Python* `src/shared` dependencies are vendored in `./vendor/shared`

## `src/views`

Share source code with all Lambdas handing `GET` requests. Files in `src/views` are copied into `GET` functions defined by `.arc`. This is specifically for serverless side rendering templates. Coldstarts are downstream function payload size so this limits the frontend templates to only the Lambdas that need them.

- *Node* `src/views` dependencies are vendored in `node_modules/@architect/shared`
- *Deno* `src/views` dependencies are vendored in `./vendor/views`
- *Ruby* `src/views` dependencies are vendored in `./vendor/views`
- *Python* `src/views` dependencies are vendored in `./vendor/views`

## `arc hydrate`

Architect encourages deploying isolated Lambda functions that vendor all their required dependencies. Whenever the sandbox is started or the code is deployed Architect checks for the runtime specific dependency manifest files (`package.json`, etc) and ensures that function code is correctly vendored. 

Architect hydrates dependency manifests in `src/**/*` for the following runtimes:

- *Node* looks for `package.json` and dependencies are vendored in `node_modules`
- *Deno* looks for `deps.ts` and dependencies are vendored in `.deno_dir`
- *Ruby* looks for `Gemfile` in `src` and dependencies are vendored in `./vendor`
- *Python* look for `requirements.txt` in `src` and dependencies are vendored in `./vendor`
