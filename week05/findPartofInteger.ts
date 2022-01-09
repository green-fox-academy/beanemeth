'use strict';
//  Create a function that takes a number and an array of numbers as a parameter
//  and returns the indices of the numbers of the array which contain the given number
//  or returns an empty list (if the number is not part of any of the numbers in the array)
// Example
/*console.log(findMatchingIndexes(1, [1, 11, 34, 52, 61]));
// should print: `[0, 1, 4]`
console.log(findMatchingIndexes(9, [1, 11, 34, 52, 61]));
// should print: '[]' */

let listOfNumbers2: number[] = [1, 11, 34, 52, 61, 1];

function findMatchingIndexes(params: number, params2: number[]) {
    let matchingIndexes: number[] = [];
    
    for (let index = 0; index < params2.length; index++) {
        let elementInString= params2[index].toString()
        //console.log(elementInString)
        if (elementInString.includes(params.toString())) {
            console.log(index)
            matchingIndexes.push(index);
            
        }
    }
    return matchingIndexes


}
console.log(findMatchingIndexes(4, listOfNumbers2))

//elemeket atalakitani stringbe az egeszet, utaa vegigmegy es a stringet nezi, h van e olyan resze ami egyezik. substring. utana a megtalalt indexet mentse el a matchingbe

