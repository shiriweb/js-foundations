/* eslint-disable no-unused-vars */
function createCalculator() {
  let total = 0;
  return {
    add(number) {
      total = total + number;
    },
    subtract(number) {
      total = total - number;
    },
    value() {
      return total;
    },
    clear() {
      total = 0;
    },
  };
}

function addSquareMethod(array) {
  for (let i = 0; i < array.length; i++) {
    array[i].square = function () {
      return this.value() * this.value();
    };
  }
  return array;
}

const humanCalculator = {
  add(number) {
    this.total += number;
  },
  subtract(number) {
    this.total -= number;
  },
  value() {
    return this.total;
  },
  clear() {
    this.total = -10;
  },
};

function createHumanCalculator() {
  let calculator = Object.create(humanCalculator);
  calculator.total = -10;
  return calculator;
}
