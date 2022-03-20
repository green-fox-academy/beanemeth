'use strict';
const fs = require('fs');
const os = require('os');

function findyearOfMostBirth(fileName: string): string {
    let content: string = '';
    try {
      content = fs.readFileSync(fileName, 'utf8');
    } catch {
      throw 'Cannot open file';
    }
    let birthYearArray: string[] = [];
  
    content.split(os.EOL).forEach((element) => {
      const year: string = element.split(';')[1].substring(0, 4);
      birthYearArray.push(year);
    });
  
    const birthYearFrequency: { [key: string]: number } = {};
    birthYearArray.forEach((element) => {
      if (birthYearFrequency.hasOwnProperty(element)) {
        birthYearFrequency[element] += 1;
      } else {
        birthYearFrequency[element] = 1;
      }
    });
    return Object.entries(birthYearFrequency).sort((a, b) => b[1] - a[1])[0][0];
  }
  
  console.log(findyearOfMostBirth('./birth.csv'));