import { Domino } from "./dominoes";

function initializeDominoes(): Domino[] {
    let dominoes = [];
    dominoes.push(new Domino(5, 2));
    dominoes.push(new Domino(4, 6));
    dominoes.push(new Domino(1, 5));
    dominoes.push(new Domino(6, 7));
    dominoes.push(new Domino(2, 4));
    dominoes.push(new Domino(7, 1));
    return dominoes;
}

function print(dominoes: Domino[]) {
    dominoes.forEach(function (value) {
        console.log(value);
    });
}
let dominoes = initializeDominoes();
/** You have the list of Dominoes */
/** Order them into one snake where the adjacent dominoes have the same numbers on their adjacent sides */
/** eg: [2, 4], [4, 3], [3, 5] ... */

//Kell csinalni egy tombot, pl dominolist. 
let dominolist = [dominoes[0]];

for (let i = 0; i < dominolist.length; i++) {
    for (let j = 1; j < dominoes.length; j++) { //dominoList tömbbe a cikluson kívül màr betettük a dominoes tömb első elemét, ezert kell egytol kezdeni
        if (dominolist[i].getValues()[1] === dominoes[j].getValues()[0]) {
            dominolist.push(dominoes[j])
        }
    }
}
print(dominolist);

/* This did not work. Domino.prototype.toString = function dominoToString() {
    return "[" + dominolist[index].getValues()[0] + ", " + dominolist[index].getValues()[1] + "]"
  }*/
//print them as snake, method 1:
let dominoesAsSnake: number[][] = [];

for (let i = 0; i < dominolist.length; i++) {
    let list: number[] = dominolist[i].getValues()
    dominoesAsSnake.push(list)
}
console.log(dominoesAsSnake);

//print them as snake, method 2:
function printArrayAsSnake(index: number){
    let textToPrint: string = "["+dominolist[index].getValues()[0]+","+dominolist[index].getValues()[1]+"],";
    return textToPrint;
};
let stringdomino: string = '';
for (let index = 0; index < dominolist.length; index++) {
    stringdomino += printArrayAsSnake(index);
}
//let output = str.slice(0, -1)
console.log(stringdomino);

//A végén a slice az utolsó vessző kivétele miatt van. 