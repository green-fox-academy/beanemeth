let map:  { [key: number]: string} ={}; //keynel megadtuk h number, value pedig value


console.log(Object.keys(map).length===0)

/*
Key	Value
97	a
98	b
99	c
65	A
66	B
67	C

/*
map[97]="a"
map[98]="b"
map[99]="c"
map[65]="A"
map[66]="B"
map[67]="C" */

map ={
97: "a",
98: "b",
99: "c",
65: "A",
66: "B",
67: "C"
}

console.log(Object.keys(map))
console.log(Object.values(map))
map[68]="D"
/*
Object.assign(map, {68: "D"}); */
/* delete map[56]; */
/* map[33]= "hello"; */

console.log(map)

//print how many key
console.log(Object.keys(map).length)
/* console.log(Object.entries(map).length) */
console.log(map[99])
delete map[97];
console.log(map)
//Print whether there is an associated value with key 100 or not
/*console.log(!!map[100]); */
console.log(map.hasOwnProperty(100));
//felkijaltojel nelkul azt irja ki h undefined a value, egy ! ezt tagadja ezert lesz true, meg egy ! pedig ezt is tagadja igy lesz false
//Remove all the key-value pairs
map = {}
// Print how many key-value pairs are in the map
console.log(Object.keys(map).length)