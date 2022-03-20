/* 
Create a function that takes one string and one integer array as parameters 
and returns the occurrences of the strings that are present on the indexes 
of the second array
Input: ["p", "h", "f", "t", "e", "z", "p", "g", "f", "f",  "p"] and [2, 5, 6 ]
Output:
{
   "f": 3,
   "z": 1,
  "p": 3
} 
// Algorithm plan:
// Go through every element in second index
// Find the letter of the given index -> method
// Count its occurrence -> method
// Add the occurrence and the string to an object
*/

// Helper method 1:
// Create a function that takes a string and a string array 
// as parameters and returns the occurrences of that string in that array
function countOccurrences(letters: string[], letter: string): number {
    let occurrence: number = 0;

    for (let i = 0; i < letters.length; i++) {
        if (letters[i] === letter) {
            occurrence++;
        }
    }

    return occurrence;
}

// Helper method 2:
// Create a function that takes an integer and a string array
// as parameters  
// and returns the string present on the given index
function findStringByIndex(letters: string[], index: number): string {
    return letters[index];
}

// Main function:
function countLettersOnSpecificIndexes(letters: string[], indexes: number[]): { [key: string]: number } {
    let occurrencesOnSpecificIndexes: { [key: string]: number } = {}
    for (let i = 0; i < indexes.length; i++) {
        let letterToCount: string = findStringByIndex(letters, indexes[i]);
        let occurrence: number = countOccurrences(letters, letterToCount);
        occurrencesOnSpecificIndexes[letterToCount] = occurrence;
    }

    return occurrencesOnSpecificIndexes;
}

let letters: string[] = ["p", "h", "f", "t", "e", "z", "p", "g", "f", "f", "p"];
let indexes: number[] = [2, 5, 6];
console.log(countLettersOnSpecificIndexes(letters, indexes));

function ccountOccurrences(letters: string[], indexes: number[]): { [key: string]: number } {
    let characters: string[] = [];
    let occurrencesOfCharacters: { [key: string]: number } = {};

    for (const char of letters) {
        for (const num of indexes) {
            if (char === letters[num])
                characters.push(char);
        }
    }

    characters.forEach(char => {
        if (occurrencesOfCharacters.hasOwnProperty(char)) {
            occurrencesOfCharacters[char] += 1;
        } else {
            occurrencesOfCharacters[char] = 1;
        }
    })

    return occurrencesOfCharacters;
}

function countLetters(strings: string[], numbers: number[]): { [key: string]: number } {

    let lettersToCount: string[] = [];
    let counts: { [key: string]: number } = {};

    numbers.forEach(element => {
        lettersToCount.push(strings[element]);
    });

    for (const s of lettersToCount) {
        if (counts[s]) {
            counts[s]++
        } else {
            counts[s] = 1
        }
    }

    return counts;
}