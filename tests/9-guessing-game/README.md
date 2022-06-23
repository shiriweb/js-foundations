# The guessing game

The Guessing Game Project is a two-part project. The game is simple. The user guesses a number between 1-100. The app should respond and indicate if their guess is 'hot' or 'cold' based on how close the guess is to the number they are trying to guess. The game should also keep track of previous guesses, and give the user a way to reset the game or get a hint.

## PART 1: HTML / CSS

### ASSIGNMENT

The first portion involves creating the HTML and CSS for the Guessing Game. During this section, do not worry about adding any functionality (JavaScript), focus on adding the HTML and CSS elements and an appealing design to your project!

The Guessing Game project provides a starter repository that provides the base structure for your project. Take your HTML and CSS knowledge and apply them to the requirements outlined below.

### PROJECT REQUIREMENTS:

<details><summary>Click to expand</summary>

- A header
- 2-4 Buttons
- 1 Input Field and submit button
- A list of previous guesses
- A fun design! (this is optional)
- A new Github Repository for the Guessing Game
- When you're finished with Part 1, your guessing game will look something like this:

  ![guessing game image](/readings/images/guessing-game.png)

This repository contains the following starter files:

- index.html file
- main.css file
- js directory

After your HTML and CSS is complete, we'll have a short lesson on adding JavaScript to your web page so we can play the Guessing Game!

</details>

---

## PART 2: DOM

### ASSIGNMENT

It's time to add javascript functionality to our guessing game project! The goal of this project isn't to gain a deep understanding of HTML, CSS and using JavaScript with the DOM, the goal is to learn the basics of a few separate technologies and piece them together in a project. The immersive will dive into HTML, CSS and using JS in the browser in more depth!

### PROJECT REQUIREMENTS:

<details><summary>Click to expand</summary>

Here is how the guessing-game operates:

- A number between 1-100 will be randomly generated and is the winning number.
- The player inputs their guess in a text input field and then submits their guess.
- If the number submitted is the winning number, the player wins! Otherwise, they are allowed to try again.
- The game should give the player a hint after each guess, helping them know whether to guess lower or higher and how close they are.
- After five unsuccessful guesses, the game is over, and the player loses.

Here are a few features we suggest adding to your game (they are not required):

- Hint Button - Create a hint button that provides two random numbers between 1 and 100 and the "winning" number
- Reset/Play Again - Create a Play Again button that removes all the information from the page and restarts the game

</details>

---

### PROJECT SETUP

You already have the project directory in this repo. Part 1 of this project is to add the HTML and CSS to the project. Part 2 is to add the JS functionality.

You may have noticed there is a JS directory with a guess-game-specs.js. This file is intended to be a guide to set up the base functionality of the guessing game. It is up to you to decide to use it. If you use the specs to create the basic logic and functionality of your game, don't forget you need to add the event listeners to add the functionality to the document, you can add the event listeners in your guessing-game.js file (along with the "solution" code from the guessing-game-spec.js file).
