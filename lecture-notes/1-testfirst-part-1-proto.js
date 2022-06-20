// Object.create
let a = { name: "Amir", add: "Lalitpur" };

let b = Object.create(a);
let c = Object.create(a);
// console.log(c.__proto__);

c.__proto__.name = "Manjila";
console.log(a);
// console.log(b);
// console.log(b.name);
console.log(c.name);
console.log(c);
