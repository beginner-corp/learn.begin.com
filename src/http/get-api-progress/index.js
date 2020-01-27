let arc = require('@architect/functions')
let data = require('@begin/data')

async function api(req) {
  if (!req.session.account) {
    let client_id = process.env.GITHUB_CLIENT_ID
    let redirect_uri = process.env.GITHUB_REDIRECT
    return {
      statusCode: 403,
      body: JSON.stringify({
        authorized: false,
        href: `https://github.com/login/oauth/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}`
      })
    }
  }
  else {
    let table = 'progress'
    let key = req.session.account.id
    let result = await data.get({table, key})
    return {
      body: JSON.stringify({
        account: {
          name: req.session.account.name,
          login: req.session.account.login,
          avatar: req.session.account.avatar
        },
        authorized: true,
        progress: result || {}
      })
    }
  }
}

exports.handler = arc.http.async(api)
