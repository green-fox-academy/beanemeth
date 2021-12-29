'use strict';
// Create a function that can reverse a string, which is passed as the parameter
// Use it on this reversed string to check it!
/*
let toBeReversed: string = ".eslaf eb t'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI";

function reverseString(parameter :string){ }
*/





let toBeReversed: string = `.eslaf eb t'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI`;

function reverseString(parameterm: string) {
    let newReversedString = "";
    for (let i = parameterm.length - 1; i >= 0; i--) {
        newReversedString += parameterm[i];
    }
    return newReversedString;

}
console.log(reverseString(toBeReversed))


/*
let charArray: string[] = toBeReversed.split('');
console.log(charArray);

let reverseArray: string[] = charArray.reverse();
console.log(reverseArray);

let reversedArray: string = reverseArray.join('');
console.log(reversedArray);
*/





