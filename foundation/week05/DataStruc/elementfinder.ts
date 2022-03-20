'use strict';

// Write a function that checks if the array contains "7"
// If it does, return "Hoorray" otherwise return "Noooooo"

const numbers: number[] = [1, 2, 3, 4, 5, 6, 8];

// The output should be: "Noooooo"
// Do this again with a different solution using different list functions!

export function doesContainSeven(numberArray: number[]): string {
    if (numberArray.includes(7)) {
        return "Hoorray";
    } else {
        return "Noooooo";
    }
}



console.log(doesContainSeven(numbers));