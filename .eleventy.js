let CleanCSS = require('clean-css')

module.exports = function(eleventyConfig) {

	eleventyConfig.addFilter("cssmin", function(code) {
		if (process.env.NODE_ENV === 'production') {
			return new CleanCSS({}).minify(code).styles
		}
		return code
	})

  return {
    dir: {
      input: 'src/md'
    }
  }
}
