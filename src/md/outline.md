### Foundations

- [Infra as code](/foundations/infra-as-code) 
- [Setup](/foundations/setup)
- [Hello world](/foundations/hello-world)
- [Local dev](/foundations/local-dev)
- [Sharing code](/foundations/sharing-code)
- [Deployment](/foundations/deployment)

### Web primitives

- [`@static` assets with S3](/basic/static)                   <aside>Build a basic hello world.</aside>
- [`@http` functions with API Gateway](/basic/http)           <aside>Build a basic hello world.</aside>
- [`@cdn` with CloudFront](/basic/cdn)
- [`@domains` with Route53 and ACM](/basic/dns)

### Web patterns

- [Single page apps](/patterns/spa)                           <aside>React, Svelte, Vue</aside>
- [Static site generators](/patterns/ssg)                     <aside>Eleventy, Gatsby</aside>
- [Deploy esmodules and progressive bundling](/patterns/esm)  <aside>Build out a progressive bundler</aside>
- [Master serverless side rendering](/patterns/ssr)           <aside>Deno TSX</aside>

### Persistent storage

- [Why choose DynamoDB](/storage/dynamo)
- [`@begin/data` simplified DynamoDB](/storage/begin-data)    <aside>CRUD test suite</aside>
- [`@tables` low level DynamoDB](/storage/tables)             <aside>CRUD test suite</aside>

### Advanced web development

- [Forms](/advanced/forms)                                    <aside>Basic contact form post</aside>
- [Tracking sessions](/advanced/sessions)                     <aside>Counter example</aside>
- [Environment variables](/advanced/env)
- [oAuth](/advanced/oauth)                                    <aside>Walk through the GitHub flow</aside>
- [REST](/advanced/rest)                                      <aside>Port the Notes app to the web</aside>
- [GraphQL](/advanced/graphql)                                <aside>Expose the Notes app thru a GraphQL endpoint</aside>

## Asynchronous primitives

> Background tasks that scale to zero

- [`@events` with SNS and Lambda](/async/events)                 <aside></aside>
- [`@queues` with SQS and Lambda](/async/queues)                 <aside></aside>
- [`@scheduled` with EventBridge and Lambda](/async/scheduled)   <aside></aside>

## Final boss

- [`@ws` web sockets with API Gateway](/final/boss/ws)           <aside></aside>
- [Macros](/final/boss/macros)                                   <aside></aside>
