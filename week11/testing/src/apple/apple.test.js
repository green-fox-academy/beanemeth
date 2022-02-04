import { Apple, getApple } from './apple'


describe('Apple', () => {
let apple = new Apple();   

test('getApple method should return "apple"', () => {
    expect(apple.getApple()).toEqual('apple');
  });

});