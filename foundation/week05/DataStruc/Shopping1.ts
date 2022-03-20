/*We are going to represent a shopping list by a list containing strings.

Create a list with the following items:
eggs, milk, fish, apples, bread and chicken
Create an application which prints out the answers to the following questions:
Do we have milk in the shopping list? (yes/no)
Do we have bananas in the shopping list? (yes/no)
The full output of your main method should be the following:

yes
no */

let shopping: string[]= ["eggs", "milk", "fish", "apples", "bread", "chicken"];
//Do we have milk in the shopping list? (yes/no)
let output2 = shopping.includes('milk');

if (output2===true) {
console.log("yes")
    
} else { console.log("no")
    
}
//Do we have bananas in the shopping list? (yes/no)
let output3 = shopping.includes('bananas');

if (output3===true) {
console.log("yes")
    
} else { console.log("no")
    
}