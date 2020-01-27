let data = require('@begin/data')

exports.handler = async function http(req) {
  if (req.session.loggedIn) {
    return {
      statusCode: 403,
      body: JSON.stringify({authorized: false})
    }
  }
  else {
    return {
      statusCode: 403
    }
  }
}
