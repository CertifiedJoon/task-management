// Object Prototype

let obj = {};
console.log(obj); // toString is taken from Object's native prototype

// other built-in objects inherit from object prototype

// changing native prototypes.
String.prototype.show = function () {
  console.log(this);
};

'BOOM!'.show(); // BOOM!

// only allowed application is polyfilling

if (!String.prototype.repeat) {
  String.prototype.repeat = function (n) {
    return new Array(n + 1).join(this);
  };
}

console.log('la'.repeat(3));

// borrowing from prototypes
obj = {
  0: 'hello',
  1: 'world!',
  length: 2,
};

obj.join = Array.prototype.join; // works becuz many built-in methods do not check types.

console.log(obj.join(','));

// tasks1
Function.prototype.defer = function (ms) {
  let f = this;
  return function (...args) {
    setTimeout(() => f.apply(this, args), ms);
  };
};

function f() {
  console.log('Hello');
}

f.defer(1000);
