'use strict';
// Create a function called "appendA()" that adds "a" to every string in the "animals" list
// The parameter should be a list

let animals: string[] = ['koal', 'pand', 'zebr', 'anacond', 'bo', 'chinchill', 'cobr', 'gorill', 'hyen', 'hydr', 'iguan', 'impal', 'pum', 'tarantul', 'pirahn'];

// The output should be: "koala", "panda", "zebra" ...

export function appendA(list: string[]): string[] {
    let correctList: string[] = []
    for (let i = 0; i < list.length; i++) {
        correctList.push(list[i].concat('a'))
    }
    return correctList
}

console.log(appendA(animals));