class Error {
  constructor(message) {
    this.message = message;
    this.name = this.constructor.name;
  }
}

class ValidationError extends Error {
  constructor(message) {
    super(message);
  }
}

class PropertyRequiredError extends ValidationError {
  constructor(property) {
    super('No property: ' + property);
    this.property = property;
  }
}

function test() {
  throw new ValidationError('Whoops!');
}

function readUser(json) {
  let user = JSON.parse(json);

  if (!user.age) {
    throw new PropertyRequiredError('No field: age');
  }

  if (!user.name) {
    throw new PropertyRequiredError('No field: name');
  }
}

try {
  let user = readUser('{ "age" : 25 }');
} catch (err) {
  if (err instanceof ValidationError) {
    console.log('Invalid data: ' + err.message);
    console.log(err.name);
    console.log(err.property);
  } else if (err instanceof SyntaxError) {
    console.log('JSON Syntax Error: ' + err.message);
  } else {
    throw err;
  }
}
