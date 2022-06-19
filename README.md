### TestFirst JavaScript Overview

TestFirst JavaScript is a multi-part series that provides practice to intermediate to advanced javascript concepts. The majority of concepts introduced in TestFirst have practice exercises. However, there will be new concepts introduced in TestFirst that you will need to learn on your own by reading documentation (it's important to begin learning how to read documentation efficiently!)

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

<hr>
<br>
## Important Concepts

### 1-testfirst-part-1

- Object creation
  - Object.assign()
    ```
    let clone = Object.assign({}, objToClone
    ```
  - Object.create()
  - Factory functions
- New things
  - Arrow functions
  - Spread syntax (for arrays & objects)
  - Shorthand object notations
  - beforeEach in test specs
