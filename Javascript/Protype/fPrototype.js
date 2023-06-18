let animal = {
  eats: true,
};

function Rabbit(name) {
  this.name = name;
}

Rabbit.prototype = animal;

let rabbit = new Rabbit('White Rabbit'); // rabbit.__proto__ == animal

console.log(rabbit.eats);

// default prototype
function Bunny() {}
s;
/**
 * default Prototype = {constructor: Bunny}
 */

// how to preserve constructor
function Rabbit() {}

// Not overwrite Rabbit.prototype totally
// just add to it
Rabbit.prototype.jumps = true;
// the default Rabbit.prototype.constructor is preserved
