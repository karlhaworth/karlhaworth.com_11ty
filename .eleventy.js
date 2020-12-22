// Utilities
const sassProcess = require("./build-process/sass-process");
const imgProcess = require("./build-process/sharp");
const screenshotProcess = require("./build-process/screenshot");

module.exports = function (eleventyConfig) {
  // Sass pre-processing
  sassProcess("./_sass/main.scss", "./_site/assets/css/main.css");
  eleventyConfig.setBrowserSyncConfig({
    files: "./_site/assets/css/main.css",
  });
  // Img pre-processing
  imgProcess();
  // Passthrough copy
  const assets = [
    "assets",
    "node_modules/bootstrap/dist/",
    "node_modules/jquery/dist/",
    "node_modules/popper.js/dist/",
    "node_modules/lightbox2/dist/",
    "node_modules/retinajs/dist/",
  ];
  assets.forEach((asset) => eleventyConfig.addPassthroughCopy(asset));

  eleventyConfig.on("afterBuild", () => {
    screenshotProcess();
  });
  // Configuration
  return {
    pathPrefix: "/",
    dataTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    templateFormats: ["njk", "html", "11ty.js"],
  };
};
