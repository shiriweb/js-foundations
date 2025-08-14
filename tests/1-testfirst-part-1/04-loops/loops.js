/* eslint-disable no-unused-vars */
function repeat(string, times) {
  let result = "";
  for (let i = 0; i < times; i++) {
    result = result + string;
  }
  return result;
}

function sum(array) {
  let total = 0;
  for (i = 0; i < array.length; i++) {
    total = total + array[i];
  }
  return total;
}

function join(array, delimiter = "") {
  let result = "";

  for (let i = 0; i < array.length; i++) {
    if (i > 0) {
      result = result + delimiter;
    }
    result = result + array[i];
  }
  return result;
}

function gridGenerator(n) {
  if (n === 0) return "";

  let grid = "";

  for (let row = 0; row < n; row++) {
    for (let col = 0; col < n; col++) {
      if ((row + col) % 2 === 0) {
        grid = grid + "#";
      } else {
        grid = grid + " ";
      }
    }
    grid = grid + "\n";
  }
  return grid;
}

function paramify(object) {
  let array = [];
  for (let key in object) {
    if (object.hasOwnProperty(key)) {
      array.push(key + "=" + object[key]);
    }
  }
  array.sort();
  return array.join("&");
}

function paramifyObjectKeys(obj) {
  let keys = Object.keys(obj);

  keys.sort();

  let result = [];

  for (let i = 0; i < keys.length; i++) {
    let key = keys[i];
    let value = obj[key];
    result.push(key + "=" + value);
  }

  return result.join("&");
}


function sort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}