"use strict";

/* HELP MENU
CLASS (TEMPLATE FOR JAVASCRIPT OBJECTS) ****************************
-Named using 'PascalCasing' in JS
-Use the 'this.' keyword in constructor() method to declare PROPERTIES of instances of the class will have
 i.e. Every Cat 'HAS' a name, age, sound, and is or isn't fixed. These are the PROPERTIES of the cat Class
-Can pass values into constructor similiar to a function
-SYNTAX:

class Car {                         //Creates class named "Car"
  constructor(name, year) {         //class has 2 initial properties: 'name' and 'year'.
    this.name = name;
    this.year = year;
  }
}



METHODS (THE ACTIONS OF THE CLASS) *********************************
-Functions inside the class(also called Methods). They give functionality to the object
-Can have any number of methods in class
-SYNTAX:

class ClassName {
  constructor() { ... }
  method_1() { ... }
  method_2() { ... }
  method_3() { ... }
  }
}



USING A CLASS ***************************************************
- You can use the class to create objects
- The constructor method is called automatically when a 'new' object is created.
-SYNTAX:

class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}
let myCar1 = new Car("Ford", 2014);
let myCar2 = new Car("Audi", 2019);






*/


class Game { //blueprint or 'template' of an object
  constructor() { //'special' type of function, and is called every time a new instance of class is created
    this.playerOne = new Player(); //'playerOne' is an object that is an instance of the 'Player' class
    this.playerTwo = new Player(); //'playerTwo' is an object that is an instance of the 'Player' class
    
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
  startGameplay() {
  let playerOneScore = [];
  let playerOneScore = parseInt(playerOneScore); //Don't know if I need this but ¯\_(ツ)_/¯
  let playerTwoScore = [];
  let playerTwoScore = parseInt(playerTwoScore);

  while(playerOneScore = ) {
    console.log("The counter is at " + counter);
    counter ++;
  }
  //While stuff for EACH TURN: player 1 choose gesture player 2 etc.: NEXT WILL BE COMPARE TO FIND WINNER
  //methods x3 : player 1 choose G, Player 1 choose G, compare G's

  }
  
  
  
  runGame() {
   
    this.displayRules();
    this.createPlayers();
  
    this.startGameplay();

    //Start gameplay
    //Both players choose gesture
    //Compare gestures, determine winner
    //repeat call run game at bttm

  


  
  }


}




let player = {
  name: "steve",
  score: 0,
  choice: "",
  functin: ()=>{}
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
    let playerChoice = prompt ("Choose a Gesture!\n rock(0), paper(1), scissors(2), lizard(3), spock(4)");
    playerChoice = parseInt(playerChoice);
    if(playerChoice < 1 || playerChoice > 5) {
      console.log("Please Choose A Valid Gesture Option" + playerChoice);
    }
    else{
      this.choice = this.gestureObjects[playerChoice];//conflicts with line 72, might need -1 because index of rock is[0] in gestureobjects array
    }
  }
  
  
}





class Computer extends Player { 
  constructor() {
    super();
    this.name = "AI";
    
  }
  randomNumber() {
    let randomNumber = Math.floor(Math.random() * 5);
    return randomNumber;
  }
 chooseGesture() {
   let computerGestureChoice = this.gestures[this.randomNumber()];
   this.choice = computerGestureChoice;
 }

}

let game = new Game();
game.runGame();

let playerOne = new Player();
console.log(playerOne);





// class Gesture {
//   constructor() {
//     this.name = 
//     this.beats = 
//     this.includes = 

//   }

// }
// if(this.playerOne.choice.beats.includes(this.playerTwo.choice.name)) //returns true
// //then...
