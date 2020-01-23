---
layout: sidebar.11ty.js
title: FASTstack training
---

# Exercise 💯: hello world by runtime

> Note: any runtime can be supported with Lambda layers

In this exercise build and preview as many of the different runtime starter applications as you can!

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
arc init --runtime ruby ./my-ruby-app 
cd ./my-ruby-app
arc sandbox
```

## Python 

An HTTP function with Python

```bash
arc init --runtime python ./mypy 
cd ./mypy
arc sandbox
```
