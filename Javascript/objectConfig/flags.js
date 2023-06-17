let user = {
  name: 'John',
  address: 'djdjdj',
};

let descriptor = Object.getOwnPropertyDescriptor(user, 'name');

console.log(JSON.stringify(descriptor, null, 2));

Object.defineProperty(user, 'name', {
  writable: false,
});

descriptor = Object.getOwnPropertyDescriptor(user, 'name');

Object.defineProperties(user, {
  name: { value: 'John', writable: false },
  address: { value: 'smsmsm', writable: false },
});

// flag aware clone
let clone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(user));

Object.preventExtensions(user); // forbid addition of properties.
Object.seal(user); // forbid addition/removing of properties, configurable: false
Object.freeze(user); // forbids add/remove/chagning of properties. config:false write:false
