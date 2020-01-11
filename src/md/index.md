---
layout: layout.11ty.js
title: My Rad Markdown Blog Post
---

- foundation
  - infra as code
    - formats: .arc, .json, .yaml and .toml
    - primitives
      - compute: http, ws, events, queues, scheduled
      - storage: tables, indexes, static
      - network: domains, cdn
  - setup
    - mac
    - windows
    - linux
  - hello world by supported runtimes (note: any runtime can be supported with lambda layers)
    - node
    - deno
    - ruby
    - python
  - local dev
    - sandbox
    - testing 
  - sharing code
    - src/shared
    - src/views
  - dependency management 
    - node
    - deno
    - ruby
    - python
  - deployment
    - package for AWS SAM
    - deploy to AWS
    - deploy to Begin

- web primitives
  - `@static` assets with S3
  - `@cdn` with CloudFront
  - `@http` functions with API Gateway
  - `@domains` with Route53 and ACM

- storage
  - begin/data
  - tables
  - indexes

- advanced web dev
  - environment variables
  - forms
  - tracking sessions
  - binary content
  - REST
  - GraphQL
  - oauth
    - github
    - slack
  - `@ws` functions
    - connecting
    - tracking sessions
    - sending messages

- background tasks
  - `@events` functions
  - `@queues` functions
  - `@scheduled` functions
  - `@tables` functions

- advanced
  - macros
  - layers
