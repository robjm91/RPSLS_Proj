"use strict";
//Everything Should be encapsulated in a class 

class Game {
  constructor() {
    this.playerOne = new Player(); 
    this.playerTwo = new Player();
  }
  runGame() {
    alert("Welcome to RPSLS!\nPress the 'OK' button to continue.");

  }

}

let gestureArray = [];
class Player { 
  constructor() {
    this.score = 0; 
    this.name = "";

    this.choice = "";
    this.gestureObjects = [];
    
  }
  chooseGesture () {
    console.log("Overide This Method");
  }
}

class Gesture extends Player {
  constructor() {
    super ();
    this.gesture = ["rock", "paper", "scissors", "lizard", "spock"];
  }
  chooseGesture() {
    let playerChoice = prompt ("Choose a Gesture!\n rock(1), paper(2), scissors(3), lizard(4), spock(5)");
    if(playerChoice < 1 || playerChoice > 5) {
      console.log("Please Choose A Valid Gesture Option" + playerChoice);
    }
    else{
      this.choice = this.gestureObjects[playerChoice];
    }
  }
}

class Human extends Player { 
  constructor() {
    super();
  }

 askName() {
   var playerName;
   playerName = prompt("Hello,\n What is your name?");
   this.name = playerName;
 }

 
}

class Computer extends Player { 
  constructor() {
    super ();
    this.name = "AI";
  }
  

  randomNumber() {
    let randomNumber = Math.floor(Math.random() * 5);
    return randomNumber;
  }

 chooseGesture() {
   let computerGestureChoice = this.gestures[this.null()];//this.null temporary(TODO)
   this.choice = computerGestureChoice;
 }

}

let game = new Game();
game.runGame();




