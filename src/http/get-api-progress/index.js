let arc = require('@architect/functions')
let data = require('@begin/data')
let {URIs} = require('@architect/shared/constants')
let oauthState = require('@architect/shared/oauth-state')

async function api(req) {
  let stage = 'local'
  if (process.env.NODE_ENV === 'staging') stage = 'staging'
  if (process.env.NODE_ENV === 'production') stage = 'production'
  if (process.env.ARC_LOCAL) stage = 'local'

  let referer = req.headers.referer || req.headers.Referer
  let learnURL = URIs[stage].learn
  let state = oauthState({redirect: referer || learnURL})
  let href = `${URIs[stage].begin}/login?state=${state}`

  let account = req.session && req.session.account
  if (!account) {
    return {
      statusCode: 403,
      body: JSON.stringify({
        authorized: false,
        href
      })
    }
  }
  else {
    let table = 'progress'
    let key = account.accountID
    let result = await data.get({table, key})
    return {
      body: JSON.stringify({
        account: {
          name: account.name,
          login: account.login,
          avatar: account.avatar
        },
        authorized: true,
        progress: result || {}
      })
    }
  }
}

exports.handler = arc.http.async(api)
