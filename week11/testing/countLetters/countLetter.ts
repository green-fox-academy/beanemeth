// // Count Letters
// Write a function, that takes a string as an argument and returns a dictionary with all letters in the string as keys, and numbers as values that shows how many occurrences there are.
// Create a test for that.

export function getFrequency(string: string): { [key: string]: number } {
    let freq: { [key: string]: number } = {};
    for (let i = 0; i < string.length; i++) {
        let character = string.charAt(i);
        if (freq[character]) {
            freq[character]++;
        } else {
            freq[character] = 1;
        }
    }

    return freq;
};
console.log(getFrequency('peterrabbit'))