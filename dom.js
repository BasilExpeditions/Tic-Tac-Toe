$(document).ready(function() {

    whosTurn();

    $('#button1').on('click', function () {

      checkTurns();

      if(playerOne === true) {
        playerOneMoveTaken.push(boardChoices.position1)
      } else {
        playerTwoMoveTaken.push(boardChoices.position1)
      }
      console.log(`Player Ones move: ${playerOneMoveTaken} `)
      console.log(`Player Twos move: ${playerTwoMoveTaken}`)
      whosTurn();
    })

    $('#button2').on('click', function () {

      checkTurns();

      if(playerOne === true) {
        playerOneMoveTaken.push(boardChoices.position2)
      } else {
        playerTwoMoveTaken.push(boardChoices.position2)
      }
      console.log(`Player Ones move: ${playerOneMoveTaken} `)
      console.log(`Player Twos move: ${playerTwoMoveTaken}`)
      whosTurn();
    })

    $('#button3').on('click', function () {

      checkTurns();

      if(playerOne === true) {
        playerOneMoveTaken.push(boardChoices.position3)
      } else {
        playerTwoMoveTaken.push(boardChoices.position3)
      }
      console.log(`Player Ones move: ${playerOneMoveTaken} `)
      console.log(`Player Twos move: ${playerTwoMoveTaken}`)
      whosTurn();
    })

    $('#button4').on('click', function () {

      checkTurns();

      if(playerOne === true) {
        playerOneMoveTaken.push(boardChoices.position4)
      } else {
        playerTwoMoveTaken.push(boardChoices.position4)
      }
      console.log(`Player Ones move: ${playerOneMoveTaken} `)
      console.log(`Player Twos move: ${playerTwoMoveTaken}`)
      whosTurn();
    })

    $('#button5').on('click', function () {

      checkTurns();

      if(playerOne === true) {
        playerOneMoveTaken.push(boardChoices.position5)
      } else {
        playerTwoMoveTaken.push(boardChoices.position5)
      }
      console.log(`Player Ones move: ${playerOneMoveTaken} `)
      console.log(`Player Twos move: ${playerTwoMoveTaken}`)
      whosTurn();
    })

    $('#button6').on('click', function () {

      checkTurns();

      if(playerOne === true) {
        playerOneMoveTaken.push(boardChoices.position6)
      } else {
        playerTwoMoveTaken.push(boardChoices.position6)
      }
      console.log(`Player Ones move: ${playerOneMoveTaken} `)
      console.log(`Player Twos move: ${playerTwoMoveTaken}`)
      whosTurn();
    })

    $('#button7').on('click', function () {

      checkTurns();

      if(playerOne === true) {
        playerOneMoveTaken.push(boardChoices.position7)
      } else {
        playerTwoMoveTaken.push(boardChoices.position7)
      }
      console.log(`Player Ones move: ${playerOneMoveTaken} `)
      console.log(`Player Twos move: ${playerTwoMoveTaken}`)
      whosTurn();
    })

    $('#button8').on('click', function () {

      checkTurns();

      if(playerOne === true) {
        playerOneMoveTaken.push(boardChoices.position8)
      } else {
        playerTwoMoveTaken.push(boardChoices.position8)
      }
      console.log(`Player Ones move: ${playerOneMoveTaken} `)
      console.log(`Player Twos move: ${playerTwoMoveTaken}`)
      whosTurn();
    })

    $('#button9').on('click', function () {

      checkTurns();

      if(playerOne === true) {
        playerOneMoveTaken.push(boardChoices.position9)
      } else {
        playerTwoMoveTaken.push(boardChoices.position9)
      }
      console.log(`Player Ones move: ${playerOneMoveTaken} `)
      console.log(`Player Twos move: ${playerTwoMoveTaken}`)
      whosTurn();
    })
})
