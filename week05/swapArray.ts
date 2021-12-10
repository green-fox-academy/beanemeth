// -  Create a variable named `names` with the following content:
//   `["Arthur", "Boe", "Chloe"]`
// -  Swap the first and the third element of `names`

 let names: string[]= ["Arthur", "Boe", "Chloe"];

let temporal: string = names[0]
names[0] = names[2];
names[2] = temporal ;

 
console.log(names); 
/*
 let names: string[] = ["Arthur", "Boe", "Chloe"];

[names[0], names[2]] = [names[2], names[0]];

console.log(names); */

