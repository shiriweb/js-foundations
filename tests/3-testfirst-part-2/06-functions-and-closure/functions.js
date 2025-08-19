/* eslint-disable no-unused-vars */

function concatString() {
  return Array.from(arguments).join("");
}

function yourFunctionRunner() {
  let finalString = "";
  for (let i = 0; i < arguments.length; i++) {
    finalString += arguments[i]();
  }
  return finalString;
}

function makeAdder(number1) {
  return function newfunction(number2) {
    return number1 + number2;
  };
}

function once(func) {
  let isCalled = false;
  function newFunction() {
    if (!isCalled) {
      isCalled = true;
      return func();
    }
    return "the function has already been called...";
  }
  return newFunction;
}

function createObjectWithClosures() {
  let value = 0;

  return {
    oneIncrementer: function () {
      value += 1;
    },
    tensIncrementer: function () {
      value += 10;
    },
    getValue: function () {
      return value;
    },
    setValue: function (newValue) {
      value = newValue;
    },
  };
}

function dontSpillTheBeans(secret) {
  return {
    getSecret: function () {
      return secret;
    },

    setSecret: function (newSecret) {
      secret = newSecret;
    },
  };
}

