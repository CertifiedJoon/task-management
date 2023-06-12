// if a is defined, then a, if a isnt defined, then b
// with defined values
let user;

console.log(user ?? 'Anonymous');

// similarly with || and boolean-ish values
let firstName = null;
let lastName = null;
let nickName = 'Supercoder';

console.log(firstName || lastName || nickName);

// Important safety syntax
// let x = 1 && 2 ?? 3; erroroneous
let x = (1 && 2) ?? 3; // works
