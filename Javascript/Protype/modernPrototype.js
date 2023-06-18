let animal = {
  eats: true,
};

let rabbit = Object.create(animal);

console.log(rabbit.eats);

console.log(Object.getPrototypeOf(rabbit) === animal);

Object.setPrototypeOf(rabbit, {});

let bunny = Object.create(animal, {
  jumps: {
    value: true,
  },
});

console.log(bunny.jumps);

// usecase in cloning
let clone = Object.create(
  Object.getPrototypeOf(obj),
  Object.getOwnPropertyDescriptors(obj),
);
