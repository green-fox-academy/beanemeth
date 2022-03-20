// Create a function that receives an n x m number matrix
// and returns an array containing the sum of each line 
// [3, 4, 5, 6]
// [1, 2, 3, 2]

// returns 
// [18, 8]

export function sumOfMatrix(matrix: number [][]):number[] {
    let matrixSum:number[]= [];
    for (let i = 0; i < matrix.length; i++) { //elso 0. index elmbe
        matrixSum[i] = 0;
        for (let j = 0; j < matrix[i].length; j++) { // masodik loop osszeadja 
            matrixSum[i] += matrix[i][j];
        }        
    }
    return matrixSum;
}

let matrixx = [
    [3, 4, 5, 6],
    [1, 2, 3, 2]
];
// sums of rows
export function sumRows(matrix: number[][]): number[] {
    let rowSum = matrix.map(r => r.reduce((a, b) => a + b));

    return rowSum
}

console.log(sumRows(matrixx));

export function sumOfEachLine(matrix: number[][]): number[] {
    if (matrix.length < 1) {
        throw new Error("This array is empty");
    } else {
        let sum: number[] = [];
        for (let i = 0; i < matrix.length; i++) {
            let subSum: number = 0; //sumofLines and sum ofone line
            for (let j = 0; j < matrix[i].length; j++) {
                subSum += matrix[i][j];
            }
            sum.push(subSum);
        }
        return sum;
    }
}

//test(szoveg leiras)
//letrehoz valtozo
//expect functionnev(valtozo) to equal vlmi

// test("sumOfEachLine() with a number matrix returns the sum of each line", () => {
//     let matrix: number [][] = [[3, 4, 5, 6],
//                                [1, 2, 3, 2]];
//     expect(sumOfEachLine(matrix)).toEqual([18,8]);
// });

// test("sumOfEachLine() with an empty array throws an error", () => {
//     let matrix: number [][] = [[]];
//     expect(sumOfEachLine(matrix)).toThrowError;
// })

//test

// import { calculateSumOfMatrix } from "./matrixSum";

// test("calculateSumOfMatrix() with positive integer matrix returns the correct number array", () => {
//   expect(calculateSumOfMatrix([
//     [3, 4, 5, 6],
//     [1, 2, 3, 2]])).toEqual([18, 8]);
// });

// test("calculateSumOfMatrix() with positive integer and zero matrix returns the correct number array", () => {
//   expect(calculateSumOfMatrix([
//     [0, 4, 5, 6],
//     [1, 2, 3, 0]])).toEqual([15, 6]);
// });

// test("calculateSumOfMatrix() with negative integer matrix returns the correct number array", () => {
//   expect(calculateSumOfMatrix([
//     [-1, -4, -5, -6],
//     [-1, -2, -3, -1]])).toEqual([-16, -7]);
// });

// test("calculateSumOfMatrix() with empty array returns zero", () => {
//   expect(calculateSumOfMatrix(
//     [[]])).toEqual([0]);
// });