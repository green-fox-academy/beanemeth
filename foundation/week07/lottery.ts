'use strict';
const fs = require('fs');
const os = require('os');

//I DID NOT DO THIS BY MYSELF, BUT HAD LOTS OF HELP :) 

// Create a method that find the 5 most common lottery numbers in lottery.csv

const fileName = './lottery.csv';

function fiveMostCommonLotteryNumbers(fileName: string): number[] {
  const fileContent: string = openFile(fileName);
  const numbers: number[] = getAllNumbers(fileContent);
  const numberOccurence: { [key: string]: number } = {};

  numbers.forEach((number) => {
    numberOccurence[number] = (numberOccurence[number] || 0) + 1;
  });
  const sortedNumbers = Object.entries(numberOccurence).sort(
    (a, b) => b[1] - a[1]
  );
  const fiveMostCommonNumbers: string[] = [];

  for (let i = 0; i < 5; i++) {
    fiveMostCommonNumbers.push(sortedNumbers[i][0]);
  }
  return fiveMostCommonNumbers.map(Number);
}

function getAllNumbers(fileContent: string): number[] {
  const fileContentArray: string[] = fileContent.split(os.EOL);
  let lotteryNumbers: number[] = [];
  fileContentArray.forEach((row) => {
    let numbers: number[] = row.split(';').splice(-5, 5).map(Number);
    lotteryNumbers = lotteryNumbers.concat(numbers);
  });
  return lotteryNumbers;
} 

function openFile(fileName: string): string {
  let fileContent: string = '';
  try {
    fileContent = fs.readFileSync(fileName, 'utf8');
  } catch (err) {
    if (err instanceof Error) {
      console.log(err.message);
    }
  }
  return fileContent;
}

console.log(fiveMostCommonLotteryNumbers(fileName));