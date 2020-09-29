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
    whoWon();
  }

  else if(playerOneMoveTaken.length > playerTwoMoveTaken.length) {
    console.log('PLAYER 2, YOUR TURN')
    playerOne = false;
    playerTwo = true;
    whoWon();
  } else {
    console.log('PLAYER 1, YOUR TURN')
    playerOne = true;
    playerTwo = false;
    whoWon();
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

// Win condition

const winCondition = {
  horizontal1: ['1', '2', '3'],
  horizontal2: ['4', '5', '6'],
  horizontal3: ['7', '8', '9'],
  vertical1: ['1', '4', '7'],
  vertical2: ['2', '5', '8'],
  vertical3: ['3', '6', '9'],
  diagonal1: ['1', '5', '9'],
  diagonal2: ['3', '5', '7']
}

const whoWon = function () {
  for ( let keys in winCondition) {
    if (winCondition[keys].every(answer => playerOneMoveTaken.includes(answer))) {

      console.log('PLAYER ONE WINS');

    } else if (winCondition[keys].every(answer => playerTwoMoveTaken.includes(answer))) {
      console.log('PLAYER TWO WINS')
    }
  }
}
