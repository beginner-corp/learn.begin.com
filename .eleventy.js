let CleanCSS = require('clean-css')
let syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function(eleventyConfig) {

  eleventyConfig.addPlugin(syntaxHighlight)

  eleventyConfig.addPassthroughCopy({'src/css': 'css'})

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
