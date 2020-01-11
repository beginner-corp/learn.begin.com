module.exports = function layout(params) {
  return `
    <html>
      <body><pre>${Object.keys(params)}</pre> ${params.content}`
}
