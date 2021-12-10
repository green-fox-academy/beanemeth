// -  Create an array named numbers with the 
// following content: [1, 2, 3, 8, 5, 6]
// -  Change the value of the fourth element (8) 
// to 4 with the .map method 
// -  Print the fourth element as a test

let numbers1: number[] = [1, 2, 3, 8, 5, 6];

numbers1 = numbers1.map(function(num, index) {
  if (index == 3) {
     return 4;
  }
  return num;
})

console.log(numbers1[3]);