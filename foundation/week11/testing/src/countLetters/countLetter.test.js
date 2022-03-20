import { getFrequency } from './countLetter';


test('testing getFrequency() with a word as an example parameter to return the characters as keys and the number of occurances as values', () => {
    expect(getFrequency('rabbit')).toEqual({ r: 1, a: 1, b: 2, i: 1, t: 1 });
});