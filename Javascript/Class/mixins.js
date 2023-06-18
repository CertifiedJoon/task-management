let sayHiMixin = {
  sayHi() {
    console.log(`Helllo ${this.name}`);
  },
  sayBye() {
    console.log(`Byte ${this.name}`);
  },
};

class User {
  constructor(name) {
    this.name = name;
  }
}

// simple method copying
Object.assign(User.prototype, sayHiMixin);

new User('dude').sayHi();

// complex example

let eventMixin = {
  /**
   * Subscribe to event, usage:
   * menu.on('select', funciton(item))
   */

  on(eventName, handler) {
    if (!this._eventHandlers) this._eventHandlers = {};
    if (!this._eventHandlers[eventName]) {
      this._eventHandlers[eventName] = [];
    }
    this._eventHandlers[eventName].push(handler);
  },

  /**
   * Cancel the subscription, usage:
   * menu.off('select', handler)
   */
  off(eventName, handler) {
    let handlers = this._eventHandlers?.[eventname];
    if (!handlers) return;
    for (let i = 0; i < handlers.length; i++) {
      if (handlers[i] == handler) {
        handlers.splice(i--, 1);
      }
    }
  },

  /**
   * Generate an event with the given name and dataa
   * this.trigger('select', data1, data2)
   */
  trigger(eventName, ...args) {
    if (!this._eventHandlers?.[eventName]) {
      return;
    }

    // call the handlers
    this._eventHandlers[eventName].forEach((handler) =>
      handler.apply(this, args),
    );
  },
};

class Menu {
  choose(value) {
    this.trigger('select', value);
  }
}

Object.assign(Menu.prototype, eventMixin);

let menu = new Menu();
menu.on('select', (value) => console.log(`Value selected: ${value}`));

menu.choose('123');
