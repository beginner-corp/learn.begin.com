let arc = require('@architect/functions')
let admin = require('./admin')
let signin = require('./signin')

async function http(req) {

  let account = req.session.account
  let render = account? admin : signin

  return {
    html: render(account)
  }
}

exports.handler = arc.http.async(http)
