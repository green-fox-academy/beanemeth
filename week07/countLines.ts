// Write a function called countLines() that takes a filename as string as a parameter
// and returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.
const fs = require('fs');


function countLines(filename: string): number {
    try {
        let fileLines = fs.readFileSync(filename, 'utf-8').split("\n");
        return fileLines.length;
    } catch (err) {
        return 0;
    }
}
console.log(countLines('myfile.txt'));




