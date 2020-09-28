//Tic Tac Toe

// Register the board of 9 positions

const boardChoices = {
  position1: '1',
  position2: '2',
  position3: '3',
  position4: '4',
  position5: '5',
  position6: '6',
  position7: '7',
  position8: '8',
  position9: '9',
};



// Player 1 turn

const playerOneMoveTaken = [];

let playerOne = true;


// Player 2 turn

const playerTwoMoveTaken = [];

let playerTwo = false;

// Turn logic

const whosTurn = function () {

  if(playerOneMoveTaken.length === playerTwoMoveTaken.length) {
    console.log('PLAYER 1, YOUR TURN')
    playerOne = true;
    playerTwo = false;
  }

  else if(playerOneMoveTaken.length > playerTwoMoveTaken.length) {
    console.log('PLAYER 2, YOUR TURN')
    playerOne = false;
    playerTwo = true;
  } else {
    console.log('PLAYER 1, YOUR TURN')
    playerOne = true;
    playerTwo = false;
  }

}

// Total turns logic

let totalTurns = 0;

const checkTurns = function () {
  totalTurns = parseInt(totalTurns) + 1
  console.log('TOTAL TURNS : ' + totalTurns)
  if (totalTurns >= 9) {
    console.log('GAME OVER')
  }
}


// Win condition = if a player has 3 in a row
