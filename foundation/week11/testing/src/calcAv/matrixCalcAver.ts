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
        let sumOfCol = 0; //itt mondig lenullazzuk, minden korben
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
  
  
  const matrix: number[][] = [
    [1, 5, 4, 1],
    [3, 6, 5, 5],
    [8, 4, 3, 9],
];


  export function calcuateMatrixColumnsAverage(matrix: number[][]): number[] {
    if (matrix.length < 1) {
        throw new Error("This array is empty");
    } else {
        let average: number[] = [];
        for (let i = 0; i < matrix.length; i++) {
            let subSum: number = 0; 
            for (let j = 0; j < matrix.length; j++) {
                subSum += matrix[j][i];
            }
            average.push(subSum/matrix.length);
        }
        return average;
    }
}

//console.log(calcuateMatrixColumnsAverage(matrix))