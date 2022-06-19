/* eslint-disable no-unused-vars */
let dog = {
  // assign a key 'name' with value 'Cody'
  name: 'Cody',
  // declare a function using shorthand-method syntax
  bark() {
    return 'ruff ruff!';
  },
};
let loud = 'loud';
// create a key in the object 'dog' by concatenating variable with string
dog[loud + 'Bark'] = function () {
  return 'RUFF RUFF!';
};
