let user = {
  // belongs to another code
  name: 'John',
};

let id = Symbol('id');

user[id] = 1;

alert(user[id]); // we can access the data using the symbol as the key
/*
What’s the benefit of using Symbol("id") over a string "id"?

As user objects belong to another codebase, it’s unsafe to add fields to them,
since we might affect pre-defined behavior in that other codebase. However, 
symbols cannot be accessed accidentally. The third-party code won’t be aware
of newly defined symbols, so it’s safe to add symbols to the user objects.
*/

let user = {
  name: 'John',
  age: 30,
  [id]: 123,
};

for (let key in user) alert(key); // name, age (no symbols)

let clone = Object.assign({}, user);

// read it again (maybe from another part of the code)
let idAgain = Symbol.for('id'); // if the symbol did not exist, it is created

// the same symbol
alert(id === idAgain); // true
