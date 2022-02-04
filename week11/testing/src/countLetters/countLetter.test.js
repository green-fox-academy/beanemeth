import { getFrequency } from './countLetter';


test('testing letterCount() with rabbit as an example parameter', () => {
    expect(getFrequency('rabbit')).toEqual({ r: 1, a: 1, b: 2, i: 1, t: 1 });
});