//  Create a function that takes a list of numbers as parameter
//  and returns a list where the elements are sorted in ascending numerical order
//  When you are done, add a second boolean parameter to the function
//  If it is `true` sort the list descending, otherwise ascending

//  Example:
//console.log(bubble([34, 12, 24, 9, 5]));
//  should print [5, 9, 12, 24, 34]
//console.log(advancedBubble([34, 12, 24, 9, 5], true));
//  should print [34, 24, 12, 9, 5]


let sortedNumbers: number[] = []

function bubble(num:number[]) : number[] {
    sortedNumbers= num.sort((a,b) => a-b)
    return sortedNumbers
}

console.log(bubble([34, 12, 24, 9, 5]));

function advancedBubble(num:number[],descending:boolean) : number[] {
    if (descending) {
        sortedNumbers= num.sort((a,b) => b-a)
    } else {sortedNumbers= num.sort((a,b) => a-b)}
    return sortedNumbers
}

console.log(advancedBubble([34, 12, 24, 9, 5], true));

/* solution2:
let numbers: number[] = [88, 34, 12, 24, 9, 5];
function sortWithBubble(notSorted: number[]): number[] {
    for (let j = 0; j < notSorted.length - 1; j++) {
        for (let i = 0; i < notSorted.length - 1; i++) {
            if (notSorted[i] > notSorted[i + 1]) {
                [notSorted[i], notSorted[i + 1]] = [notSorted[i + 1], notSorted[i]]
            }
        }
    }
    return notSorted;
}
function sortAdvancedWithBubble(notSorted: number[], ascending: boolean): number[] {
    for (let j = 0; j < notSorted.length - 1; j++) {
        for (let i = 0; i < notSorted.length - 1; i++) {
            let firstItem: number = notSorted[i];
            let nextItem: number = notSorted[i + 1];
            if ((firstItem > nextItem && ascending) || (firstItem < nextItem && !ascending)) {
                [firstItem, nextItem] = [nextItem, firstItem];
            }
        }
    }
    return notSorted;
} */