use strict';
// let number;
// number = 'asd';
// console.log(number);

let apple = 'apple';
//let apple2 = 9; //SyntaxError: Identifier 'apple2' has already been declared

const apple = 'apple';
//apple3 = 'autó'; //TypeError: Assignment to constant variable.

if (apple == 'pear') {
  let pear = 2;
  console.log(pear);
}
//console.log(pear); //ReferenceError: pear is not defined

console.log(apple == 3);
console.log(apple === 3);

console.log(6 % 4);