/*Sum Digits
Given a non-negative integer n, return the sum of its digits recursively (without loops).

Hint (don't read this if you'd like to have a challenge)
Mod (%) by 10 yields the rightmost digit (e.g. 126 % 10 is 6)

C++, C#, Python
Divide (/) by 10 removes the rightmost digit (e.g. 126 / 10 is 12).

JavaScript, TypeScript
There is no integer type in JavaScript. To remove the rightmost digit you must divide (/) 
the number by 10 and find a way to get the the whole number portion of that number.*/

function sumDigits(n: number): number {
    
    if (n < 10) {
        return n
    }
    return  n % 10 + sumDigits(Math.floor(n / 10)); // 1. hivas: 3 + 12 reckurzio eredmeny, 12 n %10 az 2, 2+ vlmi es 1, es itt vege, base case 1, 1 +3. +3

    
}

console.log(sumDigits(123))


