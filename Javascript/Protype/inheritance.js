let animal = {
  eats: true,
  walk() {
    console.log('Walking...');
  },
};

let rabbit = {
  jumps: true,
};

// __proto__ is a historical getter and setter for [[Prototype]]
rabbit.__proto__ = animal; // sets rabbit.[[Prototype]] = animal

console.log(rabbit.eats);
console.log(rabbit.jumps);

let horse = {
  jumps: true,
  __proto__: animal,
};

rabbit.walk();

let zebra = {
  earLength: 10,
  __proto__: horse,
};

zebra.walk();
console.log(zebra.earLength);

// Overwriting

let donkey = {
  __proto__: horse,
};

zebra.jumps = false;

console.log(zebra.jumps);

// tasks
let head = {
  glasses: 1,
};

let table = {
  __proto__: head,
  pen: 3,
};

let bed = {
  __proto__: table,
  sheet: 1,
  pillow: 2,
};

let pockets = {
  __proto__: bed,
  money: 2000,
};

// tasks

let hamster = {
  stomach: [],

  eat(food) {
    this.stomach.push(food);
  },
};

let speedy = {
  stomach: [],
  __proto__: hamster,
};

let lazy = {
  stomach: [],
  __proto__: hamster,
};

speedy.eat('apple');

console.log(speedy.stomach);
console.log(lazy.stomach);
