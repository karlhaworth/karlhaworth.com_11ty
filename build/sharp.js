const sharp = require("sharp");
const fs = require("fs");

const folder = "./src/assets/technologies/";
var mkDir = "./dist/assets/technologies/retina/";

module.exports = function () {
  fs.readdirSync(folder).forEach((file) => {
    if (!fs.existsSync(mkDir)) {
      fs.mkdirSync(mkDir, { recursive: true });
    }
    if (file.includes(".png")) {
      filename = file.slice(0, -4);
      console.log(`Resizing ${file}`);
      sharp(folder + file)
        .resize({ height: 40 })
        .toFile(mkDir + filename + ".png");
      sharp(folder + file)
        .resize({ height: 80 })
        .toFile(mkDir + filename + "@2x.png");
      sharp(folder + file)
        .resize({ height: 120 })
        .toFile(mkDir + filename + "@3x.png");
    }
  });

  sharp("./src/assets/karl_haworth.jpg")
    .resize({ height: 100 })
    .toFile("./dist/assets/karl_haworth_resized.jpg");
  sharp("./src/assets/karl_haworth.jpg")
    .resize({ height: 200 })
    .toFile("./dist/assets/karl_haworth_resized@2x.jpg");
  sharp("./src/assets/karl_haworth.jpg")
    .resize({ height: 200 })
    .toFile("./dist/assets/karl_haworth_resized@3x.jpg");
};
