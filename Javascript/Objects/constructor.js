function A(name) {
  this.name = name;
}

function B(name) {
  this.name = name;
}

let b = new B('joon');
let a = new A('joon');

console.log(a == b);

function Accumulator(startingValue) {
  this.accumulatedValue = startingValue;

  this.read = function (newValueToAccumulate) {
    this.accumulatedValue += newValueToAccumulate;
  };
}
