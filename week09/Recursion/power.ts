//Power
//Given base and n that are both 1 or more, write a recursive method (no loops) 
//which returns the value of base to the n-th power, so powerN(3, 2) is 9 (3 squared).

function powerN(base: number, n: number): number {
    if (n == 1) {
        return base;
    }

    return base * powerN(base,n -1);
}

console.log(powerN(3,2));

