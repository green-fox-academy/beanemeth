import { calcuateMatrixColumnsAverage } from "./matrixCalcAver";

test("calcuateMatrixColumnsAverage() with positive integer matrix returns the correct number array", () => {
  expect(calcuateMatrixColumnsAverage([
    [1, 5, 4, 1],
    [3, 6, 5, 5],
    [8, 4, 3, 9],
])).toEqual([ 4, 5, 4 ]);
});

test("calcuateMatrixColumnsAverage() with an empty array throws an error", () => {
  let matrix= [[]];
  expect(calcuateMatrixColumnsAverage(matrix)).toThrowError;
})