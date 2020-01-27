let data = require('@begin/data')

exports.handler = async function http(req) {
  if (!req.session.loggedIn) {
    return {
      statusCode: 403,
      body: JSON.stringify({authorized: false})
    }
  }
  else {
    let result = await data.get({table: 'progress-${account.id}'})
    return {
      statusCode: 200,
      body: JSON.stringify(result)
    }
  }
}
