---
layout: basic.11ty.js
title: serverless web dev training with architect
---

# REST

Representational state transfer (REST) is a software architectural style that defines a set of constraints for creating web services. Defined by [Roy Fielding](https://www.ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm) in parallel with HTTP 1.1 the principles of REST are fundamental building blocks for web applications.

Roughly, the idea is that resources are represented by URLs and we can act on those resources with a common set of HTTP verbs. It is a time honored internet tradition to use cats as an example. If `cats` is our resource the RESTful implementation would look something like this:

<table>
  <tr>
    <th><code>HTTP</code></th>
    <th>Database</th>
  </td>
  <tr>
    <td><code>POST /cats</code></td>
    <td><b>Create</b></td>
  </td>
  <tr>
    <td><code>GET /cats</code></td>
    <td><b>Read</b></td>
  </td>

  <tr>
    <td><code>PATCH /cats/:catID</code></td>
    <td><b>Update</b></td>
  </td>
  <tr>
    <td><code>DELETE /cats/:catID</code></td>
    <td><b>Delete</b></td>
  </td>
</table>

> This is why sometimes we call web applications **CRUD** apps


