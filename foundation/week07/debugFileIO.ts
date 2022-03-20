/**
 * Write a method that receives a filename as a string as parameter
 * and returns the words present (as a list) in the file which either start with
 * "de" or ends with "bug". The logic shall not be case sensitive.
 *
 * In case of any errors during file reading and data parsing the method
 * shall display: "Cannot read the bloody file"
 */

 import { readFileSync } from "fs";
 import { EOL } from "os";
 
 function readFileIntoString(filename: string): string {
     try {
         return readFileSync(filename, {encoding: "utf8", flag: "r"});
     } catch {
         throw new Error("Cannot read the bloody file");
     }
 }
 
 function isValidWordCharacter(ch: string): boolean {
     // Let's assume that a word can only contain small or capital letters, dash
     // and apostrophe
     return (ch >= "a" && ch <= "z") ||
         (ch >= "A" && ch <= "Z") ||
         ch === "-" ||
         ch === "'"
 }
 
 // Solution 1
 function findDebugWords(filename: string): string[] {
     const text = readFileIntoString(filename);
     const results: string[] = [];
 
     const lines = text.split(EOL);
     for (let i = 0; i < lines.length; i++) {
         const words = lines[i].split(" ");
         for (let j = 0; j < words.length; j++) {
             // Filter out unwanted characters from the word (e.g. '.', ',')
             let sanitisedWord = "";
             const chars = words[j].split("");
             for (let k = 0; k < chars.length; k++) {
                 if (isValidWordCharacter(chars[k])) {
                     sanitisedWord += chars[k];
                 }
             }
 
             // Check if it starts with "de" or ends with "bug" ignoring case
             if (
                 sanitisedWord.toLowerCase().startsWith("de") ||
                 sanitisedWord.toLowerCase().endsWith("bug")
             ) {
                 results.push(sanitisedWord);
             }
         }
     }
     return results;
 }
 
 // Solution 2 with for...of loop
 function findDebugWordsWithForOfLoop(filename: string): string[] {
     const text = readFileIntoString(filename);
     const results: string[] = [];
 
     for (const line of text.split(EOL)) {
         for (const word of line.split(" ")) {
             // Filter out unwanted characters from the word (e.g. '.', ',')
             let sanitisedWord = "";
             for (const ch of word.split("")) {
                 if (isValidWordCharacter(ch)) {
                     sanitisedWord += ch;
                 }
             }
 
             // Check if it starts with "de" or ends with "bug" ignoring case
             if (
                 sanitisedWord.toLowerCase().startsWith("de") ||
                 sanitisedWord.toLowerCase().endsWith("bug")
             ) {
                 results.push(sanitisedWord);
             }
         }
     }
     return results;
 }
 
 // Solution 3 with regular expressions
 function findDebugWordsWithRegex(filename: string): string[] {
     const text = readFileIntoString(filename);
     const results: string[] = [];
 
     // (one|other) -> match one pattern or the other pattern
     // In this case: split at new line or white space character
     const allWords = text.split(new RegExp(`(${EOL}| )`));
     for (const word of allWords) {
         // [] -> match any of the characters inside,
         // + -> match one or more characters
         const match = /[a-zA-Z-']+/.exec(word);
         if (match) {
             const sanitisedWord = match[0];
             // ^ -> start of string,
             // $ -> end of string,
             // i -> case insensitive
             if (/(^de|bug$)/i.test(word)) {
                 results.push(sanitisedWord);
             }
         }
     }
     return results;
 }
 
 // Ad-hoc tests
 const validFile = "Debug.txt";
 console.log(findDebugWords(validFile));
 console.log(findDebugWordsWithForOfLoop(validFile));
 console.log(findDebugWordsWithRegex(validFile));
 findDebugWords("Im-not-here.txt"); // Should throw error
 // Write a method that receives a filename as a string as parameter
//   and returns the words present (as a list) in the file which either start with
//   "de" or ends with "bug". The logic shall not be case sensitive.

//   In case of any errors during file reading and data parsing the method
//   shall display: "Cannot read the bloody file"
import fs from "fs";
const os = require('os');

export function findWords(filename: string):string []{
    let mmatchingstrings: string []=[];
    
        let fileContent = readFile("debug.txt");
       
       
        let linesArray = fileContent.split(os.EOL); 
        let wordsArray: string[] = [];
        linesArray.forEach(line => {
            wordsArray = wordsArray.concat(line.split(" "));
    });
        
        const searchString:string ="de"
        
        let matchingStrings: string [] = [];
        
        wordsArray.forEach((list) => {
            if (list.toLocaleLowerCase().search(searchString.toLocaleLowerCase()) > -1) {
                matchingStrings.push(list)
            }
        })   
        let searchString2:string ="bug";
        wordsArray.forEach((list) => {
            if (list.toLocaleLowerCase().search(searchString2.toLocaleLowerCase()) > -1) {
                matchingStrings.push(list)
            }
        })
        
        

        mmatchingstrings = matchingStrings;
    
    
    return mmatchingstrings;
}


function readFile(filename: string): string {
    if (!filename) {
        throw new Error("Cannot read the bloody file")
    }

    return fs.readFileSync(filename, 'utf-8');
}

//console.log(getTwoMostCommonCharacters("debug.txt"))

console.log(findWords('debug.txt'))
