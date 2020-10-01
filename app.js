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

  if( playerOneMoveTaken.length === playerTwoMoveTaken.length ) {

    $('h3').replaceWith('<h3>Turn: <a href="https://reactjs.org/""><span id="span-react">React</span></h3>')

    playerOne = true;
    playerTwo = false;

    whoWon();

  }

  else if( playerOneMoveTaken.length > playerTwoMoveTaken.length ) {

    $('h3').replaceWith('<h3>Turn: <a href="https://angular.io/"><span id="span-angular">Angular</span></a></h3>')

    playerOne = false;
    playerTwo = true;

    whoWon();

  } else {

    $('h3').replaceWith('<h3>Turn: <a href="https://reactjs.org/""><span id="span-react">React</span></h3>')

    playerOne = true;
    playerTwo = false;

    whoWon();

  } if ( gameFinished ) {

    $('h3').text('Game Finished')

  }

}

// Total turns logic

let totalTurns = 0;

const gameDraw = function () {

  totalTurns = parseInt( totalTurns ) + 1

  if ( totalTurns == 9 ) {

    $('h3').replaceWith('<h1>Draw!</h1>')
    return;

  }
}


let player1Win = null;
let player2Win = null;
let gameFinished = false;



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

  for ( let keys in winCondition ) {

    if (winCondition[ keys ].every( answer => playerOneMoveTaken.includes( answer ))) {

      $('h3').replaceWith('<h1><a href="https://reactjs.org/""><span id="span-react">React wins!</span></h1>')

      player1Win = true;
      gameFinished = true;
      return;


    } else if ( winCondition[ keys ].every( answer => playerTwoMoveTaken.includes( answer ))) {

      $('h3').replaceWith('<h1><a href="https://angular.io/"><span id="span-angular">Angular wins!</span></a></h1>')

      player2Win = true;
      gameFinished = true;
      return;

    }

  }
}
