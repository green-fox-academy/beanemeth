const fs = require('fs');
const os = require('os');

function reverseOrder(reversedTextFile: string): string {
    try {
        let fileContent: string[] = fs.readFileSync(reversedTextFile, 'utf-8').split(os.EOL); //console.log(fileContent)
        let decryptedContent: string = "";

        for (let i = fileContent.length - 1; i >= 0; i--) {
            let endOfLine: string = os.EOL;
            if (i === 0) {
                endOfLine = "";
            } //console.log(endOfLine)
            decryptedContent = decryptedContent + fileContent[i]+ endOfLine;
        }
        fs.writeFileSync("reversed-order.txt", decryptedContent);
        return "File is decrypted";
    } catch (error) {
        return "File not found";
    }
}

console.log(reverseOrder("reversed-order.txt"))
