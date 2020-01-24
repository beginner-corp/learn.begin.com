module.exports = function layout(params) {
  //console.log(params)
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
  <a href=/faq class=${params.page.url === '/faq/'? 'active' : ''}>faq</a>
  <a href=/instructors class=${params.page.url === '/instructors/'? 'active' : ''}>instructors</a>
  <a href=/signup class=${params.page.url === '/signup/'? 'active' : ''}>sign up</a>
  <a href=/jargon class=${params.page.url === '/jargon/'? 'active' : ''}>jargon</a>
</nav>
<main>${params.content}</main>
</body>
</html>`
}
