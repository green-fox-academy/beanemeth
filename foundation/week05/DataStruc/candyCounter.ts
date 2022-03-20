'use strict';

type Student = {
    name: string,
    age: number,
    candies: number;
};

const students: Student[] = [
    { name: 'Mark', age: 9.5, candies: 2 },
    { name: 'Paul', age: 12, candies: 5 },
    { name: 'Clark', age: 7, candies: 3 },
];

const bOsztaly: Student[] = [
    { name: 'Pierce', age: 12, candies: 7 },
    { name: 'Sean', age: 10, candies: 1 },
    { name: "Petike", age: 5, candies: 3 }
];


// create a function that takes a list of students and logs:
// - Who has got more candies than 4 candies
function candyCounter(studentList: Student[]): Student[] {
    const resultList: Student[] = [];
    // loop through the student list
    for (let i = 0; i < studentList.length; i++) {
        // condition if candies > 4    
        if (studentList[i].candies > 4) {
            resultList.push(studentList[i]);
        }
    }
    // result student []
    return resultList;
}

console.log(candyCounter(students));
console.log(candyCounter(bOsztaly));


// create a function that takes a list of students and logs:
//  - how many candies they have on average

function logAvg(studentList: Student[]): void {
    //sum candies with for loop, divide with student count
    let sum: number = 0;
    for (let i = 0; i < studentList.length; i++) {
        sum += studentList[i].candies;
    }
    console.log("the average candies: ", (sum / studentList.length));
}

console.log(logAvg(students));
console.log(logAvg(bOsztaly));