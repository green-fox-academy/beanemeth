let myStr: string = "Contrary to popular belief, Lorem Ipsum is not simply random text."

// return the index of a character from a string
let indexOfY: number = myStr.indexOf("y")
// console.log(myStr.indexOf("y"));
// console.log(indexOfY);

// replaces a part of a string with another

// console.log(myStr.replace("Lorem", "Macska"))
// console.log(myStr)

let replaceString: string = "Kutya";
let replaced: string = myStr.replace(/lorem/i, replaceString) // /RegExp/
let replaced2: string = myStr.replace("Lorem", replaceString)
// console.log(replaced)
replaceString = "Macska"

// splits up a string, by a separator, and returns an array
let splitted: string[] = myStr.split("");

splitted.forEach((element, index) => {
    if (element === "y") {
        // console.log("index ", index);
    }
})

// console.log(splitted)

// extracts a section of a string, and returns it, based on beginning and end indexes
// substr from given index to the given length(how many characters) or to the end
let substr: string = myStr.substr(4);
// slice from given index, to the index given, could be negative
let slicedStr: string = myStr.slice(4, 5);
let slicedFromTheEnd: string = myStr.slice(-10);

// console.log(substr);
// console.log(slicedStr);
// console.log(slicedFromTheEnd);

// returns the character at a given index
let chatAtIndexFive: string = myStr.charAt(5);
let lastChar: string = myStr.charAt(myStr.length - 1);
// console.log(chatAtIndexFive)

// concatenates 2 strings to one

replaceString + replaced
let concated: string = replaceString.concat(" ", replaced);
// console.log(concated);

let reConcatedStr: string = ""

// for (let i = 0; i < splitted.length; i++) {
//     reConcatedStr = reConcatedStr.concat(splitted[i])
// }

splitted.forEach(char => {
    reConcatedStr = reConcatedStr.concat(char)
})

console.log(reConcatedStr)