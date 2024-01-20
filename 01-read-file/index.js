const fs = require('fs');
const filePath = require('path').resolve(__dirname, 'text.txt');
const ReadStream = fs.createReadStream(filePath, {
  encoding: 'utf-8',
  start: 0,
});
ReadStream.on('data', (data) => {
  process.stdout.write(data);
});
