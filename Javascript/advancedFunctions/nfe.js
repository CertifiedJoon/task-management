function sayHi() {
  console.log('hi');

  sayHi.counter++; // counts how many times function ran
}

sayHi.counter = 0;

console.log(sayHi.name);
console.log(sayHi.length); // parameter length
console.log(sayHi.counter);

// Named Function Expression
let sayHi2 = function func(who) {
  if (who) {
    alert(`Hello, ${who}`);
  } else {
    func('Guest'); // use func to re-call itself
  }
};
