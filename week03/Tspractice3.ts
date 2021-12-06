// Write a program that stores 3 sides of a cuboid as variables (floats)
// The program should write the surface area and volume of the cuboid like:
//
// Surface Area: 600
// Volume: 1000
//If the dimensions of a rectangular cuboid are a, b and c, then its volume is abc and its surface area is 2(ab + ac + bc).

let z1: number = 10;
let z2: number = 3;
let z3: number = 4;
let SurfaceArea= (z1*z2*z3)
let Volume= (2*(z1*z2)+(z1*z3)+(z2*z3))
console.log("Surface Area:" +SurfaceArea)
console.log("Volume:" +Volume)

let currentHours: number = 14;
let currentMinutes: number = 34;
let currentSeconds: number = 42;

// Write a program that prints the remaining seconds (as an integer) from a
// day if the current time is represented by these variables
let hour = 14;
let minute = 34;
let second = 42;

/* 2. Have the program print the time, as given by the three variables. */
console.log("The time is "+hour+":"+minute+":"+second);

/* 3. Make the program calculate and print the number of seconds since midnight. */
let SEC_PER_MINUTE = 60;
let SEC_PER_HOUR = 60 * SEC_PER_MINUTE;
let SEC_PER_DAY = 24 * SEC_PER_HOUR;
let secondsElapsedSinceMidnight = hour*SEC_PER_HOUR + minute*SEC_PER_MINUTE + second;
console.log("Seconds since midnight: " + secondsElapsedSinceMidnight);

/* 4. Make the program calculate and print the number of seconds remaining in the day. */
console.log(SEC_PER_DAY - secondsElapsedSinceMidnight + " seconds remain.");



let aa: number = 24;
let output1: number = 0;
if (aa % 2 === 0) {
    output1 += 1;
}
// if a is even increment output1 by one
console.log(output1);

let bb: number = 13;
let output2: string = '';
if (20>bb && bb>10) {
    console.log('Sweet');  // this block will run
  } else if (bb < 10) {
    console.log('Less'); // this block will NOT run
  } else if (bb > 20) {
    console.log('More'); // This block will NOT run
  }

// if bb is between 10 and 20 set output2 to "Sweet!"
// if less than 10 set output2 to "Less!",
// if more than 20 set output2 to "More!"

console.log(output2);

let cc: number = 123;
let credits: number = 100;
let isBonus: boolean = false;

// if credits are at least 50,
// and is_bonus is false decrement c by 2
// if credits are smaller than 50,
// and is_bonus is false decrement c by 1
// if is_bonus is true c should remain the same

if (credits >= 50 && isBonus == false ) {
    console.log(cc-2);  // this block will run
  } else if (credits <= 50 && isBonus == false ) {
    console.log(cc-1); // this block will NOT run
  } else if (isBonus != false) {
  console.log(cc); }// This block will NOT run


  let dd: number =  8;
  let time: number = 120;
  let output3: string = '';
  
  // if d is dividable by 4
  // and time is not more than 200
  // set output3 to "check"
  // if time is more than 200
  // set output3 to "Time out"
  // otherwise set output3 to "Run Forest Run!"

  if (dd % 4 === 0 && time < 200 ) {
    console.log(output3 ="check");  // this block will run
  } else if (time > 200 ) {
    console.log(output3 = "Time out"); }// this block will NOT run
 else { console.log(output3)}
  
// 1.Create a program that prints all the even numbers between 0 and 500

let a: number = 0;
while (a < 502) {
  console.log(a); // Prints the numbers from 0 to 500
  a = a + 2;
}


// Create a program that writes this line 100 times:
// "I won't cheat on the exam!"


for (let step = 0; step < 100; step++) {
    // Runs 100 times, with values of step 0 through 100.
    console.log('I will not cheat on the exam');
  }







