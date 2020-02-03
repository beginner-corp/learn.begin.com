module.exports = function admin(account) {
  return `
<!doctype html>
<html>
<body>
<a href=/logout>logout</a>
<pre>${JSON.stringify(account, null, 2)}</pre>
</body>
</html>`
}
