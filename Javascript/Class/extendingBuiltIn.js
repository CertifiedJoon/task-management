class PowerArray extends Array {
  isEmpty() {
    return this.length === 0;
  }

  // non inplace built-in methods will use this as the constructor
  static get [Symbol.species]() {
    return Array;
  }
}

let arr = new PowerArray(1, 2, 5, 10, 50);
console.log(arr.isEmpty());

let filteredArr = arr.filter((item) => item >= 10);
console.log(filteredArr);
// console.log(filteredArr.isEmpty());

// no static inheritance in built-ins
