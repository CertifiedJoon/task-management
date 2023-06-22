let group = {
  title: 'Our Group',
  students: ['John', 'Pete', 'Alice'],

  showList() {
    this.students.forEach(
      (student) => console.log(this.title + ': ' + student), // arrow function does not have this
    );
  },
};

group.showList();

// arrow functions VS binding
/**
 * Bind creates a bound version of the funciton
 * arrow does not create any binding, the funciton simpily does not have this, the look
 * up of this is made exactly the same way as a regular variable search, in the outer
 * lexical environment.
 */

// arrow function does not have arguments variable.
