// Create a function that receives an nxm matrix of numbers
// and returns an array containing the average of each column

function calculateAvgOfColumns(matrix: number[][]): number[] {
    const numRows = matrix.length;
    if (numRows === 0) {
        return [];
    }
    const numCols = matrix[0].length;

    const colAvgs: number[] = [];

    for (let col = 0; col < numCols; col++) {
        let sumOfCol = 0;
        for (let row = 0; row < numRows; row++) {
            sumOfCol += matrix[row][col];
        }
        const avgOfCol = sumOfCol / numRows;
        colAvgs.push(avgOfCol);
    }

    return colAvgs;
}

const matrixExample: number[][] = [
    [1, 5, 4, 1],
    [3, 6, 5, 5],
    [8, 4, 3, 9],
];
console.log(calculateAvgOfColumns(matrixExample));
console.log(calculateAvgOfColumns([[]]));
console.log(calculateAvgOfColumns([]));