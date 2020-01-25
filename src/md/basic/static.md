---
layout: sidebar.11ty.js
title: FASTstack training
---

# `@static`

Defines an S3 bucket configured as a website. 

## Configuration options

- `folder` change the deployment folder from `/public`
- `fingerprint` toggle static asset file fingerprinting
- `ignore` ignore files from fingerprinting

### Exercise: deploy a static website

1. Create a static app

```bash
npm init @architect --static myapp
```

2. Try it out

```bash
cd myapp
arc sandbox
```

3. Deploy it

