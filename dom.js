$(document).ready(function() {

    whosTurn();

    const deniedAccess = 'This position has already been used'

    $('#button1').on('click', function () {


      if(playerOneMoveTaken.includes('1')) {

        return console.log(deniedAccess)

      }

      if(playerTwoMoveTaken.includes('1')) {

        return console.log(deniedAccess)

      } else {

        if(playerOne === true) {
          playerOneMoveTaken.push(boardChoices.position1)
          $('#button1').text('O')
          checkTurns();


        } else {
          playerTwoMoveTaken.push(boardChoices.position1)
          $('#button1').text('X')
          checkTurns();


        }

      }

      console.log(`Player Ones move: ${playerOneMoveTaken} `)
      console.log(`Player Twos move: ${playerTwoMoveTaken}`)

      whosTurn();

    })



    $('#button2').on('click', function () {

      if(playerOneMoveTaken.includes('2')) {
        return console.log(deniedAccess);
      }

      if(playerTwoMoveTaken.includes('2')) {
        return console.log(deniedAccess);

      } else {

        if(playerOne === true) {

          playerOneMoveTaken.push(boardChoices.position2)
          $('#button2').text('O')
          checkTurns();


        } else {

          playerTwoMoveTaken.push(boardChoices.position2)
          $('#button2').text('X')
          checkTurns();


        }

      }

      console.log(`Player Ones move: ${playerOneMoveTaken} `)
      console.log(`Player Twos move: ${playerTwoMoveTaken}`)

      whosTurn();

    })



    $('#button3').on('click', function () {


      if(playerOneMoveTaken.includes('3')) {
        return console.log(deniedAccess);
      }

      if(playerTwoMoveTaken.includes('3')) {
        return console.log(deniedAccess);

      } else {

        if(playerOne === true) {

          playerOneMoveTaken.push(boardChoices.position3)
          $('#button3').text('O')
          checkTurns();


        } else {

          playerTwoMoveTaken.push(boardChoices.position3)
          $('#button3').text('X')
          checkTurns();


        }

      }

      console.log(`Player Ones move: ${playerOneMoveTaken} `)
      console.log(`Player Twos move: ${playerTwoMoveTaken}`)

      whosTurn();

    })



    $('#button4').on('click', function () {


      if(playerOneMoveTaken.includes('4')) {
        return console.log(deniedAccess);
      }

      if(playerTwoMoveTaken.includes('4')) {
        return console.log(deniedAccess);

      } else {

        if(playerOne === true) {

          playerOneMoveTaken.push(boardChoices.position4)
          $('#button4').text('O')
          checkTurns();


        } else {

          playerTwoMoveTaken.push(boardChoices.position4)
          $('#button4').text('X')
          checkTurns();


        }

      }

      console.log(`Player Ones move: ${playerOneMoveTaken} `)
      console.log(`Player Twos move: ${playerTwoMoveTaken}`)

      whosTurn();
    })



    $('#button5').on('click', function () {


      if(playerOneMoveTaken.includes('5')) {
        return console.log(deniedAccess);
      }

      if(playerTwoMoveTaken.includes('5')) {
        return console.log(deniedAccess);

      } else {

        if(playerOne === true) {

          playerOneMoveTaken.push(boardChoices.position5)
          $('#button5').text('O')
          checkTurns();


        } else {

          playerTwoMoveTaken.push(boardChoices.position5)
          $('#button5').text('X')
          checkTurns();


        }

      }

      console.log(`Player Ones move: ${playerOneMoveTaken} `)
      console.log(`Player Twos move: ${playerTwoMoveTaken}`)

      whosTurn();

    })



    $('#button6').on('click', function () {


      if(playerOneMoveTaken.includes('6')) {
        return console.log(deniedAccess);
      }

      if(playerTwoMoveTaken.includes('6')) {
        return console.log(deniedAccess);

      } else {

        if(playerOne === true) {

          playerOneMoveTaken.push(boardChoices.position6)
          $('#button6').text('O')
          checkTurns();


        } else {

          playerTwoMoveTaken.push(boardChoices.position6)
          $('#button6').text('X')
          checkTurns();


        }

      }

      console.log(`Player Ones move: ${playerOneMoveTaken} `)
      console.log(`Player Twos move: ${playerTwoMoveTaken}`)

      whosTurn();

    })



    $('#button7').on('click', function () {


      if(playerOneMoveTaken.includes('7')) {
        return console.log(deniedAccess);
      }

      if(playerTwoMoveTaken.includes('7')) {
        return console.log(deniedAccess);

      } else {

        if(playerOne === true) {

          playerOneMoveTaken.push(boardChoices.position7)
          $('#button7').text('O')
          checkTurns();


        } else {

          playerTwoMoveTaken.push(boardChoices.position7)
          $('#button7').text('X')
          checkTurns();


        }

      }

      console.log(`Player Ones move: ${playerOneMoveTaken} `)
      console.log(`Player Twos move: ${playerTwoMoveTaken}`)

      whosTurn();

    })



    $('#button8').on('click', function () {


      if(playerOneMoveTaken.includes('8')) {
        return console.log(deniedAccess);
      }

      if(playerTwoMoveTaken.includes('8')) {
        return console.log(deniedAccess);

      } else {

        if(playerOne === true) {

          playerOneMoveTaken.push(boardChoices.position8)
          $('#button8').text('O')
          checkTurns();


        } else {

          playerTwoMoveTaken.push(boardChoices.position8)
          $('#button8').text('X')
          checkTurns();


        }

      }

      console.log(`Player Ones move: ${playerOneMoveTaken} `)
      console.log(`Player Twos move: ${playerTwoMoveTaken}`)

      whosTurn();

    })



    $('#button9').on('click', function () {


      if(playerOneMoveTaken.includes('9')) {
        return console.log(deniedAccess);
      }

      if(playerTwoMoveTaken.includes('9')) {
        return console.log(deniedAccess);

      } else {

        if(playerOne === true) {

          playerOneMoveTaken.push(boardChoices.position9)
          $('#button9').text('O')
          checkTurns();


        } else {

          playerTwoMoveTaken.push(boardChoices.position9)
          $('#button9').text('X')
          checkTurns();


        }

      }

      console.log(`Player Ones move: ${playerOneMoveTaken} `)
      console.log(`Player Twos move: ${playerTwoMoveTaken}`)

      whosTurn();

    })
})
