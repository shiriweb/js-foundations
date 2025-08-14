/* eslint-disable no-unused-vars */
function setPropsOnObj(object) {
  object.x = 7;
  object.y = 8;
  object.onePlus = function (number) {
    return number + 1;
  };
}

function setPropsOnArr(array) {
  array.hello = function () {
    return "Hello!";
  };
  array.full = "stack";
  array[0] = 5;
  array.twoTimes = function (number) {
    return number * 2;
  };
}

function setPropsOnFunc(functionObject) {
  functionObject.year = "20??";
  functionObject.divideByTwo = function (number) {
    return number / 2;
  };
}


function shallowCopy(a, b) {
  if (Array.isArray(a) && Array.isArray(b)) {
    return a.concat(b); 
  } else if (typeof a === "object" && a !== null && typeof b === "object" && b !== null) {
    let copy = {};
    for (let key in a) {
      copy[key] = a[key];  
    }
    for (let key in b) {
      copy[key] = b[key]; 
    }
    return copy; 
  }
}
