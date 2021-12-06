 // Create a program that
// prints the multiplication table with number

//export function multiplicationTable(number: number) {
  // write your code here for Gradescope testing
  
  const number = 15;

  for (let i = 1; i <= 10; i++) {
    console.log(number + "*" + i + "=" + number * i);
  }
  // Write a program that calculates the sum and the average from 1 to a given number
// Example input: 5
// Example output: Sum: 15, Average: 3
const number2 = 5;

for (let i = 1; i <= 10; i++){
    console.log("The sum of 5 is: " + number2 + "+" + i + "=" + (number2 + i))
}
for (let i = 1; i <= 10; i++){
    let sum = (number2 + i)
    console.log("The average of 5 and " + i  + " is " + sum / 2) 
} 
// Write a program that prints the numbers from 1 to 100
// but for multiples of three print “Fizz” instead of the number
// and for the multiples of five print “Buzz”
// For numbers which are multiples of both three and five print “FizzBuzz”

let aaa: number = 1;
while (aaa < 101) {
  if ( aaa % 3 === 0){
    console.log("Fizz"); }
    if ( aaa % 5 === 0) {
        console.log("Buzz");
    }
    if (( aaa % 3 === 0) && ( aaa % 5 === 0)){
        console.log("FizzBuzz")
    }
    console.log(aaa)
    aaa = aaa + 1;
}

// Write a program that draws a square 



// Write a program that draws a triangle like this:
//
// *
// **
// ***
// ****
//
// The triangle should have as many lines as lineCount is
let n = 4;
let string = "";
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < i; j++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);

// Write a program that draws a
// pyramid like this:

let n2 = 4;
let string2 = "";
// External loop
for (let i = 1; i <= n2; i++) {
  // printing spaces
  for (let j = 1; j <= n - i; j++) {
    string2 += " ";
  }
  // printing star
  for (let k = 0; k < 2 * i - 1; k++) {
    string2 += "*";
  }
  string2 += "\n";
}
console.log(string2);

//Diamond

let n3 = 5;
let string3 = "";
// Upside pyramid
for (let i = 1; i <= n3; i++) {
  // printing spaces
  for (let j = n3; j > i; j--) {
    string3 += " ";
  }
  // printing star
  for (let k = 0; k < i * 2 - 1; k++) {
    string3 += "*";
  }
  string3 += "\n";
}
// downside pyramid
for (let i = 1; i <= n3 - 1; i++) {
  // printing spaces
  for (let j = 0; j < i; j++) {
    string3 += " ";
  }
  // printing star
  for (let k = (n3 - i) * 2 - 1; k > 0; k--) {
    string3 += "*";
  }
  string3 += "\n";
}
console.log(string3);

// Write a program that draws a square

let n4 = 6; // row or column count
// defining an empty string
let string4 = "";

for(let i = 0; i < n4; i++) { // external loop
  for(let j = 0; j < n4; j++) { // internal loop
    if(i === 0 || i === n4 - 1) {
      string4 += "*";
    }
    else {
      if(j === 0 || j === n4 - 1) {
        string4 += "*";
      }
      else {
        string4 += " ";
      }
    }
  }
  // newline after each row
  string4 += "\n";
}
// printing the string
console.log(string4);