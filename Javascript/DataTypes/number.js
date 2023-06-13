let billion = 1_000_000_000;

billion = 1e9;

billion = 1.2e9;

console.log('billion: ' + String(billion));

let mcs = 0.000001;

mcs = 1e-6;

console.log('mc: ' + String(mcs));

let hex = 0xff;

console.log('hex in 10: ' + 0xff);

console.log('hex: ' + hex.toString(16));

let num = 1.2345;

console.log(Math.round(num * 100) / 100);
console.log(num.toFixed(2));

let sum = 0.1 + 0.2;
console.log(typeof sum.toFixed(2));
console.log(+sum.toFixed(2)); // "0.30"

console.log(isNaN(NaN));
console.log(isNaN('str'));
console.log(isFinite(Infinity));
console.log(NaN === NaN);

console.log(parseInt('100px'));
console.log(parseFloat('12.5rem'));
console.log(parseFloat('12.3.3'));
console.log(parseInt('a123'));
console.log(parseInt('ff', 16));

console.log(Math.random());
console.log(Math.max(2, 3, 4, 5, 6));
console.log(Math.min(1, 23, 4, 4, 4));
console.log(Math.pow(2, 10));

console.log(Math.round(6.35 * 10) / 10);
