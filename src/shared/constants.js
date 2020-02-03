const URIs = {
  local: {
    begin:  'http://localhost:3333',
    docs:   'http://localhost:4444',
    learn:  'http://localhost:5555'
  },
  staging: {
    begin:  'https://staging.begin.com',
    docs:   'https://staging.docs.begin.com',
    learn:  'https://staging.learn.begin.com'
  },
  production: {
    begin:  'https://begin.com',
    docs:   'https://docs.begin.com',
    learn:  'https://learn.begin.com'
  }
}

module.exports = {
  URIs
}
