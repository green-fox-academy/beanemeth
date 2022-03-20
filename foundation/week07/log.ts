// Read all data from 'log.txt'
// Each line represents a log message from a web server
// Write a function that returns an array with the unique IP adresses
// Write a function that returns the GET / POST request ratio


const fs = require('fs');
const os = require('os');


function finduniqueAdresses(fileName: string): any {
    let fileContent: string[] = [];
    try {
        fileContent = fs.readFileSync(fileName, 'utf-8').split(os.EOL);
    } catch (error) {
        throw (`File not found: ${fileName}`);
    }

    let ipAdresses: string[] = [];

    for (let i: number = 0; i < fileContent.length; i++) {
        ipAdresses.push(fileContent[i].split('   ')[1]); // play with the split section. amount of spaces really count! Try it out!
    } //console.log(ipAdresses)
    ipAdresses = [...new Set(ipAdresses)]; //to keep the unique

    return ipAdresses;
}

console.log(finduniqueAdresses('log.txt'));

let fileContentwithIPAddUniq: string[] = finduniqueAdresses('log.txt')

let fileContent: string[] = fs.readFileSync("log.txt", 'utf-8').split(os.EOL);

function calculateGetPostRatio(fileContentArray: string[]): number {
    let numberOfGETs: number = 0;
    let numberOfPOSTs: number = 0;
    for (let i = 0; i < fileContentArray.length; i++) {
        if (fileContentArray[i].split(' ')[11] === "GET") {
            numberOfGETs = numberOfGETs + 1;
        } else {
            numberOfPOSTs = numberOfPOSTs + 1;
        }
    }
    return numberOfGETs / numberOfPOSTs;
}

console.log(calculateGetPostRatio(fileContent));

// let fileContent: string[] = fs.readFileSync("log.txt", 'utf-8').split(os.EOL); //console.log(fileContent)

// function findUniqueIPaddresses(fileContentAsArray: string[]): string[] {
//     let IPaddressArray: string[] = []
//     for (let i = 0; i < fileContentAsArray.length; i++) {

//         IPaddressArray.push(fileContentAsArray[i].split(" ")[8]) 
//     }
//     IPaddressArray = IPaddressArray.filter((element, i, a) => a.indexOf(element) == i); 

//     return IPaddressArray; 
// }
// console.log(findUniqueIPaddresses(fileContent))
// let fileContent: string = fs.readFileSync("log.txt", 'utf-8')
// fs.writeFileSync("output-logs.txt", uniqueAdresses(fileContent).join(os.EOL));

// function calc_GET_POST_ratio(fileContentArray: string[]): number {
//     let numberOfGETs: number = 0;
//     let numberOfPOSTs: number = 0;
//     for (let i = 0; i < fileContentArray.length; i++) {
//         if (fileContentArray[i].split(" ")[11] === "GET") {
//             numberOfGETs = numberOfGETs + 1;
//         } else {
//             numberOfPOSTs = numberOfPOSTs + 1;
//         }
//     }
//     return numberOfGETs / numberOfPOSTs;
// }

// //console.log(calc_GET_POST_ratio(fileContent));

function ratio(list: string): void {
    try {
        let postCount: number = 0;
        let getCount: number = 0;
        const fileContent = list.split(' ');
        for (let i: number = 0; i < fileContent.length; i++) {
            if (fileContent[i].includes('GET')) {
                getCount++;
            } else if (fileContent[i].includes('POST')) {
                postCount++;
            }
        }
        console.log('POST ', postCount, ' : ', getCount, 'GET');
    } catch (error) {
        throw new Error('word is not found');
    }
}

