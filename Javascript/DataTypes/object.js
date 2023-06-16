let user = {
  name: 'John',
  age: 30,
};

for (let value of Object.values(user)) {
  console.log(value);
}

let prices = {
  banana: 1,
  orange: 2,
  meat: 4,
};

let doublePrices = Object.fromEntries(
  Object.entries(prices).map((entry) => [entry[0], entry[1] * 2]),
);

console.log(doublePrices.meat);

// task 1
let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

function sumSalaries(salaries) {
  return Object.entries(salaries).reduce((sum, value) => (sum += value[1]), 0);
}

console.log(sumSalaries(salaries));
