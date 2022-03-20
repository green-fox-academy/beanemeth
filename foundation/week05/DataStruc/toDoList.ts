'use strict';
// Add "My todo:" to the beginning of the todoText
// Add " - Download games" to the end of the todoText
// Add " - Diablo" to the end of the todoText applying indention

// Expected output:

// My todo:
//  - Buy milk
//  - Download games
//      - Diablo

let todoText: string = ' - Buy milk\n';
/*
//console.log(todoText);
First result:
let todoText2: string = ("My todo:\n"+ todoText + " -Download games\n" + "    -Diablo\n")
console.log(todoText2)
*/
let beforetodoList: string = "My todo:\n"
let concatedToDolist: string = beforetodoList.concat("", todoText," -Download games\n", "    -Diablo\n" )


console.log(concatedToDolist)