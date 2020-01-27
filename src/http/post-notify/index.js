exports.handler = async function http() {
  return {
    statusCode: 302,
    headers: {
      location: '/?success'
    }
  }
}
