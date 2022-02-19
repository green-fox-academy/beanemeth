'use strict';
// Check if "listOfNumbers" contains all of the following elements: 4,8,12,16
// Create a function that accepts 'listOfNumbers' as an input
// It should return "true" if it contains all elements, otherwise returns "false"
// + Write as many unit test as you can
export function checkNums(listOfNumbers: number[]): boolean {
    const numbersToCheck: number[] = [4, 8, 12, 16];
    let checkResult: boolean = true;

    // numbersToCheck.forEach(number => {
    //     if (!listOfNumbers.includes(number)) {
    //         checkResult = false;
    //     } 
    // })
    if (listOfNumbers === undefined || listOfNumbers.length < 1) {
        return false;
    }

    for (let i = 0; i < numbersToCheck.length; i++) {
        if (!listOfNumbers.includes(numbersToCheck[i])) {
            checkResult = false;
            break;
        }
    }

    // if (listOfNumbers.includes(numbersToCheck[0]) && listOfNumbers.includes(numbersToCheck[1]) && listOfNumbers.includes(numbersToCheck[2]) && listOfNumbers.includes(numbersToCheck[3])) {
    //     checkResult = true;
    // }

    return checkResult;
};

let listOfNumbers: number[] = [2, 4, 6, 8, 10, 12, 14, 16];
console.log(checkNums(listOfNumbers));