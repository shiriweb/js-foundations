/* eslint-disable no-unused-vars, no-throw-literal*/

/*
  Refactor the constructor function below and use ES2015 Class Syntax
*/

class RPNCalculator {
  constructor() {
    this.stack = [];
  }
  push(number) {
    this.stack.push(number);
  }

  pop(newFunction) {
    if (this.stack.length < 2) {
      throw "rpnCalculatorInstance is empty";
    } else {
      const num1 = this.stack.pop();
      const num2 = this.stack.pop();

      this.push(newFunction(num1, num2));
    }
  }
  plus() {
    this.pop((first, second) => first + second);
  }

  value() {
    return this.stack[this.stack.length - 1];
  }

  minus() {
    this.pop((first, second) => second - first);
  }

  times() {
    this.pop((first, second) => first * second);
  }

  divide() {
    this.pop((first, second) => second / first);
  }
}
