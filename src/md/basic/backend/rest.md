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

In this guide we will implement a REST-ish API using Lambda and API Gateway. Combining on the previous lessons we will deploy the 11ty static site generator with an oAuth login to an admin interface for saving drafts of articles. Articles can be created, updated, destroyed and published _back to GitHub_ as markdown documents. 

1. Add the following routes in Begin.com

- `get /api/drafts/:key` edit draft 
- `post /api/drafts` create draft
- `post /api/drafts/:key` update draft
- `post /api/drafts/:key/destroy` destroy draft
- `post /api/drafts/:key/publish` publish draft!

<section style="display:block; background:#d7ebf2; border-left:5px solid cyan; padding:10px;">
A strict REST implementation looks like this:

- `get /api/drafts/:key` edit draft 
- `post /api/drafts` create draft
- `patch /api/drafts/:key` update draft
- `delete /api/drafts/:key` destroy draft
- `put /api/drafts/:key` publish draft!

The problem is HTTP verbs `PATCH`, `DELETE` and `PUT` are not supported by HTML forms in web browsers. XMLHTTPRequest and `fetch` support all verbs but this makes JavaScript a hard requirement for your application to function in addition to [less favorable accessibility behavior](https://www.w3.org/WAI/tutorials/forms/). Only supporting strict REST results in a less accessible web site. To support both _can be achieved_ by duplicating deployment Lambda code but this is usually not a good use of time. 

Strict REST adherence is not necessarily an appropriate trade-off for all web application workloads but absolutely valid exercise and important for external facing APIs as a service. 
</section>

2. Setup a test rig
3. Create `src/shared/drafts.js`
4. Create `src/views`
  1. Create `src/views/admin.js` 
  2. Create `src/views/form.js` 
  3. Create `src/views/layout.js` 
  4. Create `src/views/signin.js` 
5. Update `src/http/get-admin`

```javascript
```

6. Update `src/http/post-api-drafts/index.js` with create draft logic
7. Update `src/http/get-api-drafts-000key/index.js` with logic to display the edit form
8. Update `src/http/post-api-drafts-000key/index.js` with logic to update draft
9. Update `src/http/post-api-drafts-000key-destroy/index.js` with logic for destroying drafts
10. Update `src/http/post-api-drafts-000key-publish/index.js` with publish to GitHub logic
11. Preview by starting the dev server

```bash
npm start
```

12. Deploy to [Begin.com](https://begin.com)
