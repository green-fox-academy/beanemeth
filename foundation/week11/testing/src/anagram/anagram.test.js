import { areAnagram } from './anagram'

test('areAnagram with two different words with the same letters to be checked if they are anagrams', () => {
    expect(areAnagram('luki', 'kuli')).toBe(true);
  });