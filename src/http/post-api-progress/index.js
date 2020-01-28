let arc = require('@architect/functions')
let data = require('@begin/data')

async function progress(req) {
  try {
    // pls login
    if (!req.session.account)
      return {status: 403, json: {}}

    // expected params
    if (!req.body.page || !req.body.complete || !req.body.title)
      return {status: 401, json: {}}

    // we'll save the data in a table named 'progress' by the github id
    let table = 'progress'
    let key = req.session.account.id

    // get their current progress
    let progress = await data.get({table, key})

    // its ok if they haven't made any progress yet..
    if (!progress) {
      progress = {table, key}
    }

    // mutate the progress record
    progress[req.body.page] = {
      complete: req.body.complete || false,
      title: req.body.title
    }

    // save it and respond
    await data.set(progress)

    return {
      status: 201,
      json: {progress}
    }
  }
  catch(e) {
    return {
      status: 500,
      html: 'fail ' + e.message
    }
  }
}

exports.handler = arc.http.async(progress)
