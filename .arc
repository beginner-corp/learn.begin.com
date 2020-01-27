@app
trees-j4e

@static
folder _site

@http
get /login
get /api/progress

@tables
data
  scopeID *String
  dataID **String
  ttl TTL
