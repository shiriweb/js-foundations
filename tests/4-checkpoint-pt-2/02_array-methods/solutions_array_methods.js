/* eslint-disable no-unused-vars */
function useMapToUpperCase(string) {
  let array = string.split(" ");
  let upperCase = array.map(function (word) {
    return word.toUpperCase();
  });
  return upperCase;
}

function useFilter(array) {
  let result = array.filter(function (word) {
    return word.includes("@");
  });
  return result;
}

function sumWithReduce(array, initialValue) {
  initialValue = initialValue || 0;
  let sum = array.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
  }, initialValue);
  return sum;
}

function filterEvensDoubleAndSum(array, initialValue) {
  initialValue = initialValue || 0;
  let filteredNumber = array.filter(function (num) {
    return num % 2 === 0;
  });

  let doubled = filteredNumber.map(function (num) {
    return num * 2;
  });

  let sum = doubled.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
  }, initialValue);
  return sum;
}