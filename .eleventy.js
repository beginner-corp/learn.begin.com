let syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function(eleventyConfig) {

  eleventyConfig.addPlugin(syntaxHighlight)

  eleventyConfig.addPassthroughCopy({'src/css': 'css'})
  eleventyConfig.addPassthroughCopy({'src/js': 'js'})

  return {
    dir: {
      input: 'src/md'
    }
  }
}
