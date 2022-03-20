import { Sum } from './sum'


describe('Sum', () => {
  let sumArray = new Sum();   //Instantiate an Object from your class in the method
  let numbersToBeSummed = [1, 2, 3];
  test('use sum method to sum the numbers in the array. Result should be 6', () => {
    expect(sumArray.sum(numbersToBeSummed)).toEqual(6);
  });

  test('sum with empty array to equal zero', () => {
    expect(sumArray.sum([])).toEqual(0);
  });

  let arrayWithOneelement = [5];
  test('sum of 5 should be 5', () => {
    expect(sumArray.sum(arrayWithOneelement)).toEqual(5);
  });

});

/*an empty list
a list that has one element in it
a list that has multiple elements in it*/