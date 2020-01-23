---
layout: sidebar.11ty.js
title: FASTstack training
---

# Logging

Running locally the Architect sandbox prints logging statements to stdout. Once deployed to AWS logs are aggregated by CloudWatch. Logs can be read in the console or by running `arc logs` with the path to the function.

```bash
arc logs src/http/get-index`
```

To read production logs run:

```bash
arc logs production src/http/get-index
```

