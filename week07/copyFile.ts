// Write a function that copies the contents of a file into another file
// It should take two filenames as parameters
// It should return a boolean that shows if the copy was successful

const fs = require('fs');

let fileContent = 'I am a file content. Here we go. Boom!';
fs.writeFileSync('message.txt', fileContent);

function copyContent(fileName: string, destFile: string): boolean {
  try {
    fs.copyFileSync(fileName, destFile);
    console.log(destFile);
    return true;
  } catch (err) {
    return false;
  }
}

console.log(copyContent('message.txt', 'destination.txt'));