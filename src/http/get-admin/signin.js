module.exports = function signin() {

  let client_id = process.env.GITHUB_CLIENT_ID
  let redirect_uri = process.env.GITHUB_REDIRECT
  let href = `https://github.com/login/oauth/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}`

  return `
<!doctype html>
<html>
<body>
<a href=${href}>Sign in with GitHub</a>
</body>
</html>`
}
