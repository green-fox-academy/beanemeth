/* We have bunnies standing in a line numbered as 1, 2, ... The "odd" bunnies (1, 3, ...) 
have the usual number of ears = 2. However, the even bunnies (2, 4, ...) have 3 ears each (because they have a raised foot). 
Write a recursive method which accepts the number of bunnies as a parameter and returns the total number of "ears" in the bunny line. 
The method should be able to handle invalid input (e.g. negative numbers). */

function countBunnyEarsAgain(numberOfBunnies: number): number {      

    if (numberOfBunnies == 0) {
        return 0;
    }
    else if (numberOfBunnies % 2 == 1) {
        return (countBunnyEarsAgain(numberOfBunnies - 1) + 2) //odd/paratlan = 2 ears

    }

    return (countBunnyEarsAgain(numberOfBunnies - 1) + 3)  //even/paros = 3 ears
}


console.log(countBunnyEarsAgain(4))