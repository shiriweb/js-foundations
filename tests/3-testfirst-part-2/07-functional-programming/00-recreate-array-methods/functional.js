/* eslint-disable no-unused-vars */
const forEach = function (array, newFunction) {
  for (let i = 0; i < array.length; i++) {
    newFunction(array[i]);
  }
};

const doubler = (n) => n * 2;

const map = function (array, newFunction) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(newFunction(array[i]));
  }
  return newArray;
};

const filter = function (array, newFunction) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (newFunction(array[i])) {
      newArray.push(array[i]);
    }
  }
  return newArray;
};

const includes = (collection, value) => {
  for (let key in collection) {
    if (collection.hasOwnProperty(key)) {
      if (collection[key] === value) {
        return true;
      }
    }
  }
  return false;
};

const countWords = (value, sentences) => value + sentences.split(" ").length;

const reduce = (array, startValue, newFunction) => {
  let value = startValue;
  for (let i = 0; i < array.length; i++) {
    value = newFunction(value, array[i]);
  }
  return value;
};

const sum = (array) => {
  return reduce(
    array,
    0,
    (accumulator, currentValue) => accumulator + currentValue
  );
};

const every = (array, checkerFunc) => {
  const everyIterator = (currentVal, nextVal) =>
    currentVal && checkerFunc(nextVal);
  return reduce(array, true, everyIterator);
};

const some = (array, newFunction) => {
  for (let i = 0; i < array.length; i++) {
    if (newFunction(array[i])) {
      return true;
    }
  }
  return false;
};

const indexAndValue = (array) => {
  return array.map((value, index) => ({ value, index }));
};
