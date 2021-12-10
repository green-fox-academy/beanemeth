//Create a list ('List A') which contains the following values
//Apple, Avocado, Blueberries, Durian, Lychee

let listA: string[] = ["Apple", "Avocado", "Blueberries", "Durian", "Lychee"];

//Create a new list ('List B') with the values of List A

let listB: string[]= [...listA]

/* var ar = ["apple","banana","canaple"];
var bar = Array. from(ar);
alert(bar[1]); // alerts 'banana' */
// console.log(listB)
// Print out whether List A contains "Durian" or not
// includes function

for(let i=0; i<listA.length; i++){
    
    //console.log(listA[i])
    if(listA[i]==="Durian")
console.log(true)
} 