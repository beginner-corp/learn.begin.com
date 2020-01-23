module.exports = function layout(params) {
  return `<!doctype html>
<html>
<head>
<title>${params.title}</title>
<meta charset=UTF-8>
<style>
div {
  display: flex;
}
div > section {
  width: 600px;
}
div > main {
  flex-grow: 1;
  width: 100%;
}
</style>
</head>
<body>
<nav>
  <a href=/>home</a>
  <a href=/faq>faq</a>
  <a href=/instructors>instructors</a>
  <a href=/signup>sign up</a>
  <a href=/jargon>jargon</a>
</nav>
<div>
  <section>

    <h2>Foundations</h2>
    <blockquote>
      <p>Getting started with serverless (1 hour)</p>
    </blockquote>
    <ul>
      <li><a href="/foundations/setup">Setup</a></li>
       <li><a href="/foundations/hello-world">Hello world</a></li>
       <li><a href="/foundations/iac">Infra as Code</a></li>
      <li><a href="/foundations/local-dev">Local development</a></li>
      <li><a href="/foundations/sharing-code">Sharing code</a></li>
      <li><a href="/foundations/deployment">Deployment</a></li>
      <li><a href="/foundations/logging">Logging</a></li>
    </ul>

    <h2>Web primitives</h2>
    <blockquote>
      <p>Building blocks for web applications (30 min)</p>
    </blockquote>
    <ul>
      <li><a href="/basic/static"><code>@static</code> assets with S3</a></li>
      <li><a href="/basic/cdn"><code>@cdn</code> with CloudFront</a></li>
      <li><a href="/basic/http"><code>@http</code> functions with API Gateway</a></li>
      <li><a href="/basic/dns"><code>@domains</code> with Route53 and ACM</a></li>
    </ul>

    <h2>Web patterns</h2>
    <blockquote>
      <p>Techniques for modern web delivery (1 hour)</p>
    </blockquote>
    <ul>
      <li><a href="/patterns/ssg">Static site generators</a></li>
      <li><a href="/patterns/spa">Single page apps</a></li>
      <li><a href="/patterns/esm">Deploy esmodules and progressive bundling</a></li>
      <li><a href="/patterns/ssr">Master serverless side rendering</a></li>
    </ul>
    
    <h2>Persistent storage</h2>
    <blockquote>
      <p>Reading and writing structured data (1 hour)</p>
    </blockquote>
    <ul>
      <li><a href="/storage/why">Why choose DynamoDB?</a></li>
      <li><a href="/storage/begin-data"><code>@begin/data</code> simplified DynamoDB</a></li>
      <li><a href="/storage/tables">DynamoDB low level</a></li>
      <li><a href="/storage/streams">Streams</a></li>
    </ul>

    <h2>Web app development</h2>
    <blockquote>
      <p>Proven techniques done serverless (2 hours)</p>
    </blockquote>
    <ul>
      <li><a href="/advanced/forms">Forms</a></li>
      <li><a href="/advanced/sessions">Tracking sessions</a></li>
      <li><a href="/advanced/env">Environment variables</a></li>
      <li><a href="/advanced/oauth">oAuth</a></li>
      <li><a href="/advanced/rest">REST</a></li>
      <li><a href="/advanced/graphql">GraphQL</a></li>
      <li><a href="/final/boss/ws">Web sockets</a></li>
    </ul>

    <h2>Asynchronous primitives</h2>
    <blockquote>
      <p>Background tasks that scale to zero (1 hour)</p>
    </blockquote>
    <ul>
      <li><a href="/async/events"><code>@events</code> with SNS and Lambda</a></li>
      <li><a href="/async/queues"><code>@queues</code> with SQS and Lambda</a></li>
      <li><a href="/async/scheduled"><code>@scheduled</code> with EventBridge and Lambda</a></li>
    </ul>

    <h2>Final boss</h2>
    <blockquote>
      <p>Extend into raw CloudFormation to access any AWS service (? hours)</p>
    </blockquote>
    <ul>
      <li><a href="/final/boss/macros">Macros</a></li>
    </ul>
  </section>

  <main>${params.content}</main>
</div>
</body>
</html>`
}
