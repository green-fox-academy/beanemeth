import { areAnagram } from './anagram'

test('test if luki and kuli are anagrams', () => {
    expect(areAnagram('luki', 'kuli')).toBe(true);
  });