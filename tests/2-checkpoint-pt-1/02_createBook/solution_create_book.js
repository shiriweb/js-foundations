/* eslint-disable no-unused-vars, no-prototype-builtins */

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