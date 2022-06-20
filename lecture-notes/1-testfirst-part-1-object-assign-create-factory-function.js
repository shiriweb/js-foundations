let a = { name: "amir", add: { city: "ktm" } };
// console.log(a);

//shallow copy all key value pairs from parameter 2 to parameter 1
// let b = Object.assign({}, a);
//same as assign, we can use spread syntax
let b = { ...a, age: 22, health: "good" };
// console.log(b);
//spread syntax also works in arrays the same way
let mainArray = [1, 2, [3, 4]];
let copiedArray = [300, ...mainArray];
// copiedArray[0] = 10; //[10,2,ref] where ref points to mainArray[2]
copiedArray[2][1] = 100; //changes ref at index 2 in mainArray becomes [3, 100]
// console.log(mainArray);
// console.log(copiedArray);

// console.log(b);

b.name = "Subash";
b.add.city = "Lalitpur";
// console.log(a);
// console.log(b);
b.add = "Lalitpur";
// console.log(a);
// console.log(b);

function createStudent(name, city) {
  let student = { name, city };

  return student;
}

let newStudent = createStudent("Niru", "Kirtipur");
console.log(newStudent);
