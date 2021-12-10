
   // Write a function called `sum()` that returns the sum of numbers from zero to the given parameter

   


  let myNumber: number = 5;
  function sumTo(myNumber: number):  number {
    let sum = 0;
    for (let i = 0; i <= myNumber; i++) {
      sum += i;
    }
    return sum;
  } 
  
console.log(sumTo(myNumber));