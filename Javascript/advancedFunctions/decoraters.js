function slow(x) {
  console.log(x);
  return x;
}

function cachingDecorator(func) {
  let cache = new Map();

  return function (x) {
    if (cache.has(x)) {
      return cache.get(x);
    }

    let result = func(x);

    cache.set(x, result);
    return result;
  };
}

slow = cachingDecorator(slow);

console.log(slow(1));
console.log(slow(1));

// with object function

let worker = {
  someMethod() {
    return 1;
  },
  slow(x) {
    console.log('Called with ' + x);
    return x;
  },
};

function cachingDecoratorForObjects(func) {
  let cache = new Map();

  return function (x) {
    if (cache.has(x)) {
      return cache.get(x);
    }

    let result = func.call(this, x); // this is passed correctly now
    cache.set(x, result);
    return result;
  };
}

worker.slow = cachingDecorator(worker.slow);

console.log(worker.slow(2));
console.log(worker.slow(2));

// method borrowing
function hash() {
  // console.log(arguments.join()); // error

  console.log([].join.call(arguments)); // borrow method from array
}

// tasks 1: spy decorator
function work(a, b) {
  console.log(a + b);
}

function spy(func) {
  function wrapper(...args) {
    wrapper.calls.push(args);
    return func.apply(this, args);
  }

  wrapper.calls = [];

  return wrapper;
}

work = spy(work);

work(1, 2);
work(4, 5);

for (let args of work.calls) {
  console.log(args.join());
}

// task 2: delay decorator
function f(x) {
  console.log(x);
}

function delay(func, delayDuration) {
  function wrapper(x) {
    setTimeout(() => func.apply(this, arguments), delayDuration);
  }

  return wrapper;
}

let f1000 = delay(f, 1000);

console.log(f1000('test'));

// task 3: throttle
function throttle(func, ms) {
  let isThrottled = false,
    savedArgs,
    savedThis;

  function wrapper() {
    if (isThrottled) {
      // (2)
      savedArgs = arguments;
      savedThis = this;
      return;
    }
    isThrottled = true;

    func.apply(this, arguments); // (1)

    setTimeout(function () {
      isThrottled = false; // (3)
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = savedThis = null;
      }
    }, ms);
  }

  return wrapper;
}

// binding to not lose this
let user = {
  firstName: 'John',
  say(phrase) {
    console.log(this.firstName, phrase);
  },
};

let say = user.say;

say('Hello');

say = user.say.bind(user);

say('Hello');

// binding arguments to create partial
function mul(a, b) {
  return a * b;
}

let double = mul.bind(null, 2);

console.log(double(3));

// use partial without context
function partial(func, ...argsBound) {
  return function (...args) {
    return func.call(this, ...argsBound, ...args);
  };
}

user.sayNow = partial(
  user.say,
  new Date().getHours() + ':' + new Date().getMinutes(),
);

user.sayNow('Hello');

// task fix losing this
function askPassword(ok, fail) {
  let password = 'pwd';
  if (password == 'rockstar') ok();
  else fail();
}

user = {
  name: 'John',

  loginOk() {
    console.log(this.name, 'logged in');
  },

  loginFail() {
    console.log(this.name, 'failed to log in');
  },

  login(result) {
    console.log(this.name + (result ? ' logged in' : ' failed to log in'));
  },
};

askPassword(user.loginOk.bind(user), user.loginFail.bind(user));
askPassword(
  () => user.loginOk(),
  () => user.loginFail(),
);

askPassword(user.login.bind(user, true), user.login.bind(user, false));
