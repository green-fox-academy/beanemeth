//We have a number of bunnies and each bunny has two big floppy ears. Write a recursive method (no loops or multiplication) 
// which takes the number of bunnies as its sole parameter and returns the total number of ears the bunnies have. 
//The method should be able to handle invalid input (e.g. negative numbers)

function countBunnyEars(numberOfBunnies: number): number {
    if (numberOfBunnies == 0) {
        return 0;
    }

    else {
        return (countBunnyEars(numberOfBunnies - 1) + 2)  //
    }
}


console.log(countBunnyEars(2))

// fun(2)-- > eloszor 2vel hivtuk meg. az (2-1)=1 , utana fun(1)--> (1-1)= 0 , ez a vege, itt elkezdi hozzaadni. 0+2 = 2, 2+2 = 4 