// protected variables, they are inheritable
class CoffeeMachine {
  _waterAmount = 0;
  #waterLimit = 200;

  #fixWaterLimit(value) {
    if (value < 0) return 0;
    if (value > this.#waterLimit) return this.#waterLimit;
  }

  setWaterLimit(value) {
    this.#waterLimit = this.#fixWaterLimit(value);
  }

  setWaterAmount(value) {
    if (value < 0) {
      value = 0;
    }
    this._waterAmount = value;
  }

  getWaterAmount() {
    return this._waterAmount;
  }

  get power() {
    return this._power;
  }

  constructor(power) {
    this._power = power;
    console.log(`Created a coffee-machine, power: ${power}`);
  }
}

let coffeeMachine = new CoffeeMachine(100);
coffeeMachine.waterAmount = 200;

console.log(`Power is: ${coffeeMachine.power}W`);
coffeeMachine.power = 25;

// private variables, not inherited, not well supported by browser, can be polyfilled
coffeeMachine.setWaterLimit = 1000;
