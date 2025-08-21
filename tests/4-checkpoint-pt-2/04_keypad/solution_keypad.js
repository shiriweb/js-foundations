/* eslint-disable no-unused-vars */
const keypad = {
  1: 1,
  a: 1,
  b: 2,
  c: 3,
  d: 1,
  e: 2,
  f: 3,
  g: 1,
  h: 2,
  i: 3,
  j: 1,
  k: 2,
  l: 3,
  m: 1,
  n: 2,
  o: 3,
  p: 1,
  q: 2,
  r: 3,
  s: 4,
  t: 1,
  u: 2,
  v: 3,
  w: 1,
  x: 2,
  y: 3,
  z: 4,
  " ": 1,
};

function pressesForChar(character) {
  if (keypad[character]) {
    return keypad[character];
  } else {
    return 0;
  }
}

function presses(word) {
  const lettersArray = word.toLowerCase().split("");
  const pressesArray = lettersArray.map(function (char) {
    return pressesForChar(char);
  });
  const totalPresses = pressesArray.reduce(function (total, num) {
    return total + num;
  }, 0);
  return totalPresses;
}

function pressesForPhrase(phrase) {
  const charsArray = phrase.toLowerCase().split("");
  const pressesArray = charsArray.map(function (char) {
    return pressesForChar(char);
  });
  const totalPresses = pressesArray.reduce(function (total, num) {
    return total + num;
  }, 0);
  return totalPresses;
}
