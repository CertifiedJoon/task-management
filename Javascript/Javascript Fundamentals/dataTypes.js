// Number
let n = 123;
console.log(n, Infinity, -Infinity, NaN);
console.log('not a number' / n);
console.log(3 * NaN);
console.log(NaN ** 0);

// BigInt, number larger than 2^53 - 1, attach n at the end;
// Not compatible in IE
const bigInt = 123123123123123123123123123123123123n;
console.log(bigInt);

// String, there is no char type.
let str = 'hello';
let str1 = `${str} Joon`;
console.log(str1);

// Boolean
// Null -> null pointer
// undefined -> unassigned variable
