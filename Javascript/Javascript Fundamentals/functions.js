function log(message = 'default log') {
  console.log(message);
}
log('logged');

function checkAge(age) {
  return age > 18 || confirm('Did parents allow you?');
}
console.log(checkAge(19));

let sayHi = function () {
  console.log('Hello');
};

sayHi();

// function callbacks

function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

function showOk() {
  alert('You agreed.');
}

function showCancel() {
  alert('You canceled the execution.');
}

// usage: functions showOk, showCancel are passed as arguments to ask
// function is a value representing and action()
ask('Do you agree?', showOk, showCancel);

// function declaration can be called earlier than it is defined
// function expression is created when the execution reaches it.

// function declaration resides locally
// function expression resides globally to the scope.
