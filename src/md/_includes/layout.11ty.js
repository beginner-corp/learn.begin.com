module.exports = function layout(params) {
  return `<!doctype html>
<html>
<head>
<title>${params.title}</title>
<meta charset=UTF-8>
<meta name=viewport content=width=device-width,initial-scale=1>
<link rel=stylesheet type=text/css href=/_static/css/theme.css>
<link rel=stylesheet type=text/css href=/_static/css/index.css>
</head>
<body>
<nav>
  <a href=/ class=${params.page.url === '/'? 'active' : ''}>home</a>
  <a href=/faq class=${params.page.url === '/faq/'? 'active' : ''}>faq</a>
  <a href=/instructors class=${params.page.url === '/instructors/'? 'active' : ''}>instructors</a>
  <a href=/jargon class=${params.page.url === '/jargon/'? 'active' : ''}>jargon</a>
</nav>
<div>
  <main>${params.content}</main>
</div>
<footer>
  <a href=https://github.com/smallwins/training.begin.com/blob/master/${params.page.inputPath}>Edit this page on GitHub</a>
</footer>
<script type=module src=/_static/js/index.js></script>
</body>
</html>`
}
