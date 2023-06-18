class User {
  constructor(name) {
    this.name = name;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (value.length < 4) {
      console.log('Too short.');
      return;
    }

    this._name = value;
  }

  ['say' + 'Hi']() {
    console.log('Hello');
  }
}

let user = new User('John');

// Class is a function
console.log(typeof User);

console.log(User === User.prototype.contructor);

console.log(Object.getOwnPropertyNames(User.prototype));

console.log(user.name);

new User('James').sayHi();

// Class fields methods to avoid losing binding
class Button {
  constructor(value) {
    this.value = value;
  }

  click = () => {
    console.log(this.value);
  };
}

let button = new Button('hello');
setTimeout(button.click, 1000);

// task 1
class Clock {
  constructor({ template }) {
    this.template = template;
  }

  render = () => {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    let output = this.template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);

    console.log(output);
  };

  stop() {
    clearInterval(timer);
  }

  start() {
    this.render();
    this.timer = setInterval(this.render, 1000);
  }
}

let clock = new Clock({ template: 'h:m:s' });
clock.start();
