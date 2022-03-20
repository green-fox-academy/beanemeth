'use strict';

let shopItems: any[] = ['Cupcake', 2, 'Brownie', false];

// Accidentally we added "2" and "false" to the array
// Your task is to change from "2" to "Croissant" and change from "false" to "Ice cream"
// No, don't just remove the items :)
// Create a function called repairSweets() which takes the list as a parameter
// Expected output: "Cupcake", "Croissant", "Brownie", "Ice cream"

export function repairSweets(list: any[]): string[] {
    let repairedsweets: string[] = [];

    for (let index = 0; index < list.length; index++) {
        if (list[index] === 2) {
            list[index] ='Croissant';
        } if (list[index] === false) {                      // adding a temporary empty string array is actually unnecessary
            list[index] = 'Ice cream'
        } repairedsweets.push(list[index])
    }
    return repairedsweets;
}

console.log(repairSweets(shopItems))

// function repairSweets(array: any[]): string[]{
//     for (let i = 0; i < array.length; i++) {
//         if( array[i] === 2){           
//             array.splice(i, i, 'Croissant')
//         } if ( array[i] === false){            
//             array.splice(i, i, 'Ice cream')
//         }       
//     }
//     return array
// }

// console.log(repairSweets(shopItems));