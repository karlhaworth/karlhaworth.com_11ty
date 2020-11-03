const sharp = require('sharp');
const fs = require('fs');

const testFolder = './assets/technologies/';

fs.readdirSync(testFolder).forEach(file => {
  if(file.includes('.png')) {
        filename = file.slice(0, -4)
        console.log(file)
        sharp(testFolder + file)
            .resize({ height: 40 })
            .toFile(testFolder + 'retina/' + filename + '.png');
        sharp(testFolder + file)
            .resize({ height: 80 })
            .toFile(testFolder + 'retina/' + filename + '@2x.png');
        sharp(testFolder + file)
            .resize({ height: 120 })
            .toFile(testFolder + 'retina/' + filename + '@3x.png');
  }
})