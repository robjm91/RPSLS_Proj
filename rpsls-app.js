"use strict";
//Everything Should be encapsulated in a class 

class Game {
  constructor() {
    this.playerOne = new Player(); 
    this.playerTwo = new Player();
  }

}


class Player { 
  constructor() {
    this.score = 0; 
    this.name = "";

    this.choice = "";
    this.gestureObjects = [new Rock, new Paper, new Scissors, new Lizard, new Spock];
    
  }
  chooseGesture () {
    console.log("Overide This Method");
  }
}

class Human extends Player { 
  constructor() {
    super();
  }
 chooseGesture () {
   let playerChoice = prompt ("Choose a Gesture!\nrock(1), paper(2), scissors(3), lizard(4), spock(5)");
   
 }
}
class Computer extends Player { 
  constructor() {
    super ();
  }
 chooseGesture() {
 }
}




