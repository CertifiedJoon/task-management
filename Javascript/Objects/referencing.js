// Copying
let message = 'Hello';
let phrase = message;

// user and admin points to the same instance of obj.
let user = {
  name: 'John',
};
let admin = user;
admin.name = 'Pete';
console.log(user.name);
console.log(user == admin);
console.log(user === admin);

// const objects can be modified. but not reassigned.
const user2 = {
  name: 'John',
};
user2.name = 'Jane';

// deepcopy
let clone = {};
for (let key in user2) {
  clone[key] = user[key];
}
console.log(clone == user2);
console.log(clone === user2);

// Assign -> copy all properties to destination, can be used to deepcopy
let user3 = { name: 'John' };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// copies all properties from permissions1 and permissions2 into user
Object.assign(user3, permissions1, permissions2);

// now user = { name: "John", canView: true, canEdit: true }
console.log(user3.name); // John
console.log(user3.canView); // true
console.log(user3.canEdit); // true

// deepcopy using assign
let clone2 = {};

Object.assign(clone2, user3);
console.log(clone2 == user3);
console.log(clone2 === user3);

// Nested Cloning
let user4 = {
  name: 'John',
  sizes: {
    height: 182,
    width: 50,
  },
};

let clone3 = structuredClone(user4);

console.log(user4.sizes === clone3.sizes); // false, different objects

// user and clone are totally unrelated now
user4.sizes.width = 60; // change a property from one place
console.log(clone3.sizes.width);
