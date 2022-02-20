const fs = require('fs');
const os = require('os');


function reverseText(reversedText: string): string {
    try {
        let fileContent: string[] = fs.readFileSync(reversedText, 'utf-8').split(os.EOL); //console.log(fileContent)
        let reversedContent: string = "";

        for (let i = 0; i < fileContent.length; i++) {
            let enOfLine: string = os.EOL;
            if (i === fileContent.length - 1) {
                enOfLine = "";
            } //console.log(enOfLine)
            reversedContent = reversedContent + fileContent[i].split("").reverse().join("") + enOfLine;
        }
        fs.writeFileSync("reversed.txt", reversedContent);
        return "File is reversed";
    } catch (error) {
        return "File not found";
    }
}

console.log(reverseText("reversed.txt"))

// for (var i = str.length - 1; i >= 0; i--) {
//     newString += str[i]; // or newString = newString + str[i];
        //or
// function reverseString(str) {
//     return str.split("").reverse().join("");
// }
// reverseString("hello");