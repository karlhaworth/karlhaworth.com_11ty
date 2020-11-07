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

fs.readdir('./', function (err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
    //listing all files using forEach
    files.forEach(function (file) {
        // Do whatever you want to do with the file
        console.log(file); 
    });
});

fs.readdir(mkDir, function (err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
    //listing all files using forEach
    files.forEach(function (file) {
        // Do whatever you want to do with the file
        console.log(file); 
    });
});