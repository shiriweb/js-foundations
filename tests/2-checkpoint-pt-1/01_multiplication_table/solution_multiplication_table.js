/* eslint-disable no-unused-vars */
function multiplicationTable(row, column) {

  let total = [];
  for (let i = 1; i <= row; i++) {
    let rowArray = [];
    for (let j = 1; j <= column; j++) {
      rowArray.push(i * j);
    }
    total.push(rowArray);
  }
  return total;
}
