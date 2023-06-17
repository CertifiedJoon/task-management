let user = {
  name: 'John',
  surname: 'Smith',

  get fullName() {
    return `${this.name} ${this.surname}`;
  },

  set fullName(value) {
    [this.name, this.surname] = value.split(' ');
  },
};

user.fullName = 'Jane Doe';
console.log(user.fullName);

// great application. smart getting and setting

user = {
  get name() {
    return this._name;
  },

  set name(value) {
    if (value.length < 4) {
      console.log('Name too short');
      return;
    }
    this._name = value;
  },
};

user.name = 'Pete';
console.log(user.name);

user.name = '';
