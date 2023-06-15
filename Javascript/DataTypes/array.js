const { get } = require('http');

let fruits = ['Apple', 'Orange', 'Pear'];

console.log(fruits.shift()); // remove Apple and console.log it

console.log(fruits); // Orange, Pear

fruits.unshift('Apple');

console.log(fruits); // Apple, Orange, Pear

let arr = fruits; // copy by reference

console.log(arr === fruits);

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

for (val in arr) {
  console.log(val);
}

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(matrix[1][1]); // 5, the central element

arr = [1, 2, 3];

console.log(arr); // 1,2,3
console.log(String(arr) === '1,2,3'); // true

arr = ['I', 'study', 'JavaScript'];

arr.splice(1, 1); // from index 1 remove 1 element

console.log(arr); // ["I", "JavaScript"]

arr.splice(0, 3, "Let's", 'dance');

console.log(arr); // now ["Let's", "dance", "right", "now"]

arr = ['I', 'study', 'JavaScript', 'right', 'now'];

// remove 2 first elements
let removed = arr.splice(0, 2);

console.log(removed);

arr = ['I', 'study', 'JavaScript'];

// from index 2
// delete 0
// then insert "complex" and "language"
arr.splice(2, 0, 'complex', 'language');

console.log(arr); // "I", "study", "complex", "language", "JavaScript"

arr = [1, 2, 5];

// from index -1 (one step from the end)
// delete 0 elements,
// then insert 3 and 4
arr.splice(-1, 0, 3, 4);

console.log(arr); // 1,2,3,4,5

arr = ['t', 'e', 's', 't'];

console.log(arr.slice(1, 3)); // e,s (copy from 1 to 3)

console.log(arr.slice(-2)); // s,t (copy from -2 till the end)

arr = [1, 2];

// create an array from: arr and [3,4]
console.log(arr.concat([3, 4])); // 1,2,3,4

// create an array from: arr and [3,4] and [5,6]
console.log(arr.concat([3, 4], [5, 6])); // 1,2,3,4,5,6

// create an array from: arr and [3,4], then add values 5 and 6
console.log(arr.concat([3, 4], 5, 6)); // 1,2,3,4,5,6

arr.forEach(function (item, index, array) {
  // ... do something with item
});

let result = arr.find(function (item, index, array) {
  // if true is returned, item is returned and iteration is stopped
  // for falsy scenario returns undefined
});

let users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Pete' },
  { id: 3, name: 'Mary' },
  { id: 4, name: 'John' },
];

// Find the index of the first John
console.log(users.findIndex((user) => user.name == 'John')); // 0

users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Pete' },
  { id: 3, name: 'Mary' },
];

// returns array of the first two users
let someUsers = users.filter((item) => item.id < 3);

console.log(someUsers.length); // 2

result = arr.map(function (item, index, array) {
  // returns the new value instead of item
});

arr = [1, 2, 15];

// the method reorders the content of arr
arr.sort(); // sorts as a string by default

console.log(arr); // 1, 15, 2

function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}

arr = [1, 2, 15];

arr.sort(compareNumeric);

console.log(arr); // 1, 2, 15

let names = 'Bilbo, Gandalf, Nazgul';

arr = names.split(', ');

arr = ['Bilbo', 'Gandalf', 'Nazgul'];

let str = arr.join(';'); // glue the array into a string using ;

console.log(str); // Bilbo;Gandalf;Nazgul

let value = arr.reduce(function (accumulator, item, index, array) {
  // ...
}, []);

arr = [1, 2, 3, 4, 5];

result = arr.reduce((sum, current) => sum + current, 0);

console.log(result); // 15

console.log(Array.isArray({})); // false

console.log(Array.isArray([])); // true

/**
 * If in the example above we used users.filter(army.canJoin), then army.canJoin would be called as a standalone function, with this=undefined, thus leading to an instant error.

A call to users.filter(army.canJoin, army) can be replaced with users.filter(user => army.canJoin(user)), that does the same. The latter is used more often, as it’s a bit easier to understand for most people.
 * 
 */

const camelize = (str) => {
  return str
    .split('-')
    .map((word, index) => {
      return index == 0 ? word : word[0].toUpperCase() + word.slice(1);
    })
    .join('');
};

console.log(camelize('list-style-image'));

const filterRange = (numeric_arr, start, end) => {
  return numeric_arr.filter((num, index) => num >= start && num <= end);
};

const filterRangeInPlace = (numeric_arr, start, end) => {
  let i = 0;
  let n = numeric_arr.length;
  let right = n - 1;
  while (i < right) {
    console.log(numeric_arr);
    if (numeric_arr[i] < start || numeric_arr[i] > end) {
      [numeric_arr[i], numeric_arr[right]] = [
        numeric_arr[right],
        numeric_arr[i],
      ];
      right--;
    } else {
      i++;
    }
  }
  numeric_arr.splice(right);
};

arr = [5, 3, 8, 1];

console.log(filterRange(arr, 1, 4));
filterRangeInPlace(arr, 1, 4);
console.log(arr);

arr = [5, 0, 2, 1, -10, 8];

arr.sort((a, b) => b - a);

console.log(arr); // 8, 5, 2, 1, -10

let john = { name: 'John', age: 25 };
let pete = { name: 'Pete', age: 30 };
let mary = { name: 'Mary', age: 28 };

users = [john, pete, mary];

names = users.map((user) => user.name);

console.log(names); // John, Pete, Mary

const getAverageAgeOfUsers = (users) => {
  const total = users.reduce((sum, user) => {
    return sum + user.age;
  }, 0);
  return (total / users.length).toFixed(2);
};

console.log(getAverageAgeOfUsers(users));
