// -  Create a variable named `numbers`
//    with the following content: `[3, 4, 5, 6, 7]`
// -  Reverse the order of the elements of `numbers`
// 	   -  do it with the built in method
//	   -  do it with creating a new temp array and a loop
// -  Print the elements of the reversed `numbers`

/*
let numbers6: number[]= [1, 2, 3, 4, 5];


let reversedNumbers = numbers6.reverse();

console.log(reversedNumbers); */

let numbers6 = [1, 2, 3, 4, 5];
let reversedNumbers = [];

for(let i = numbers6.length -1; i >= 0; i--) {
  reversedNumbers.push(numbers6[i]);
}

console.log(reversedNumbers);