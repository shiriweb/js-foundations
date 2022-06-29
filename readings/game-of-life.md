# Conway's game of life

We are going to program a JavaScript version of the Game of Life. Along the way, we'll continue learning and practicing DOM manipulation, Event Handlers and more.

## What is the Game of Life?

[Conway's Game of Life](https://en.wikipedia.org/wiki/Conway's_Game_of_Life) is a set of rules governing the destruction, persistence, or propagation of neighboring cells in a grid — a pseudo-simulation of life. It was created by John Horton Conway in 1970, in an effort to simplify a concept by the mathematician John von Neumann in the 1940s. The intent and power of the game is not in realistically simulating life, but rather in serving as a simple system that produces complex behavior. In fact, the Game of Life is a [universal Turing machine](http://en.wikipedia.org/wiki/Turing_machine), capable of modeling any algorithmic calculation.

Here is an [example video](http://www.youtube.com/watch?v=C2vgICfQawE) showing many of the complex patterns that the Game of Life can produce.

## How to play the game?

The game of life is played on a 2D board (easily modeled as a 2D array), where each cell has two possible states: _living_ or _dead_. For each iteration of the board state, the destiny of each cell is determined by these four rules:

1. Any live cell with two or three live neighbors lives on to the next generation.
2. Any live cell with fewer than two live neighbors dies, as if caused by under-population.
3. Any live cell with more than three live neighbors dies, as if by overcrowding.
4. Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.

The initial pattern constitutes the seed of the system. The first generation is created by applying the above rules simultaneously to every cell in the seed — in other words, each generation is a pure function of the preceding one. The discrete moment at which all the births and deaths actually occur is often called a step. The rules are applied repeatedly to create further generations (one new generation per step).

## LET'S LOOK AT HOW AN EXAMPLE GOL BOARD COULD EVOLVE

**_Step 1_** ![gol step1](images/step1.png)

**_Step 2_** ![gol step1](images/step2.png)

**_Step 3_** ![gol step1](images/step3.png)

Step 3 is a stable state.

## Setup

We've setup an [initial project on Github](https://github.com/TEJ-Fellowship/game-of-life) for you to fork.

## Development approach

This specific page is not a hands-on, actionable exercise - just read it, you won't have to type anything.

We will start by discussing how to aproach the development of the Game of Life project, beginning by understanding what is already provided and how to expand from that:

### Project Skeleton

A project skeleton has been provided, complete with an HTML and CSS files. There are two JavaScript files: `GameOfLife.js` and `main.js`.

Let's start by taking a look at `GameOfLife.js`:

## GameOfLife.js

The `GameOfLife.js` file contains a `GameOfLife` `class`. This class will build a 2D Array to represent the board of cells. Each cell is just a value (a boolean or an integer - 0 and 1 for example) representing whether it's alive or dead. Something like this:

```js
[
  [0, 0, 1, 1, 1, 1, 0, 0],
  [0, 1, 0, 0, 0, 0, 1, 0],
  [1, 0, 1, 0, 0, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 0, 0, 1, 0, 1],
  [1, 0, 0, 1, 1, 0, 0, 1],
  [0, 1, 0, 0, 0, 0, 1, 0],
  [0, 0, 1, 1, 1, 1, 0, 0],
];
```

Now, you might be wondering - Why not use `DOM` elements as cells instead of an `array`? Well, using a plain array and having the game rules operate on that array means that the GameOfLife class will be portable - when running on the browser we will have freedom to choose how to display the board of cells to the user - Manipulating the DOM to build a table or using a Canvas element, for example. But it doesn't stop there, because the class could also run on the server or even on a physical computing platform, making game of life display on a LED matrix:

![gol led matrix](images/gol-led-matric.gif)

## main.js

<details><summary>To see hint: click to expand</summary>

```js

```

</details>
