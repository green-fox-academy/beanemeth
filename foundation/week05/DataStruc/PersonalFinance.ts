/* Personal finance
We are going to represent our expenses in a list containing integers.

Create a list with the following items:
500, 1000, 1250, 175, 800 and 120
Create an application which prints out the answers to the following questions:
How much did we spend?
Which was our greatest expense?
Which was our cheapest spending?
What was the average amount of our spendings? (print this as a float value) */

let PersFin: number[] = [500, 1000, 1250, 175, 800, 120];

let sumPers = 0; 
for (let i = 0; i < PersFin.length; i++) { sumPers += PersFin[i]; } 
console.log(sumPers); 

console.log(Math.max(...PersFin));
console.log(Math.min(...PersFin));
//What was the average amount of our spendings? (print this as a float value)

//this is how to count the array items
let lenghtOfPersFin = PersFin.length;
console.log(lenghtOfPersFin)
let calculateAverageParsfin = sumPers/lenghtOfPersFin
console.log(calculateAverageParsfin)
