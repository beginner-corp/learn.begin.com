@app
tacos-tlh

@static
folder _site
spa true

@http
post /notify

@tables
data
  scopeID *String
  dataID **String
  ttl TTL
