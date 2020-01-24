module.exports = function layout(params) {
  console.log(Object.keys(params))

  return `<!doctype html>
<html>
<head>
<title>${params.title}</title>
<meta charset=UTF-8>
<link rel=stylesheet type=text/css href=/css/theme.css>
<link rel=stylesheet type=text/css href=/css/index.css>
</head>
<body>
<nav>
  <a href=/ class=${params.page.url === '/'? 'active' : ''}>home</a>
  <a href=/faq class=${params.page.url === '/faq'? 'active' : ''}>faq</a>
  <a href=/instructors class=${params.page.url === '/instructors'? 'active' : ''}>instructors</a>
  <a href=/signup class=${params.page.url === '/signup'? 'active' : ''}>sign up</a>
  <a href=/jargon class=${params.page.url === '/jargon'? 'active' : ''}>jargon</a>
</nav>
<div>
  <section>

    <h2>Foundations</h2>
    <blockquote>
      <p>Getting started with serverless (1 hour)</p>
    </blockquote>
    <ul>
      <li><a href=/foundations/setup class=${params.page.url === '/foundations/setup/'? 'active' : ''}>Setup</a></li>
       <li><a href=/foundations/hello-world class=${params.page.url === '/foundations/hello-world/'? 'active' : ''}>Hello world</a></li>
       <li><a href=/foundations/iac class=${params.page.url === '/foundations/iac/'? 'active' : ''}>Infra as Code</a></li>
      <li><a href=/foundations/local-dev class=${params.page.url === '/foundations/local-dev/'? 'active' : ''}>Local development</a></li>
      <li><a href=/foundations/sharing-code class=${params.page.url === '/foundations/sharing-code/'? 'active' : ''}>Sharing code</a></li>
      <li><a href=/foundations/deployment class=${params.page.url === '/foundations/deployment/'? 'active' : ''}>Deployment</a></li>
      <li><a href=/foundations/logging class=${params.page.url === '/foundations/logging/'? 'active' : ''}>Logging</a></li>
    </ul>

    <hr>

    <h2>Web primitives</h2>
    <blockquote>
      <p>Building blocks for web applications (30 min)</p>
    </blockquote>
    <ul>
      <li><a href=/basic/static class=${params.page.url === '/basic/static/'? 'active' : ''}><code>@static</code> assets with S3</a></li>
      <li><a href=/basic/cdn class=${params.page.url === '/basic/cdn/'? 'active' : ''}><code>@cdn</code> with CloudFront</a></li>
      <li><a href=/basic/http class=${params.page.url === '/basic/http/'? 'active' : ''}><code>@http</code> functions with API Gateway</a></li>
      <li><a href=/basic/dns class=${params.page.url === '/basic/dns/'? 'active' : ''}><code>@domains</code> with Route53 and ACM</a></li>
    </ul>

    <hr>

    <h2>Web patterns</h2>
    <blockquote>
      <p>Techniques for modern web delivery (1 hour)</p>
    </blockquote>
    <ul>
      <li><a href="/patterns/ssg" class=${params.page.url === '/patterns/ssg/'? 'active' : ''}>Static site generators</a></li>
      <li><a href="/patterns/spa" class=${params.page.url === '/patterns/spa/'? 'active' : ''}>Single page apps</a></li>
      <li><a href="/patterns/esm" class=${params.page.url === '/patterns/esm/'? 'active' : ''}>Deploy esmodules and progressive bundling</a></li>
      <li><a href="/patterns/ssr" class=${params.page.url === '/patterns/ssr/'? 'active' : ''}>Master serverless side rendering</a></li>
    </ul>

    <hr>
    
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

    <hr>

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

    <hr>

    <h2>Asynchronous primitives</h2>
    <blockquote>
      <p>Background tasks that scale to zero (1 hour)</p>
    </blockquote>
    <ul>
      <li><a href="/async/events"><code>@events</code> with SNS and Lambda</a></li>
      <li><a href="/async/queues"><code>@queues</code> with SQS and Lambda</a></li>
      <li><a href="/async/scheduled"><code>@scheduled</code> with EventBridge and Lambda</a></li>
    </ul>

    <hr>

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
