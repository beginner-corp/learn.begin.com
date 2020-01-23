---
layout: sidebar.11ty.js
title: FASTstack training
---

# Hello world by runtime

> Note: any runtime can be supported with Lambda layers

- Static
- Node
- Deno
- Ruby
- Python

## Static

A vanilla static website

```bash
mkdir staticapp
cd staticapp
echo -e '@app\nstaticapp\n@static' > .arc
arc init
arc sandbox
```

## Node

An HTTP function with Node

```bash
arc init --runtime node ./my-node-app 
cd ./my-node-app
arc sandbox
```

## Deno

An HTTP function with Deno

```bash
arc init --runtime deno ./my-deno-app 
cd ./my-deno-app
arc sandbox
```

## Ruby

An HTTP function with Ruby

```bash
arc init --runtime deno ./my-ruby-app 
cd ./my-ruby-app
arc sandbox
```

## Python 

An HTTP function with Python

```bash
arc init --runtime deno ./my-python-app 
cd ./my-python-app
arc sandbox
```
