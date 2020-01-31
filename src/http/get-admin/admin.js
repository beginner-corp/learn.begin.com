module.exports = function admin(account) {
  return `
<!doctype html>
<html>
<body>
<form method=post action=/logout>
  <button>Logout</button>
</form>
<pre>${JSON.stringify(account, null, 2)}</pre>
</body>
</html>`
}
