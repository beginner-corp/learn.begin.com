---
layout: sidebar.11ty.js
title: FASTstack training
---

# Hello world 

Architect supports building static web apps alongside backend runtimes Node, Deno, Ruby and Python. You can even mix all these things in the same app. In this exercise build and preview all the different runtime starter apps you are interested in!

## Static

A plain and simple static website

```bash
arc init --static ./my-static-app 
cd my-static-app
arc sandbox
```

## Node

An HTTP function with Node

```bash
arc init --runtime node ./my-node-app 
cd ./my-node-app
npm start
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
