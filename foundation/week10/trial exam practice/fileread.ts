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

    let lines: string[] = fileContent.split(os.EOL); //sortoresek miatt kellett
    let words: string[] = [];
    lines.forEach(line => {
        words = words.concat(line.split(" "));
    });

    // let longetsWord: string[] = [];
    let sum: number = 0;
    for (let j = 0; j < 3; j++) {
        let longestWordLength = 0; //itt allitjuk vissza h mindig uj ertekkel kezdje
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
//#######################################

function countAvarageOfLongestWords(filename: string): number {
    let content: string = '';
    try {
        content = fs.readFileSync(filename, 'utf-8');
    } catch (error) {
        console.error("I must warn you friendly that the file" + filename + "could not be read.");
    }
        let arrayOfLines: string[] = content.split(os.EOL);
        let arrayOfWords: string[] = [];
        arrayOfLines.forEach(w => {
            arrayOfWords = arrayOfWords.concat(w.split(" "));
        });
        let wordLengths: number[] = [];
        arrayOfWords.forEach(word => {wordLengths.push(word.length)});
        let orderedByLength:number[] = wordLengths.sort((a,b) => b-a);
        let avarageOfThreeLongestWordsLength: number = (orderedByLength[0] + orderedByLength[1] + orderedByLength[2])/3;
        return avarageOfThreeLongestWordsLength; 
}

console.log(countAvarageOfLongestWords("catIpsum.txt"));