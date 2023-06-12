let user = {
  name: 'John',
  age: 30,
};

// Both works
let key = 'name';
console.log(user[key], user.name);

// Computed properties
let fruit = 'apple';
let bag = {
  bagSize: 'large',
  [fruit + 'Computers']: 5,
};

console.log(bag.appleComputers);

// Key in operator -> keys are sorted in creation order.

console.log('apple' in bag);
for (let key in bag) {
  console.log(key);
}

//task 1
let schedule = {};

console.log(isEmpty(schedule));

schedule['8:30'] = 'get up';

console.log(isEmpty(schedule));

function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}

// task 2

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

const sumSalaries = (salaries) => {
  let sum = 0;
  for (let key in salaries) {
    sum += salaries[key];
  }
  return sum;
};

console.log(sumSalaries(salaries));

// before the call
let menu = {
  width: 200,
  height: 300,
  title: 'My menu',
};

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] == 'number') {
      obj[key] = obj[key] * 2;
    }
  }
}

multiplyNumeric(menu);

// after the call
console.log(menu);
