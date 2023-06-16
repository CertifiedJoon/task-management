let map = new Map();

map.set('1', 'str1');
map.set(1, 'num1');
map.set(true, 'bool1');

console.log(map.get(1));
console.log(map.get('1')); // do not use map[]

let john = { name: 'John' };

let visitsCountMap = new Map();

visitsCountMap.set(john, 123);

console.log(visitsCountMap.get(john)); // objects can be key too, even NaN
console.log(visitsCountMap['[object Object]']); // reasons why we should not use map[]

let recipeMap = new Map([
  ['cucumber', 500],
  ['tomatoes', 350],
  ['onion', 50],
]);

for (let vegetable of recipeMap.keys()) {
  // iteration is in insertion order
  console.log(vegetable);
}

for (let amount of recipeMap.values()) {
  console.log(amount);
}

for (let entry of recipeMap) {
  console.log(entry);
}

// from object to map
let obj = {
  name: 'John',
  age: 30,
};

let mapFromObject = new Map(Object.entries(obj));

console.log(mapFromObject.get('name'));

// from map to object

obj = Object.fromEntries(recipeMap.entries());

console.log(obj.cucumber);

// Sets

let set = new Set();

let jane = { name: 'Jane' };
let pete = { name: 'Pete' };
let mary = { name: 'Mary' };

set.add(jane).add(pete).add(mary);

console.log(set.size);
for (let user of set) {
  console.log(user.name);
  ``;
}

set = new Set(['oranges', 'apples', 'bananas']);

for (let value of set) console.log(value);

// the same with forEach:
set.forEach((value, valueAgain, set) => {
  // valueAgain for compatibility with map
  console.log(value);
});

// iteration same as maps

// task1
function unique(arr) {
  return Array.from(new Set(arr));
}

let values = [
  'Hare',
  'Krishna',
  'Hare',
  'Krishna',
  'Krishna',
  'Krishna',
  'Hare',
  'Hare',
  ':-O',
];

console.log(unique(values));

// task2
