// -  Create a function called `printParams`
//    which logs to the console the input parameters
//    (can have multiple number of arguments)
/*
let numbers7: number[] = [4, 5, 6, 7];
    function printParams(a, b, c) {
        console.log(typeof arguments)
    
}
printParams(numbers7)

/*
function func1(a, b, c) {
  console.log(arguments[0]);
  // expected output: 1

  console.log(arguments[1]);
  // expected output: 2

  console.log(arguments[2]);
  // expected output: 3
}

func1(1, 2, 3); */

/*function foo(...args) {
  return args;
}
foo(1, 2, 3); // [1, 2, 3] */

function foo(...args) {
    return args;
  }
  foo(1, 2, 3); 