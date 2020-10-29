"use strict";
//Everything Should be encapsulated in a class besides the let game run
// Need Object Player 1
// NeedObject Player 2
class Game {
  constructor() {
    this.playerOne = new Player("Robert"); //creating Player 1 object
    this.playerTwo = new Player("Computer"); //creating Player 2 object

  }
  
}

// Need Human Class Inherit to Player
// Need Computer Class Inherit to Player
class Player {
  constructor(name) {
    this.score = 0; //Starting score for each player object
    this.name = name; //player name that gets passed in
    this.choice = null; //the players RPSLS choice
    this.gestureOptions = ["rock","scissors"];//Here contains the gesture Options of the Game
  }
  chooseGesture () {
    console.log("Overide This Method");
  }
}
class Human extends Player {
  constructor(name) {
    super (name);
    
  }
 chooseGesture () {
   let playerChoice = prompt ("Choose a Gesture!").toLowerCase();
 }
}
class Computer extends Player {
  constructor(name) {
    super (name);
    
  }
 chooseGesture () {
   let playerChoice = prompt ("Choose a Gesture!").toLowerCase();
 }
}
let myObject = new Player ("Rob")

console.log(myObject)


// let game = new Game();
// game.runGame();






























/*------------------------------------------------------------------------------BELOW IS DICEGAME EXAMPLE----------------------------------------------------------*/
// two player game
// display rules
// players roll all 6 dice and add up their score
// compare the two totals of each player
// higher total gets a point
// first to three

// Player, Die, Game
// class Game {
//   constructor() {
//     this.playerOne = new Player("Mike");
//     this.playerTwo = new Player("Nevin");

//     this.dice = [];

//     this.dice.push(new Die(4));
//     this.dice.push(new Die(6));
//     this.dice.push(new Die(8));
//     this.dice.push(new Die(10));
//     this.dice.push(new Die(12));
//     this.dice.push(new Die(20));
//   }

//   runGame() {  // "main" method
//     this.displayRules();

//     while(this.playerOne.score < 3 && this.playerTwo.score < 3) {
//       let playerOneTotal = this.playerOne.rollAllDice(this.dice);
//       let playerTwoTotal = this.playerTwo.rollAllDice(this.dice);

//       if(playerOneTotal > playerTwoTotal) {
//         console.log(this.playerOne.name + " wins this round!");
//         this.playerOne.score++;
//       }
//       else if(playerTwoTotal > playerOneTotal) {
//         console.log(this.playerTwo.name + " wins this round!");
//         this.playerTwo.score++;
//       }
//       else {
//         console.log("Wow! You managed to tie after each rolling " + this.dice.length + " dice!");
//       }
//     }
    
//     this.displayGameWinner();
//   }

//   displayRules() {
//     console.log("Welcome to the War Dice Game!")
//     console.log("Two players will roll 6 dice and total up their results.")
//     console.log("The higher total will earn that player a point");
//     console.log("The first player to three points will win the game!");
//   }

//   displayGameWinner() {
//     if(this.playerOne.score > this.playerTwo.score) {
//       console.log(this.playerOne.name + " wins this game!");
//     }
//     else {
//       console.log(this.playerTwo.name + " wins this round!");
//     }
//   }
// }

// class Player {
//   constructor(name) {
//     this.score = 0;
//     this.name = name;
//   }

//   rollDie(die) {
//     let rollResult = die.generateRandomNumber();
//     return rollResult;
//   }

//   rollAllDice(diceArray) {
//     let runningTotal = 0;

//     for(let i = 0; i < diceArray.length; i++) {
//       let result = this.rollDie(diceArray[i]);
//       runningTotal += result;
//     }

//     return runningTotal;
//   }
// }

// class Die {
//   constructor(numberOfSides) {
//     this.numberOfSides = numberOfSides;
//   }

//   generateRandomNumber() {
//     let randomNumber = Math.floor(Math.random() * this.numberOfSides) + 1;
//     return randomNumber;
//   }
// }

// ////////////////////////////

// let game = new Game();
// game.runGame();