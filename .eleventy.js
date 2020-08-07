
module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy( "node_modules/bootstrap/dist/" );
  eleventyConfig.addPassthroughCopy( "node_modules/jquery/dist/" );
  eleventyConfig.addPassthroughCopy( "node_modules/popper.js/dist/" );
};
