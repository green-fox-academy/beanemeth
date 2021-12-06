// Modify this program to greet you instead of the World!
console.log('Hello, Bea!');

// Modify this program to console.log Humpty Dumpty riddle correctly
console.log('Humpty Dumpty sat on a wall,');
console.log('Humpty Dumpty had a great fall.');
console.log('All the king\'s horses and all the king\'s men');
console.log('Couldn\'t put Humpty together again.');

// Greet 3 of your classmates with this program in three separate lines like:
//
// Hello, Esther!
// Hello, Mary!
// Hello, Joe!
console.log('Hello, Esther!');
console.log('Hello, Mary!');
console.log('Hello, Joe!');
// Write a program that prints a few details to the console about you
// It should print each detail to a new line:
console.log('Bea Nemeth');
console.log(34);
console.log(1.6);

// Create a program that prints a few operations on two numbers: 22 and 13
console.log(22 && 13); 
// Print the result of 13 added to 22
console.log(13 + 22);

// Print the result of 13 substracted from 22
console.log(22 - 13);
// Print the result of 22 multiplied by 13
console.log(13 * 22);
// Print the result of 22 divided by 13 (as a decimal fraction)
console.log(22 / 13);
// Print the remainder of 22 divided by 13
console.log(22 % 13);
// An average Green Fox attendee codes 6 hours daily
// The semester is 17 weeks long
//
// Print how many hours is spent with coding in a semester by an attendee,
// if the attendee only codes on workdays.
//
// Print the percentage of the coding hours in the semester if the average
// work hours weekly is 52
console.log(17 * 6 * 5);
console.log(17 * 52);

console.log((510/884)*100);

/*

let favoriteNumber: number = 8

// Store your favorite number in a variable (as a number)
// And print it like this: 'My favorite number is: 8' */

let favoriteNumber: number = 8
console.log('My favourite number is:'+favoriteNumber)

/* Swap the values of these variables
let numberToSwap1: number = 123;
let numberToSwap2: number = 526;

console.log(numberToSwap1);
console.log(numberToSwap2); */

let numberToSwap1: number = 123;
let numberToSwap2: number = 526;
let numberToSwap3Temp: number = numberToSwap1;

numberToSwap1 = numberToSwap2
numberToSwap2 = numberToSwap3Temp
console.log(numberToSwap1)
console.log(numberToSwap2)

/* let massInKg: number = 81.2;
let heightInM: number = 1.78;
BMI = kg/m2 
// Print the Body mass index (BMI) based on these values */

let massInKg: number = 81.2;
let heightInM: number = 1.78;


console.log(massInKg/(heightInM*2))

/* Define several things as a variable, then print their values
// Your name as a string
// Your age as a number
// Your height in meters as a number
// Whether you are married or not as a boolean */

let myName ="Bea";
let myAge1: number =34;
let heightInM1: number = 1.61;
console.log(myName)
console.log(myAge1)
console.log(heightInM1)
let isMarried1: boolean = true
if (isMarried1 === true){
    console.log("married")
}
