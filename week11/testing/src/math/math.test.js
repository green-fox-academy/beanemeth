import { addNum, divide, isPrime } from './math'

test('adds 1 + 2 to equal 3', () => {
  expect(addNum(1, 2)).toBe(3);
});

//Test every method with correct input parameters
//Test if the divide method throws an exception if b is 0

test('divides 9 by 3 to equal 3', () => {
  expect(divide(9, 3)).toBe(3);
});


test('number 13 to be Prime', () => {
  expect(isPrime(13)).toBe(true);
});

//[MethodName_StateUnderTest_ExpectedBehavior]

// divide with positive and zero throw exception
// divide with two negatives return valid positive result
// divide with two positives return valid positive result

// https://dzone.com/articles/7-popular-unit-test-naming