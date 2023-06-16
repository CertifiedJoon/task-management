let john = { name: 'John' };

let map = new Map([[john, '11']]);

john = null; // overwrite the reference

for (let key of map.keys()) {
  console.log(key);
}

// sometimes we don't want the above

let weakMap = new WeakMap();

let obj = {};

weakMap.set(obj, 'ok');

// weakMap.set('test', 'Whoops'); // cannot use primitives as key.

obj = null; // obj is removed from memory!

// for (let key of weakMap.keys()) {
//   console.log(key);
// }
// doesn't support key() values(), entries()
// supports: set, get, delete, has

// Main application of weakmap is additional data
weakMap.set(john, 'secret documents');

// visitCount example: visitsCount.js
let visitsCountMap = new weakMap();

function countUser(user) {
  let count = visitsCountMap.get(user) || 0;
  visitsCountMap.set(user, count + 1);
}

// main.js

countUser(john);
john = null; // deletes john from visitsCountMap and from memory too. wouldn't be so with a concentional map

// Second application of weakmap is caching
// cache.js
let cache = new WeakMap();

function process(obj) {
  if (!cache.has(obj)) {
    let result = obj;
    cache.set(obj, result);
    return result;
  }

  return cache.get(obj);
}

// main.js
obj = {};
let result1 = process(obj);
let result2 = process(obj);

obj = null;

// task1
let messages = [
  { text: 'Hello', from: 'John' },
  { text: 'How r u?', from: 'John' },
  { text: 'Good', from: 'Alice' },
];

let messages_is_read = new WeakMap(
  messages.map((message) => {
    return [message, false];
  }),
);
