module.exports = function layout(params) {
  return `
<!doctype html>
<html>
<head>
  <meta charset=UTF-8>
  <meta name=viewport content=width=device-width,initial-scale=1>
  <link rel="shortcut icon" href="https://static.begin.com/web/favicon/favicon.ico">
  <link rel="icon" sizes="16x16 32x32 64x64" href="https://static.begin.com/web/favicon/favicon.ico">
  <link rel="icon" type="image/png" sizes="196x196" href="https://static.begin.com/web/favicon/favicon-192.png">
  <link rel="icon" type="image/png" sizes="160x160" href="https://static.begin.com/web/favicon/favicon-160.png">
  <link rel="icon" type="image/png" sizes="96x96" href="https://static.begin.com/web/favicon/favicon-96.png">
  <link rel="icon" type="image/png" sizes="70x70" href="https://static.begin.com/web/favicon/favicon-70.png">
  <link rel="icon" type="image/png" sizes="64x64" href="https://static.begin.com/web/favicon/favicon-64.png">
  <link rel="icon" type="image/png" sizes="32x32" href="https://static.begin.com/web/favicon/favicon-32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="https://static.begin.com/web/favicon/favicon-16.png">
  <link rel="apple-touch-icon" href="https://static.begin.com/web/favicon/favicon-180.png">
  <link rel="apple-touch-icon" sizes="180x180" href="https://static.begin.com/web/favicon/favicon-180.png">
  <link rel="apple-touch-icon" sizes="167x167" href="https://static.begin.com/web/favicon/favicon-167.png">
  <link rel="apple-touch-icon" sizes="152x152" href="https://static.begin.com/web/favicon/favicon-152.png">
  <link rel="apple-touch-icon" sizes="144x144" href="https://static.begin.com/web/favicon/favicon-144.png">
  <link rel="apple-touch-icon" sizes="120x120" href="https://static.begin.com/web/favicon/favicon-120.png">
  <link rel="apple-touch-icon" sizes="114x114" href="https://static.begin.com/web/favicon/favicon-114.png">
  <link rel="apple-touch-icon" sizes="76x76" href="https://static.begin.com/web/favicon/favicon-76.png">
  <link rel="apple-touch-icon" sizes="72x72" href="https://static.begin.com/web/favicon/favicon-72.png">
  <link rel="apple-touch-icon" sizes="60x60" href="https://static.begin.com/web/favicon/favicon-60.png">
  <link rel="apple-touch-icon" sizes="57x57" href="https://static.begin.com/web/favicon/favicon-57.png">

  <!-- HTML Meta Tags -->
    <title>${params.title}</title>
    <meta name="description" content="https://begin.com"/>
    <!-- Google / Search Engine Tags -->
    <meta itemprop="name" content="Begin - Modern apps built fast af.">
    <meta itemprop="description" content="Begin is a ridiculously quick platform for building modern web apps, sites, & APIs. Get started for free, no credit card required.">
    <meta itemprop="image" content="http://s3.us-west-1.amazonaws.com/begin-staging/web/begin-meta-6f864404ab.png">
    <!-- Facebook Meta Tags -->
    <meta property="og:url" content="https://begin.com">
    <meta property="og:type" content="website">
    <meta property="og:title" content="Begin - Modern apps built fast af.">
    <meta property="og:description" content="Begin is a ridiculously quick platform for building modern web apps, sites, & APIs. Get started for free, no credit card required.">
    <meta property="og:image" content="http://s3.us-west-1.amazonaws.com/begin-staging/web/begin-meta-6f864404ab.png">
    <!-- Twitter Meta Tags -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Begin - Modern apps built fast af.">
    <meta name="twitter:description" content="Begin is a ridiculously quick platform for building modern web apps, sites, & APIs. Get started for free, no credit card required.">
    <meta name="twitter:image" content="http://s3.us-west-1.amazonaws.com/begin-staging/web/begin-meta-6f864404ab.png">
    <!-- Meta Tags end-->

  <link rel=stylesheet type=text/css href=https://docs.begin.com/css/app.css>
</head>
<body>
<nav>
  <a href=/ class=${params.page.url === '/'? 'active' : ''}>home</a>
  <a href=/faq class=${params.page.url === '/faq'? 'active' : ''}>faq</a>
  <a href=/jargon class=${params.page.url === '/jargon'? 'active' : ''}>jargon</a>
</nav>
<div>
  <section>

    <h2>Foundations</h2>
    <ul>
      <li><a href=/foundations/setup       class=${params.page.url === '/foundations/setup/'?       'active' : ''}>‣ Setup</a></li>
      <li><a href=/foundations/hello-world class=${params.page.url === '/foundations/hello-world/'? 'active' : ''}>‣ Hello world</a></li>
      <li><a href=/foundations/deployment  class=${params.page.url === '/foundations/deployment/'?  'active' : ''}>‣ Deploy</a></li>
    </ul>

    <hr>

    <h2>Frontend patterns</h2>
    <ul>
      <li><a href=/frontend/spa class=${params.page.url === '/frontend/spa/'? 'active' : ''}>‣ Single-page applications</a></li>
      <li><a href=/frontend/ssg class=${params.page.url === '/frontend/ssg/'? 'active' : ''}>‣ Static site generators</a></li>
      <li><a href=/frontend/ssr class=${params.page.url === '/frontend/ssr/'? 'active' : ''}>‣ Server side rendering</a></li>
    </ul>

    <hr>

    <h2>Handling state</h2>
    <ul>
      <li><a href=/state/env      class=${params.page.url === '/state/env/'?      'active' : ''}>‣ Environment variables</a></li>
      <li><a href=/state/sessions class=${params.page.url === '/state/sessions/'? 'active' : ''}>‣ Tracking sessions</a></li>
      <li><a href=/state/oauth    class=${params.page.url === '/state/oauth/'?    'active' : ''}>‣ oAuth</a></li>
    </ul>

    <hr>

    <h2>Backend patterns</h2>
    <ul>
      <li><a href=/backend/rest    class=${params.page.url === '/backend/rest/'?    'active' : ''}>‣ REST</a></li>
      <li><a href=/backend/graphql class=${params.page.url === '/backend/graphql/'? 'active' : ''}>‣ GraphQL</a></li>
      <li><a href=/backend/ws      class=${params.page.url === '/backend/ws/'?      'active' : ''}>‣ Web sockets</a></li>
    </ul>

  </section>

  <main id="doc">${params.content}</main>
</div>
<footer>
  <a href=https://github.com/beginner-corp/learn.begin.com/blob/main/${params.page.inputPath}>Edit this page on GitHub</a>
</footer>
<section id=popup style=display:none></section>
<script type=module src=/_static/js/index.js></script>
</body>
</html>`
}
