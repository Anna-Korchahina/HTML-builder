const fs = require('fs');
const path = require('path');
const fsPromise = require('fs/promises');

const copyDir = async () => {
  try {
    const copies = await fsPromise.readdir('04-copy-directory/files-copy', {
      withFileTypes: true,
    });
    for (let copy of copies) {
      fs.unlink(`04-copy-directory/files-copy/${copy.name}`, function (err) {
        if (err) {
          console.log(err);
        }
      });
    }

    const item = await fsPromise.readdir('04-copy-directory/files', {
      withFileTypes: true,
    });
    for (const items of item) {
      if (items.isFile()) {
        const originFile = `04-copy-directory/files/${items.name}`;
        const copyFile = `04-copy-directory/files-copy/${items.name}`;
        fs.copyFile(`${originFile}`, `${copyFile}`, (err) => {
          if (err) {
            console.log(err);
          }
        });
      }
    }
  } catch (err) {
    console.log(err);
  }
};

fs.mkdir(path.join(__dirname, 'files-copy'), { recursive: true }, (err) => {
  if (err) {
    return console.log(err);
  }
});

copyDir();
