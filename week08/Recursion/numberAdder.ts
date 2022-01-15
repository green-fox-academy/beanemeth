
//Write a recursive function that takes one parameter: n and returns the sum of numbers (integers) from 1 to n. 
//The function should return 0 for inputs less than 1.

function sumNum(num: number): number {
    if (num < 1) {
      //base case
      return 0;
    } else {
      return num + sumNum(num - 1);
    }
  }
  
  console.log('The sum of 5 is', sumNum(5));