/* eslint-disable no-unused-vars, no-prototype-builtins */
function findObjPropsHasOwn(object) {
  let result = [];
  for (let key in object) {
    if (object.hasOwnProperty(key)) {
      result.push(key);
    }
  }
  return result.join(", ");
}

function findObjKeys(object) {
  return Object.keys(object).join(", ");
}







