//
const map2: {[key: string]: string}= {
    "978-1-60309-452-8": "A Letter to Jo",
    "978-1-60309-459-7": "Lupus",
    "978-1-60309-444-3": "Red Panda and Moon Bear",
    "978-1-60309-461-0": "The Lab",
}



//Print all the key-value pairs in the following format

for (const [key, value] of Object.entries(map2)) {
    console.log(`${value}: ${key}`);
  } 
//Remove the key-value pair with key 978-1-60309-444-3

delete map2['978-1-60309-444-3'];
console.log(map2)

//Remove the key-value pair with value The Lab
let keyToDelete: string = "";
Object.entries(map2).forEach(element => {

if(element[1] ==="The Lab"){
    keyToDelete = element[0]
    return
}
}) 

console.log(map2[keyToDelete]) 
delete map2[keyToDelete];
console.log(map2)

/*Add the following key-value pairs to the map

Key	Value
978-1-60309-450-4	They Called Us Enemy
978-1-60309-453-5	Why Did We Trust Him?
*/
Object.assign(map2, {"978-1-60309-450-4": "They Called Us Enemy"});
Object.assign(map2, {"978-1-60309-453-5": "Why Did We Trust Him?"});

console.log(map2)
//Print whether there is an associated value with key 478-0-61159-424-8 or not

console.log(!!map2[478-0-61159-424-8]);
//felkijaltojel nelkul azt irja ki h undefined a value, egy ! ezt tagadja ezert lesz true, meg egy ! pedig ezt is tagadja igy lesz false

//Print the value associated with key 978-1-60309-453-5
console.log(map2["978-1-60309-453-5"])

