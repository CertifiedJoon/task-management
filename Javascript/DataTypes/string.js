// immutable
let str = `Hello`;

console.log(str[-2]); // undefined
console.log(str.at(-2)); // l

for (let char of 'Hello') {
  console.log(char); // H,e,l,l,o (char becomes "H", then "e", then "l" etc)
}

console.log(str.toUpperCase());
console.log(str);
console.log(str.toLowerCase());

let haystack = 'Widget with id';
console.log(haystack.indexOf('Widget'));
console.log(haystack.indexOf('widget'));
console.log(haystack.indexOf('id', 2));

let target = 'id';

let pos = -1;
while ((pos = haystack.indexOf(target, pos + 1)) != -1) {
  console.log(pos);
}

console.log('Widget with id'.includes('Widget')); // true
console.log('Hello'.includes('Bye')); // false
console.log('Widget'.startsWith('Wid')); // true, "Widget" starts with "Wid"
console.log('Widget'.endsWith('get'));

str = 'stringify';
console.log(str.slice(2));
console.log(str.slice(-4, -1));
console.log(str.substring(2, 4));

str = '';

for (let i = 65; i <= 220; i++) {
  str += String.fromCodePoint(i);
}
console.log(str);

console.log('Österreich'.localeCompare('Zealand'));

function ucFirst(word) {
  if (!word) return word;
  return word[0].toUpperCase() + word.substring(1);
}

console.log(ucFirst('joon'));

function checkSpam(str) {
  if (str.toLowerCase().includes('viagra')) {
    return true;
  }
  return false;
}
