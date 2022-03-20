/*List introduction 1
We are going to play with lists. Feel free to use the built-in methods where possible.

Create an empty list which will contain names (strings)
Print out the number of elements in the list
Add "William" to the list
Print out whether the list is empty or not
Add "John" to the list
Add "Amanda" to the list
Print out the number of elements in the list
Print out the 3rd element
Iterate through the list and print out each name
William
John
Amanda
Iterate through the list and print
1. William
2. John
3. Amanda
Remove the 2nd element
Iterate through the list in a reversed order and print out each name
Amanda
William
Remove all elements
Print out the number of elements in the list
The full output of your main method should be the following:

0
false
3
Amanda
William
John
Amanda
1. William
2. John
3. Amanda
Amanda
William
0 */

let list: string[] = [];
console.log(list.length)
list[0] = "William";
console.log(list.length < 0)
list.push("John")
list.push("Amanda")
console.log(list.length)
console.log(list[2])
for(let index=0; index< list.length; index ++) {
    let namesIndex : number = index +1;
    console.log(namesIndex + "." + list[index]);
}
list.splice(1,1);
console.log(list)
for(let index = list.length -1; index>= 0; index--){
    console.log(list[index])
}
list.splice(0,list.length)
console.log(list.length)