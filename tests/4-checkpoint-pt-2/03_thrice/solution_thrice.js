/* eslint-disable no-unused-vars */
function thrice(newFunction) {
  let count = 0;
  return function () {
    if (count < 3) {
      count++;
      return newFunction();
    } else {
      console.log("cannot be invoked more than three times (thrice)");
    }
  };
}
function additionalFunction() {
  console.log("Hello World");
}