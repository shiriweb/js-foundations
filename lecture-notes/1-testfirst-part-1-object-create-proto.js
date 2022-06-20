/**
 * Object.create: creates a new object based on the input object
 * param1: is the source object
 * returns: a child object of the input object
 *      the returned child object has acces to all the source object properties and methods
 *      but printing the child object will not show the source object properties and methods
 */

let a = { name: "Amir", add: "Lalitpur" };

// When b and c are created by using Object.create
let b = Object.create(a);
let c = Object.create(a);
console.log(b); // prints the empty object {} because 'b' does not have any native properties yet
console.log(b.name); //will print Amir because 'b' has access to 'a's properties

/*
__proto__ : points to the parent of the current object,
            which is - the object from which the current object was created

*/
// console.log(c.__proto__); //then __proto__of b and c is the object a { name: 'Amir', add: 'Lalitpur' }

c.__proto__.name = "Manjila"; //changing anything on __proto__ of an object, changes it on the parent object
console.log(a); //{ name: 'Manjila', add: 'Lalitpur' } <=
console.log(b);
// console.log(b.name);
console.log(c.name);
console.log(c);
