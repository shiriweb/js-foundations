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

const bookPrototype = {
  getPrice() {
    return this.price;
  },
  getInfo() {
    return `${this.title} by ${this.author}`;
  },
  addRating(rating) {
    this.rating.push(rating);
  },
  getRating() {
    if (!Array.isArray(this.rating) || this.rating.length === 0) return 0;
    const totalStars = this.rating.reduce(
      (sum, stars) => sum + (typeof stars === "string" ? stars.length : 0),
      0
    );
    return totalStars / this.rating.length;
  },
};

function createBook(id, title, author, price) {
  const book = Object.create(bookPrototype);
  book.id = id;
  book.title = title;
  book.author = author;
  book.price = price;
  book.rating = [];
  return book;
}

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


