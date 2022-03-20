import { checkNums } from './isinlist'

test('ckeckNums with list contains all the numbers to be truthy', () => {
    expect(checkNums([2, 4, 6, 8, 10, 12, 14, 16])).toBeTruthy();
});

test('ckeckNums with list contains all the numbers in reverse order to be truthy', () => {
    expect(checkNums([16, 5, 8, 4, 12, 2])).toBeTruthy();
});

test('ckeckNums with list not containing all the numbers to be falsy', () => {
    expect(checkNums([4, 8, 12, 23])).toBeFalsy();
});


test('ckeckNums with empty list to be falsy', () => {
    expect(checkNums([])).toBeFalsy();
});

test('ckeckNums called with undefined to be falsy', () => {
    let numbers;
    expect(checkNums(numbers)).toBeFalsy();
});
