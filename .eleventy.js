module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");

  return {
    dir: {
      input: "src",
      output: "."
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};
