/* eslint-disable no-unused-vars */
/*
str: a string
times: a number
returns: a string of str repeated for times number
*/
function repeat(str, times) {
  let result = '';

  for (let i = 0; i < times; i++) {
    result += str;
  }

  return result;
}
/*
arr: array of numbers
returns: the sum of all the values in the arr
*/
function sum(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    let curVal = arr[i];
    result += curVal;
  }

  return result;
}
/*
arr: array of strings
sep: a string value
returns: a string of all the values in arr separated by sep
example: join(['a','b','c'], '22') => 'a22b22c'
*/
function join(arr, sep = '') {
  let result = '';

  //loop through the array to one before the last value
  for (let i = 0; i < arr.length - 1; i++) {
    let curVal = arr[i];
    //for each value, concatenate the value and separator
    result += curVal + sep;
  }
  //after the loop, if the array is not empty,
  // then add the last value to the end of the result
  if (arr.length) result += arr[arr.length - 1];

  return result;
}
/*
n: a number
returns: a string representing a grid of nXn, with alternate '#' and ' ' and "\n" representing end of line
example: gridGenerator(3) => "# #\n # \n# #\n"
*/
function gridGenerator(n) {
  let result = '';
  //creating an array with all possible values in grid
  let gridElems = ['#', ' '];

  //looping through the rows
  for (let i = 0; i < n; i++) {
    //var to hold the current row
    let curRow = '';
    //now looping through the columns
    for (let j = 0; j < n; j++) {
      //create the row with alternate values from gridElems
      curRow += gridElems[(i + j) % 2];
    }
    //end each row with '\n'
    result += curRow + '\n';
  }

  return result;
}
/*
obj: object
returns: a string representation of the obj that is sorted alphabetically
example: paramify({b: 'bello', c:'cello', a: 'aello'}) => {a='aello'&b='bello'&c='cello'}
*/
function paramify(obj) {
  let result = [];

  //looping through object
  for (let key in obj) {
    //if key is object's own property, then only include it
    if (obj.hasOwnProperty(key)) result.push(`${key}=${obj[key]}`);
  }

  // sort the result, then join it with & using our join function we wrote earlier
  return join(result.sort(), '&');
}

/*
obj: object
returns: a string representation of the obj that is sorted alphabetically
example: paramify({b: 'bello', c:'cello', a: 'aello'}) => {a='aello'&b='bello'&c='cello'}
*/
function paramifyObjectKeys(obj) {
  let result = [];
  //this time, we use the Object.keys to get all the own keys of the object as an array
  let keys = Object.keys(obj);

  //loop through the array of keys
  for (let i = 0; i < keys.length; i++) {
    let key = keys[i];
    result.push(`${key}=${obj[key]}`);
  }

  //then sort, and use our own join
  return join(result.sort(), '&');
}

/*
arr: Array of strings or numbers
returns: an array that is sorted in ascending order
*/
function sort(arr) {
  //capture the length to use for looping
  let length = arr.length;
  //lets loop one at a time
  for (let i = 0; i < length; i++) {
    //for each loop instance, let's go to length -1
    for (let j = 0; j < length - 1; j++) {
      let a = arr[j];
      let b = arr[j + 1];
      //if a > b, then swap the values of the two indices
      if (a > b) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
    //now, the last value is definitely the largest
    //so, we only need to loop from the beginning to one less the last value we have sorted up to this point
    length--;
  }
  return arr;
}

console.log(sort([17, 43, 216, 3, 9, 27]));
