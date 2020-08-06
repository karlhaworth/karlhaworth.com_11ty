const sitemap = require("@quasibit/eleventy-plugin-sitemap");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(sitemap, {
    sitemap: {
      hostname: "https://karlhaworth.com",
    },
  });
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy({ "node_modules/bootstrap/dist/**/*.js": "vendor", "node_modules/jquery/dist/**/*.js": "vendor", "node_modules/popper.js/dist/**/*.js": "vendor"  });
};
