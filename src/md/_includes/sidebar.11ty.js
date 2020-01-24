module.exports = function layout(params) {
  return `<!doctype html>
<html>
<head>
<title>${params.title}</title>
<meta charset=UTF-8>
<style>
pre[class*="language-"],
code[class*="language-"] {
	color: #d4d4d4;
	font-size: 13px;
	text-shadow: none;
	font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
	direction: ltr;
	text-align: left;
	white-space: pre;
	word-spacing: normal;
	word-break: normal;
	line-height: 1.5;
	-moz-tab-size: 4;
	-o-tab-size: 4;
	tab-size: 4;
	-webkit-hyphens: none;
	-moz-hyphens: none;
	-ms-hyphens: none;
	hyphens: none;
}

pre[class*="language-"]::selection,
code[class*="language-"]::selection {
	text-shadow: none;
	background: #b3d4fc;
}

@media print {
	pre[class*="language-"],
	code[class*="language-"] {
		text-shadow: none;
	}
}

pre[class*="language-"] {
	padding: 1em;
	margin: .5em 0;
	overflow: auto;
	background: #1e1e1e;
}

:not(pre) > code[class*="language-"] {
	padding: .1em .3em;
	border-radius: .3em;
	color: #db4c69;
	background: #f9f2f4;
}
/*********************************************************
* Tokens
*/
.namespace {
	opacity: .7;
}

.token.comment,
.token.prolog,
.token.doctype,
.token.cdata {
	color: #6a9955;
}

.token.punctuation {
	color: #d4d4d4;
}

.token.property,
.token.tag,
.token.boolean,
.token.number,
.token.constant,
.token.symbol,
.token.deleted {
	color: #b5cea8;
}

.token.selector,
.token.attr-name,
.token.string,
.token.char,
.token.builtin,
.token.inserted {
	color: #ce9178;
}

.token.operator,
.token.entity,
.token.url,
.language-css .token.string,
.style .token.string {
	color: #d4d4d4;
	background: #1e1e1e;
}

.token.atrule,
.token.attr-value,
.token.keyword {
	color: #c586c0;
}

.token.function {
	color: #dcdcaa;
}

.token.regex,
.token.important,
.token.variable {
	color: #d16969;
}

.token.important,
.token.bold {
	font-weight: bold;
}

.token.italic {
	font-style: italic;
}

.token.constant {
	color: #9CDCFE;
}

.token.class-name {
	color: #4EC9B0;
}

.token.parameter {
	color: #9CDCFE;
}

.token.interpolation {
	color: #9CDCFE;
}

.token.punctuation.interpolation-punctuation {
	color: #569cd6;
}

.token.boolean {
	color: #569cd6;
}

.token.property {
	color: #9cdcfe;
}

.token.selector {
	color: #d7ba7d;
}

.token.tag {
	color: #569cd6;
}

.token.attr-name {
	color: #9cdcfe;
}

.token.attr-value {
	color: #ce9178;
}

.token.entity {
	color: #4ec9b0;
	cursor: unset;
}

.token.namespace {
	color: #4ec9b0;
}
/*********************************************************
* Language Specific
*/
pre[class*="language-javascript"],
code[class*="language-javascript"] {
	color: #4ec9b0;
}

pre[class*="language-css"],
code[class*="language-css"] {
	color: #CE9178;
}

pre[class*="language-html"],
code[class*="language-html"] {
	color: #d4d4d4;
}

.language-html .token.punctuation {
	color: #808080;
}
/*********************************************************
* Line highlighting
*/
pre[data-line] {
	position: relative;
}

pre[class*="language-"] > code[class*="language-"] {
	position: relative;
	z-index: 1;
}

.line-highlight {
	position: absolute;
	left: 0;
	right: 0;
	padding: inherit 0;
	margin-top: 1em;
	background: #f7ebc6;
	box-shadow: inset 5px 0 0 #f7d87c;
	z-index: 0;
	pointer-events: none;
	line-height: inherit;
	white-space: pre;
}


body {
  box-sizing: border-box;
  color: rgb(46, 47, 62);
  font-family: -system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
  font-size: 20px;
  font-weight: 400;
  line-height: 32px;
  margin-bottom: 20px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  overflow-wrap: break-word;
}

nav {
  background: black;
  display: flex;
}
nav a {
  color: grey;
  text-decoration: none;
  margin: 10px;
}
nav a:hover {
  color: white;
  text-decoration: underline;
}

div {
  display: flex;
}

div > section {
  width: 530px;
  background: #f8f8fa;
  border-right: 20px solid white;
  padding: 20px;
  font-size: 15px;
  font-weight: 400;
  line-height: 32px;
}

section h2:nth-child(1) {
  margin: 0;
}

section blockquote,
section ul,
section ul li {
  opacity: .8;
  margin: 0;
  padding: 0;
}
section ul li {
  list-style:none;
  margin: 0;  
  padding: 0;
}  
section ul li a {
  padding-left: 20px;
  color: green;
  display: block;
}
section ul li a:hover {
  background: green;
  text-decoration: none;
  color: white;
}
section hr {
  border: 2px solid white;
  margin: 15px;
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

    <hr>

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

    <hr>

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
