// Write a method which can read and parse a file containing information about songs. 
// The method should receive one string parameter: the name of the file. 
// The method should handle possible exceptions by printing messages to the standard output. 
// It should return with the year which produced the most songs.


const fs = require('fs');
const os = require('os');

function returnTheYearWithMostSongs(filename: string): string {
    let fileContent: string[] = [];

    try {
        fileContent = fs.readFileSync(filename, 'utf-8').split(os.EOL);
    } catch (error) {
        throw ('File does not exist!');
    }
    let years: string[] = [];

    for (let i: number = 0; i < fileContent.length; i++) {
        years.push(fileContent[i].split(';')[3]); //console.log(years)
    }

    const musicYearFrequency: { [key: string]: number } = {};
    years.forEach((element) => {
        if (musicYearFrequency.hasOwnProperty(element)) {
            musicYearFrequency[element] += 1;
        } else {
            musicYearFrequency[element] = 1;
        }
    });
    return Object.entries(musicYearFrequency).sort((a, b) => b[1] - a[1])[0][0];
    // let musicYears: any = {};

    // for (let i: number = 0; i < years.length; i++) {
    //     musicYears[years[i]] = 0; 
    // }
    // for (let i: number = 0; i < years.length; i++) {
    //     musicYears[years[i]]++; 
    // }


    // let maxMusicYear: string = '';
    // let maxYear: number = 0;

    // for (let year in musicYears) {
    //     if (maxYear < musicYears[year]) { 
    //         maxYear = musicYears[year]; 
    //         maxMusicYear = year; 
    //     }
    // }

    // return maxMusicYear; 
}
console.log(returnTheYearWithMostSongs('music.csv'));
