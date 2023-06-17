function sum(a, b) {
  return a + b;
}

console.log(sum(1, 2, 3)); // no error

function sumAll(...args) {
  let sum = 0;

  for (let arg of args) sum += +arg;

  return sum;
}

console.log(sumAll(1, 2, 3));

// special arguments variable -> arrow functions do not have arguments.

function showName() {
  console.log(arguments.length);
  console.log(arguments[0]);
}

showName('Julius');

// spread syntax.
let arr = [3, 5, 1];

console.log(Math.max(arr)); // NaN
console.log(Math.max(...arr));

let another_arr = [3, 5, 7];

console.log(Math.max(...arr, ...another_arr));

// spread syntax uses
let str = 'Hello';
console.log([...str]);

let copyFrom = [1, 2, 3];

let copyTo = [...copyFrom];

console.log(JSON.stringify(copyFrom) === JSON.stringify(copyTo));
console.log(copyFrom === copyTo);
