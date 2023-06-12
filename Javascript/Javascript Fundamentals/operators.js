// exponent
console.log(2 ** 2);

console.log(2 + 2 + '1'); // "41" and not "221"

let apples = '2';
let oranges = '3';

console.log(apples + oranges); // "23", the binary plus concatenates strings

// both values converted to numbers before the binary plus
console.log(+apples + +oranges); // 5

// commas
let a = (1 + 2, 3 + 4);
for (a = 1, b = 3, c = a * b; a < 10; a++) {}

//
// "" + 1 + 0 = "10" // (1)
// "" - 1 + 0 = -1 // (2)
// true + false = 1
// 6 / "3" = 2
// "2" * "3" = 6
// 4 + 5 + "px" = "9px"
// "$" + 4 + 5 = "$45"
// "4" - 2 = 2
// "4px" - 2 = NaN
// "  -9  " + 5 = "  -9  5" // (3)
// "  -9  " - 5 = -14 // (4)
// null + 1 = 1 // (5)
// undefined + 1 = NaN // (6)
// " \t \n" - 2 = -2 // (7)
