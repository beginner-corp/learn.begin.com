---
layout: basic.11ty.js
title: serverless web dev training with architect
---

# REST

Representational state transfer (REST) is a software architectural style that defines a set of constraints for creating web services. Defined by [Roy Fielding](https://www.ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm) in parallel with HTTP 1.1 the principles of REST are fundamental building blocks for web applications.

Roughly, the idea is that resources are represented by URLs and we can act on those resources with a common set of HTTP verbs. 

<table>
  <tr>
    <th>Database action</th>
    <th><code>HTTP</code></th>
  </td>
  <tr>
    <td><b>Create</b></td>
    <td><code>POST /todos</code></td>
  </td>
  <tr>
    <td><b>Read</b></td>
    <td><code>GET /todos</code></td>
  </td>

  <tr>
    <td><b>Update</b></td>
    <td><code>PATCH /todos/:key</code></td>
  </td>
  <tr>
    <td><b>Delete</b></td>
    <td><code>DELETE /todos/:key</code></td>
  </td>
</table>

> Create, read, update and delete verbs are often abbreviated as _CRUD app_


