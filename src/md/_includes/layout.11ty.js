module.exports = function layout(params) {
  return `<!doctype html>
<html>
<head>
<title>${params.title}</title>
</head>
<body>
<nav>
  <a href=/>home</a>
  <a href=/curriculum>curriculum</a>
  <a href=/instructors>instructors</a>
  <a href=/signup>sign up</a>
</nav>
<main>${params.content}</main>
</body>
</html>`
}
