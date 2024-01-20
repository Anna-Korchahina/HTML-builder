const fs = require('fs');
const path = require('path');
const { stat } = fs;
const secretFolder = '03-files-in-folder/secret-folder';
const folderPath = path.resolve('03-files-in-folder', 'secret-folder');

fs.readdir(folderPath, { withFileTypes: true }, (err, files) => {
  if (err) {
    throw err;
  }

  for (let i = 0; i < files.length; i += 1) {
    if (files[i].isFile()) {
      printInfo(`${secretFolder}/${files[i].name}`, files[i]);
    }
  }
});

const printInfo = (path_, file) => {
  stat(path_, (err, stats) => {
    if (err) {
      throw err;
    }

    const fileName = file.name.split('.').slice(0, -1).join('.');
    const fileExtension = path.extname(file.name).slice(1);
    const fileSize = stats.size;
    console.log(`${fileName} - ${fileExtension} - ${fileSize}b`);
    return;
  });
};
