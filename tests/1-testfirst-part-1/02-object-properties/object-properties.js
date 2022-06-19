/* eslint-disable no-unused-vars */
function setPropsOnObj(obj) {
  obj.x = 7;
  obj.y = 8;
  obj.onePlus = function (x) {
    return x + 1;
  };
  return obj;
}

function setPropsOnArr(arr) {
  arr.hello = function () {
    return 'Hello!';
  };
  arr.full = 'stack';
  arr[0] = 5;
  arr.twoTimes = function (x) {
    return x * 2;
  };
}

function setPropsOnFunc(fn) {
  fn.year = '20??';
  fn.divideByTwo = function (x) {
    return x / 2;
  };
}

function shallowCopy(val1, val2) {
  // if the input param is an array, then concat the arrays
  if (Array.isArray(val1)) return val1.concat(val2);
  // else, the input must be object, in which case we return object
  // by spread syntax
  else return { ...val1, ...val2 };
}
