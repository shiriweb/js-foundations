/* eslint-disable no-unused-vars */

// create a function to return object
// this is called a factory function
function createCalculator() {
  //declare the object to be returned
  let calcObj = {
    //currValue will store the current value of the calculator
    currValue: 0,
    //the function, value, will return the currValue of the object
    value: function () {
      return this.currValue;
    },
    //the function add will take a num, and add it to the currValue of this object
    add: function (num) {
      this.currValue += num;
    },
    subtract: function (num) {
      this.currValue -= num;
    },
    clear: function () {
      this.currValue = 0;
    },
  };

  // return the object
  return calcObj;
}

// this function will take arr as an array of objects
function addSquareMethod(arr) {
  let result = [];

  //a function, square is declared
  function square() {
    return this.currValue * this.currValue;
  }

  for (let i = 0; i < arr.length; i++) {
    let currObj = arr[i];
    //for each object in the array arr
    //add the function square
    currObj.square = square;
    //push the modified object into our result array
    result.push(currObj);
  }

  return result;
}

//declare an object, humanCalc
const humanCalc = {
  //start the total at -10
  total: -10,
  value: function () {
    return this.total;
  },
  add: function (num) {
    this.total += num;
  },
  subtract: function (num) {
    this.total -= num;
  },
  clear: function () {
    this.total = -10;
  },
};

//this function uses Object.create to create a new object based on an existing object
function createHumanCalculator() {
  let newObj = Object.create(humanCalc);

  return newObj;
}
