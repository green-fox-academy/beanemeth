// -  Create an array variable named `animals`
//    with the following content:
//    `["koal", "pand", "zebr", "anacond", "bo", "chinchill", "cobr", "gorill",
//      "hyen", "hydr", "iguan", "impal", "pum", "tarantul", "pirahn"]`
//
// -  Add all elements an `"a"` at the end

let animals: string[]= ["koal", "pand", "zebr", "anacond", "bo", "chinchill", 
"cobr", "gorill", "hyen", "hydr", "iguan", "impal", "pum", "tarantul", "pirahn"];

animals.forEach(function(element, index) {
    animals[index] = element + 'a';
});

console.log(animals)
