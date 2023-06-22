/*

TOPICS
DAY1
- constructor function
  - using 'prototype' of constructor function
- getting all arguments to a function
  - keyword 'arguments': regular function
  - gather operator: arrow function
- few extras
  - js template literal
  - ternary operation
- read on your own string and array methods like join, split, splice etc

DAY2
- Array methods
  - map
  - filter
  - reduce
*/

/*
Writing a constructor function
why: to create hierarchy / prototype chain 
  so that multiple objects can share common properties
how:
  1. write function name starting with Capital
  2. use 'this' keyword to create properties
  3. use the 'prototype' key to create prototype level properties
  4. use the 'new' keyword to execute the function
  - this will return all the variables as properties of the object
*/
function MakeFellow(fName, batch) {
  this.fName = fName;
  this.batch = batch;
}

MakeFellow.prototype.sayHello = function () {
  console.log(`Hello my name is, ${this.fName}`);
};

MakeFellow.prototype.fellowship = "TEJ";

let hemlal2 = new MakeFellow("Hemlal", 2023);
let lishu2 = new MakeFellow("Lishu", 2023);

console.log(hemlal2);
console.log(lishu2);
hemlal2.sayHello();
lishu2.sayHello();
console.log(hemlal2.fellowship);
console.log(lishu2.fellowship);

// console.log(hemlal2.hasOwnProperty("fName"));
// console.log(hemlal2.hasOwnProperty("fellowship"));

// function someFunc() {}

// someFunc();
// debugger;
// let hemlal = {
//   fName: "Hemlal",
//   batch: 2023,
//   sayHello() {
//     console.log(`Hello my name is, ${this.fName}`);
//   },
// };

// let lishu = {
//   fName: "Lishu",
//   batch: 2023,
//   sayHello() {
//     console.log(`Hello my name is, ${this.fName}`);
//   },
// };

// hemlal.sayHello();
// lishu.sayHello();

// let a = [1, 2, 3];
// let b = [2, 2, 3];
// a.push(4);
// b.push(5);

// Object.prototype.showAll = function () {
//   console.log(`this array has the elements ${this}`);
// };

// a.showAll();
// b.showAll();
// hemlal2.showAll();

// hemlal2.func = function () {
//   console.log(`this array has the elements ${Object.keys(this)}`);
// };

// hemlal2.func();

function printAllParams(...p1) {
  console.log(p1);
  for (let i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
}

// printAllParams("Sharmila", 2023, "TEJ");

let printAllParamsArrow = (...p1) => {
  p1.push(4);
  console.log(p1);
};

// printAllParamsArrow("Sharmila", 2023, "TEJ");

let isThisTrue = false;
let val = isThisTrue === true ? "this is true" : "this is false";

// if (isThisTrue === true) {
//   val = "this is true";
// } else {
//   val = "this is false";
// }

console.log(val);
