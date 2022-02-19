'use strict';
// Write a function that joins two array by matching one girl with one boy in a new array
// If someone has no pair, he/she should be the element of the array too
// Expected output: ["Eve-Joe", "Ashley-Fred"...]

let girls: string[] = ['Eve', 'Ashley', 'Claire', 'Kat', 'Jane'];
let boys: string[] = ['Joe', 'Fred', 'Tom', 'Todd', 'Neef', 'Jeff'];

function match(array: string[], array2: string[]): string[] {
    let matching: string[] = []
    for (let i = 0; i < array2.length; i++) {
        if (array[i] === undefined) {
            matching.push(array2[i])
        } else if (array2[i] === undefined) {
            matching.push(array[i])
        } else {
            matching.push(`${array[i]} - ${array2[i]}`)
        }

    }
    return matching
}

console.log(match(girls, boys));