/* eslint-disable no-unused-vars */
function reject(array, newFunction) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (!newFunction(array[i])) {
      result.push(array[i]);
    }
  }
  return result;
}