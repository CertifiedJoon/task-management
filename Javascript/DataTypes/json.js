let student = {
  name: 'John',
  age: 30,
  isAdmin: false,
  courses: ['html', 'css', 'js'],
  spouse: null,
};

// converts objects to string
let json = JSON.stringify(student);

console.log(typeof json);

console.log(json);

// technicalities
console.log(JSON.stringify('test')); //json string is always double quoted.

// JSON skips js-specific properties
let user = {
  sayHi() {
    console.log('d');
  },
  [Symbol('id')]: 123,
  sometihng: undefined,
};

console.log(JSON.stringify(user));

// avoid circular reference by listing parameters
let room = {
  number: 23,
};

let meetup = {
  title: 'Conference',
  participants: [{ name: 'John' }, { name: 'Alice' }],
  place: room,
};

room.occupiedBy = meetup; // circular reference;

// avoid circular reference by deliberately avoiding occupiedBy.
console.log(
  JSON.stringify(meetup, ['title', 'participants', 'place', 'name', 'number']),
);

// avoir circular reference by replacer

console.log(
  JSON.stringify(
    meetup,
    function replacer(key, value) {
      return key == 'occupiedBy' ? undefined : value;
    },
    2,
  ),
);

// custum toJSON()
room = {
  number: 23,
  toJSON() {
    return this.number;
  },
};
console.log(JSON.stringify(room));

// JSON Parse
// stringified array
let numbers = '[0, 1, 2, 3]';

numbers = JSON.parse(numbers);
console.log(numbers);

// use revival to revive strings into js object
let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

meetup = JSON.parse(str, function (key, value) {
  if (key == 'date') return new Date(value);
  return value;
});

console.log(meetup.date.getDate());
