/* eslint-disable no-unused-vars, no-prototype-builtins */
function soup(phrase, characterBank) {

  for (let letter of phrase) {
    if (!characterBank.includes(letter)) {
      return false; 
    } else {
      characterBank = characterBank.replace(letter, '');
    }
  }
  return true; 
}