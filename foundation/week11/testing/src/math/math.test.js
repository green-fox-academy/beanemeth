import { addNum, divide, isPrime } from './math'

test('addNum with two positive numbers return valid positive result', () => {
  expect(addNum(1, 2)).toBe(3);
});

//Test every method with correct input parameters
//Test if the divide method throws an exception if b is 0

test('divide with two positives return valid positive result', () => {
  expect(divide(9, 3)).toBe(3);
});


test('isPrime with a prime number to return true', () => {
  expect(isPrime(13)).toBe(true);
});

//[MethodName_StateUnderTest_ExpectedBehavior]

// divide with positive and zero throw exception
// divide with two negatives return valid positive result
// divide with two positives return valid positive result

// https://dzone.com/articles/7-popular-unit-test-naming