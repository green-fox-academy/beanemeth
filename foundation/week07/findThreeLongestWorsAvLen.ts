// Create a function that is able to read a file
// it shall receive the file name as parameter
// it shall display a friendly error message when cannot read
// the file
// It shall return with the average length of the
// three longest words in the file
// Let us suppose that there are no írásjelek in the file

import fs from 'fs';
import os from "os";


function findThreeLongestWordsAverageLength(fileName: string)
    : number {

    let fileContent: string = "";
    try {
        fileContent = fs.readFileSync(fileName, 'utf-8');
    } catch (error) {
        console.error("Sorry, unable to read file: " + fileName);
        return 0;
    }

    let lines: string[] = fileContent.split(os.EOL);
    let words: string[] = [];
    lines.forEach(line => {
        words = words.concat(line.split(" "));
    });

    // let longetsWord: string[] = [];
    let sum: number = 0;
    for (let j = 0; j < 3; j++) {
        let longestWordLength = 0;
        let longetsWordIndex = 0;

        for (let i = 0; i < words.length; i++) {
            if (words[i].length > longestWordLength) {
                longestWordLength = words[i].length;
                longetsWordIndex = i;
            }
        }
        // longestWords.push(words[longetsWordIndex]);
        sum += longestWordLength;
        words.splice(longetsWordIndex, 1);
    }

    return sum / 3;
}

console.log(findThreeLongestWordsAverageLength("text.txt"));