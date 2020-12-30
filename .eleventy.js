// Utilities
const sassProcess = require("./build/sass-process");
const imgProcess = require("./build/sharp");
const screenshotProcess = require("./build/screenshot");

module.exports = function (eleventyConfig) {
  eleventyConfig.setWatchThrottleWaitTime(1000);
  // Sass pre-processing
  sassProcess("./src/_sass/main.scss", "./dist/assets/css/main.css");
  eleventyConfig.setBrowserSyncConfig({
    files: "./dist/assets/css/main.css",
  });
  // Img pre-processing
  imgProcess();
  // Passthrough copy
  eleventyConfig.addPassthroughCopy({"src/assets": "assets"})

  eleventyConfig.on("afterBuild", () => {
    screenshotProcess();
  });
  // Configuration
  return {
    dir: {
      input: 'src',
      output: 'dist',
    },
    pathPrefix: "/",
    dataTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    templateFormats: ["njk", "html", "11ty.js"],
  };
};
