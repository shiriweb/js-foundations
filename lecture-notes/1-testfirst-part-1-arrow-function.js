// Arrow function
// let createStudent = (name, city) => {
//   return { name, city };
// };
let createStudent = (name, city) => ({ name, city });

let tryArrowFunc = (arg) => arg * 100;

let newStudent = createStudent("Niru", "Kirtipur");
console.log(newStudent);

console.log(tryArrowFunc(22));
