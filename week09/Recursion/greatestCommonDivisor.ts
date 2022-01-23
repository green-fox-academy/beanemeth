/*Greatest Common Divisor
Write a recursive method which returns the greatest common divisor (GCD) of two numbers.
 The method should be able to handle negative numbers!*/

 /* Function using "Euclidian Algorithm" to recursively find the 
greatest common divisor/factor (GCD/GCF) of 2 positive numbers*/

function findGreatestCommonDivisor(number1:number, number2:number):number {
    if(number2 === 0){
        return number1;
    }
    return findGreatestCommonDivisor(number2, number1%number2);   
}


console.log(findGreatestCommonDivisor(8, 16))