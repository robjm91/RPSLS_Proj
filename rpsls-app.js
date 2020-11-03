"use strict";


class Game {
  constructor() {
    this.playerOne = new Player(); 
    this.playerTwo = new Player();
  }

  displayRules(){
    alert("Welcome to RPSLS!\nPress the 'OK' button to continue.");
    console.log("The rules are simple:\n");
    console.log("Rock Crushes Scissors\nScissors Cuts Paper\nPaper Covers Rock\nRock Crushes Lizard\nLizard Poisons Spock\nLizard Poisons Spock\nScissors Decapitates Lizard\nLizard Eats Paper\nPaper Disproves Spock\nand Spock Vaporizes Rock...HAVE FUN!!! :)");

  }

  createPlayers(){
    let playerGameMode = prompt("Which Game Mode? For Player vs AI press [1], For Player vs Player press [2]");
    let playerGameModeSelect = parseInt(playerGameMode);

    if(playerGameModeSelect === 1) {
      console.log("\nGame Mode: Player vs AI");

      this.playerOne = new Human();
      this.playerTwo = new Computer();

    }
    else if(playerGameModeSelect === 2) {
      console.log("\nGame Mode: Player vs Player");

      this.playerOne = new Human();
      this.playerTwo = new Human();
     
    }

  }
  startGameplay() {}
  
  
  
  runGame() {
   
    this.displayRules();
    this.createPlayers();
    this.startGameplay();

    //Start gameplay
    //Both players choose gesture
    //Compare gestures, determine winner
    //repeat

  


  
  }


}








class Player { 
  constructor() {
    this.name = "";
    this.score = 0; 
    this.choice = "";
    this.gestureObjects = ["rock", "paper", "scissors", "lizard", "spock"];//Will conflict with line 95
  }
  chooseGesture () {
    console.log("Overide This Method");
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
  chooseGesture() {
    let playerChoice = prompt ("Choose a Gesture!\n rock(1), paper(2), scissors(3), lizard(4), spock(5)");
    if(playerChoice < 1 || playerChoice > 5) {
      console.log("Please Choose A Valid Gesture Option" + playerChoice);
    }
    else{
      this.choice = this.gestureObjects[playerChoice];//conflicts with line 72, might need -1 because index of rock is[0] in gestureobjects array
    }
  }
  
  
}










let playerOne = new Player();
console.log(playerOne);



class Computer extends Player { 
  constructor() {
    super ();
    this.name = "AI";
    this.
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





