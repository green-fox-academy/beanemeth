import { checkNums } from './isinlist'

test('list contains all the numbers', () => {
    expect(checkNums([2, 4, 6, 8, 10, 12, 14, 16])).toBeTruthy();
});

test('list contains all the numbers in reverse order', () => {
    expect(checkNums([16, 5, 8, 4, 12, 2])).toBeTruthy();
});

test('list not contains all the numbers', () => {
    expect(checkNums([4, 8, 12, 23])).toBeFalsy();
});


test('empty list', () => {
    expect(checkNums([])).toBeFalsy();
});

test('called with undefined', () => {
    let numbers;
    expect(checkNums(numbers)).toBeFalsy();
});
