//Create a list ('List A') which contains the following values
//Apple, Avocado, Blueberries, Durian, Lychee

let listA: string[] = ["Apple", "Avocado", "Blueberries", "Durian", "Lychee"];

//Create a new list ('List B') with the values of List A

let listB: string[]= [...listA]


// includes function

for(let i=0; i<listA.length; i++){
    
    //console.log(listA[i])
    if(listA[i]==="Durian"){}
console.log(true)
} 
//Remove "Durian" from List B
listB.splice(3,1);
console.log(listB)
//Add "Kiwifruit" to List A after the 4th element
listA.splice(4, 0, 'Kiwifruit');
console.log(listA)
//Compare the size of List A and List B
console.log(listA.length===listB.length)

//Get the index of "Avocado" from List A
console.log(listA.indexOf('Avocado'));
//Get the index of "Durian" from List B
console.log(listB.indexOf('Durian'));
//Add "Passion Fruit" and "Pomelo" to List B in a single statement
listB.push('Passion fruit', 'Pomelo');
console.log(listB)
//Print out the 3rd element from List A
console.log(listA[2])
//Print all elements of List A
console.log(listA)
//Print all elements of List B
console.log(listB)