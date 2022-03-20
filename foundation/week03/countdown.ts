
// Write a program that prints the remaining seconds from a
// day if the current time is represented by these variables
let currentHour = 23;
let currentMinute = 40;
let currentSecond = 45;

/* 2. Have the program print the time, as given by the three variables. */
console.log("The time is "+currentHour+":"+currentMinute+":"+currentSecond);
/* 3. Make the program calculate and print the number of seconds since midnight. */


let secPerMinute = 60;
let secPerHour = 60 * secPerMinute;
let secPerDay = 24 * secPerHour;
let secondsElapsedSincelastMidnight = currentHour*secPerHour + currentMinute*secPerMinute + currentSecond;
console.log("Seconds since midnight: " + secondsElapsedSincelastMidnight);


console.log(secPerDay - secondsElapsedSincelastMidnight + " seconds remain till midnight, kids!");
