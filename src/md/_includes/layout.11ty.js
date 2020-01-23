module.exports = function layout(params) {
  console.log(params)
  return `<!doctype html>
<html>
<head>
<title>${params.title}</title>
<meta charset=UTF-8>
</head>
<body>
<nav>
  <a href=/>home</a>
  <a href=/faq>faq</a>
  <a href=/instructors>instructors</a>
  <a href=/signup>sign up</a>
  <a href=/jargon>jargon</a>
</nav>
<main>${params.content}</main>
</body>
</html>`
}
