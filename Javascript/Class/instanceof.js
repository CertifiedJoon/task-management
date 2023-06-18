class Rabbit {}
let rabbit = new Rabbit();

console.log(rabbit instanceof Rabbit);

class Animal {
  static [Symbol.hasInstance](obj) {
    if (obj.canEat) return true;
  }
}

let obj = { canEat: true };

console.log(obj instanceof Animal);
