const fs = require('fs');
const path = require('path');
const { stdin } = process;
const notes = fs.createWriteStream(path.join(__dirname, 'text.txt'));

console.log('--- scribble something for a test, please ---');

stdin.on('data', (data) => {
  inputHandler(data);
});

process.on('SIGINT', () => {
  inputHandler('signal');
});

const inputHandler = (data) => {
  if (data.toString().trim() === 'exit' || data === 'signal') {
    console.log(`
    Hey, I completed this task! I'm excited and going to listen to the song "DON'T STOP" by NOTHING MORE. 
    And you please keep checking ;))
`);
    process.exit();
  }
  notes.write(data);
};
