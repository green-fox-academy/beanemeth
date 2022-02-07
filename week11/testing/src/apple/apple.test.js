import { Apple, getApple } from './apple'


describe('Apple', () => {
let apple = new Apple();   //Instantiate an Object from your class in the method

test('getApple method should return "apple"', () => {
    expect(apple.getApple()).toEqual('apple');
  });

});