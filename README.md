# 📚 TestFirst JavaScript Overview

TestFirst JavaScript is a multi-part series that provides practice to intermediate to advanced javascript concepts. The majority of concepts introduced in TestFirst have practice exercises. However, there will be new concepts introduced in TestFirst that you will need to learn on your own by reading documentation (it's important to begin learning how to read documentation efficiently!)

### Setting up the repository

<details><summary>Click to expand</summary>

### Before beginning your assignment, make sure you have completed these steps:

1. Forked & cloned the TestFirst repository.
2. Installed node and a text editor.

### Setup Test First

- **[Fork the repository to your personal GitHub Account](https://github.com/TEJ-Fellowship/js-foundations/)**
- **Clone** the repository to your local machine
- Install the VSCode [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) Extensions (if they aren't already installed)
- Run the command `npm install` inside each of the numbered directories inside the 'tests' directory (e.g. tests/1-testfirst-part-1)
- Run `testem` with the `npm run test` command or `npx testem` command

### Run Testem with npx testem

In your TestFirst directory run the command:

```sh
$ npm run test
```

OR

```sh

$ npx testem

```

After `testem` initiates, connect to `http//localhost:7357` in your web browser and your test specs will load.

</details>

---

## Foundations

### 1-testfirst-part-1

<details><summary>TO STUDY: Click to expand</summary>

- Object creation
  - [Object.assign()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
  ```
  let clone = Object.assign({}, objToClone)
  ```
  - [Object.create()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create)
  ```
  let parentObject = {name: "niru", grade:"masters"}
  let childObject = Object.create(parentObject)
  ```
  - Factory functions
  ```
  function makeStudent(name, grade) {
    let newStudent = {name, grade}
    return newStudent
  }
  let niru = makeStudent('niru', 'masters')
  ```
- New syntax / shortcuts

  - [Spread syntax (for arrays & objects)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

  ```
  let arrA = [1, [2,3], 4]
  let arrB = [4, 5, 6]
  let arrC = [20, ...arrA, arrB]

  let objA = {name: 'niru', grade: 'masters'}
  let objB = {age: 25}
  let objC = {age: 22, ...objA, objC}
  ```

  - [Shorthand object notations](https://attacomsian.com/blog/javascript-object-property-shorthand)

  ```
  let name = "niru"
  let grade = "masters"

  let niru = {name, grade}
  ```

- Preview

  - [\_\_proto\_\_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/proto)
  </details>

<details><summary>TODO: Click to expand</summary>

- [testfirst part 1](tests/1-testfirst-part-1/)
- [checkpoint part 1 (optional)](tests/2-checkpoint-pt-1/)

</details>

### 2-testfirst-part-2

<details><summary>TODO: Click to expand</summary>

- [Arrow Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

```
const sayHello = (name) => `hello ${name}!`
console.log(sayHello('Pitamber'))
```

- [Constructor function](readings/2-testfirst-part-2-constructor.md)

```
function FourWheeler(fwType) {
    this.numberOfWheels = 4
    this.type = fwType
}

let car = new FourWheeler('car')
```

- Adding a prototype function to the constructor function

```
FourWheeler.prototype.honk = () => console.log('honk');
FourWheeler.prototype.setType = (newType) => this.type = newType;
```

- [the `arguments` parameter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments)

```
function someFunc() {
  console.log(arguments);
}

someFunc('hello', 'there', 'you');
```

### Array methods (functional)

- [forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
- [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [Filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- [Reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
- [Some](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)
- [Every](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)
- [Includes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)

</details>

<details><summary>TODO: Click to expand</summary>

- [testfirst part 2](tests/3-testfirst-part-2/)
- [checkpoint part 2 (optional)](tests/5-checkpoint-pt-2/)

</details>
