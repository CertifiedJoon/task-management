// array destructuring

let arr = ['John', 'Smith'];

let [firstName, surname] = arr;

console.log(firstName, surname);

// skipping
let [name, , title] = [
  'Julius Caesar',
  'Stupid',
  'Consul of the Roman Replublic',
];

console.log(title);

// fine with iterables
let [one, two, three] = new Set([1, 2, 3]); // works with any iterables

// assign anything on the left
let user = {};
[user.name, user.surname] = ['Joon', 'Moon'];

console.log(user.name);
console.log(user.surname);

// clever use with map
for (let [key, value] of Object.entries(user)) {
  console.log(`${key}:${value}`);
}

let map = new Map(Object.entries(user));

for (let [key, val] of map) {
  console.log(`${key}:${val}`);
}

// clever use in swapping
let guest = 'Jane';
let admin = 'Pete';

[guest, admin] = [admin, guest];

console.log(guest);

// the rest

let [name1, name2, ...otherNames] = [
  'Julius',
  'Caesar',
  'Consul',
  'of the Roman Empire',
];
console.log(otherNames);

let [role = 'Guest', username = 'Anonymous'] = ['Admin'];

console.log(username);

// object destructuring
let options = {
  tag: 'Menu',
  width: 100,
  height: 200,
};

let { tag, width, height } = options;

console.log(tag);

let { width: w = 100, height: h } = options; // use other names

console.log(w);

let { tag: tag2, ...dimension } = options;

console.log(dimension);

// nested destructuring
options = {
  size: {
    width: 100,
    height: 200,
  },
  items: ['Cake', 'Donut'],
  extra: true,
};

let {
  size: { width: width1, height: height1 },
  items: [item1, item2],
  extra,
} = options;

console.log(item1, width1, extra);

// smart function parameters.

// this requires programmers to remember the order
function showMenu(title = 'Untitled', width = 200, height = 100, items = []) {
  // ...
}

// this doesn't
function showMenu({
  title = 'Untitled',
  width = 200,
  height = 100,
  items = [],
}) {}

// task 2
let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

function topSalary(salaries) {
  if (!salaries) {
    return null;
  }
  let max = 0;
  let topPaid = '';
  for (let [key, val] of Object.entries(salaries)) {
    if (val > max) {
      max = val;
      topPaid = key;
    }
  }
  return topPaid;
}

console.log(topSalary(salaries));
