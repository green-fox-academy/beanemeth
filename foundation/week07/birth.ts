    // Create a function that
    // - takes the name of a CSV file as a parameter,
    //   - every row is in the following format: <person name>;<birthdate in YYYY-MM-DD format>;<city name>
    // - and returns the year when the most births happened.
    //   - if there were multiple years with the same number of births then return any of them

    // You can find such a CSV file in this directory named births.csv
    // If you pass "births.csv" to your function, the result should be either 2006 or 2016.

const fs = require('fs');
const os = require('os');

function birth(filename: string): string{
    let fileContent: string[] = [];

    try {
        fileContent = fs.readFileSync(filename, 'utf-8').split(os.EOL);
    } catch (error) {
        throw ('File does not exist!');
    }
console.log(fileContent)
    let birthdate: string[] = [];
    let years: string[] = [];

    for (let i: number = 0; i < fileContent.length; i++) {
        birthdate.push(fileContent[i].split(';')[1]); //console.log(birthdate)
        years.push(birthdate[i].split('-')[0]); //console.log(years)
    }

    let births: any = {};

    for (let i: number = 0; i < years.length; i++) {
        births[years[i]] = 0; //console.log(births)
    }
    for (let i: number = 0; i < years.length; i++) {
        births[years[i]]++; //console.log(births) //ez itt megszamol minden evet
    }


    let maxBirthYear: string = '';
    let maxYear: number = 0;

    for (let year in births) {
        if (maxYear < births[year]) { 
            maxYear = births[year]; //console.log(maxYear)
            maxBirthYear = year; 
        }
    }

    return maxBirthYear; //parseInt(maxBirthYear); only use it if return value is number and not string
}
  console.log(birth('birth.csv'));
