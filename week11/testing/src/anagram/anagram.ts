// Write a function, that takes two strings and returns a boolean value based on if the two strings are Anagramms or not.
// Create a test for that.

export function areAnagram(stringOne: string, stringTwo: string): boolean {

    let n1: number = stringOne.length;
    let n2: number = stringTwo.length;

    if (n1 != n2) {
        return false;
    }
    let sortedStringOne= stringOne.split('').sort().join('');
    let sortedStringTwo= stringTwo.split('').sort().join('');

    for (let index = 0; index < n1; index++) {
        if (sortedStringOne[index] != sortedStringTwo[index]) {
            return false;
        }
    } return true;
}

