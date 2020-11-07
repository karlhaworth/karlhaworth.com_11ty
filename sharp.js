const sharp = require('sharp');
const fs = require('fs');

const folder = './assets/technologies/';

var mkDir = './assets/technologies/retina/';
if (!fs.existsSync(mkDir)){
    fs.mkdirSync(mkDir);
}

fs.readdirSync(folder).forEach(file => {
  if(file.includes('.png')) {
        filename = file.slice(0, -4)
        console.log(file)
        sharp(folder + file)
            .resize({ height: 40 })
            .toFile(folder + 'retina/' + filename + '.png');
        sharp(folder + file)
            .resize({ height: 80 })
            .toFile(folder + 'retina/' + filename + '@2x.png');
        sharp(folder + file)
            .resize({ height: 120 })
            .toFile(folder + 'retina/' + filename + '@3x.png');
  }
});

sharp('./assets/karl_haworth.jpg')
    .resize({ height: 100 })
    .toFile('./assets/karl_haworth_resized.jpg');
sharp('./assets/karl_haworth.jpg')
    .resize({ height: 200 })
    .toFile('./assets/karl_haworth_resized@2x.jpg');
    sharp('./assets/karl_haworth.jpg')
        .resize({ height: 200 })
        .toFile('./assets/karl_haworth_resized@3x.jpg');