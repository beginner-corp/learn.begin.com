module.exports = function oauthState(obj) {
  try {
    let json = JSON.stringify(obj)
    let state = Buffer.from(json).toString('base64')
    return encodeURIComponent(state)
  }
  catch (err) {
    console.log('State is invalid, cannot read', err)
    return null
  }
}
