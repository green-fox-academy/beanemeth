// - Create a function called `calculateFactorial()`
//   that returns the factorial of its input For example: 5! = 1 * 2 * 3 * 4 * 5 = 120


let numberExample: number = 5;
function calculateFactorial(value: number): number {
    let factorial = 1;
    if (value == 0) {
        return factorial
    }
    else {
        for (let i = 1; i <= numberExample; i++) {
            factorial *= i;
        }
    }
    return factorial;
}

console.log(calculateFactorial(numberExample));

/*
let numberExample :number = 5;
function calculateFactorial(value: number) : number {
    if (value == 0) return 1
    else return value * calculateFactorial(value - 1)
}

console.log(calculateFactorial(numberExample))
*/
/*
let number5: number =5;
function factorial(value:number){
    //base case
    if(value == 0 || value == 1){
        return 1;
    //recursive case
    }else{
        return value * factorial(value-1);
    }
}

result = factorial(number5)
console.log("The factorial of " + factorial(number5) + " is " + result);
 */

/* function factorialize(value : number) {
    // If the number is less than 0, reject it.
    if (value < 0)
          return -1;

    // If the number is 0, its factorial is 1.
    else if (value == 0)
        return 1;

    // Otherwise, call the recursive procedure again
      else {
          return (value * factorialize(value - 1));
          /*
          First Part of the recursion method
          You need to remember that you won’t have just one call, you’ll have several nested calls

          Each call: num === "?"        	         num * factorialize(num - 1)
          1st call – factorialize(5) will return    5  * factorialize(5 - 1) // factorialize(4)
          2nd call – factorialize(4) will return    4  * factorialize(4 - 1) // factorialize(3)
          3rd call – factorialize(3) will return    3  * factorialize(3 - 1) // factorialize(2)
          4th call – factorialize(2) will return    2  * factorialize(2 - 1) // factorialize(1)
          5th call – factorialize(1) will return    1  * factorialize(1 - 1) // factorialize(0)

          Second part of the recursion method
          The method hits the if condition, it returns 1 which num will multiply itself with
          The function will exit with the total value

          5th call will return (5 * (5 - 1))     // num = 5 * 4
          4th call will return (20 * (4 - 1))    // num = 20 * 3
          3rd call will return (60 * (3 - 1))    // num = 60 * 2
          2nd call will return (120 * (2 - 1))   // num = 120 * 1
          1st call will return (120)             // num = 120

          If we sum up all the calls in one line, we have
          (5 * (5 - 1) * (4 - 1) * (3 - 1) * (2 - 1)) = 5 * 4 * 3 * 2 * 1 = 120
          */
/* }
} */
