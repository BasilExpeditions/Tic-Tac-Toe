$(document).ready(function() {

    whosTurn();

    const deniedAccess = 'This position has already been used'

    $('#button1').on('click', function () {


      if( playerOneMoveTaken.includes('1')) {

        return console.log( deniedAccess )

      }

      if(playerTwoMoveTaken.includes('1')) {

        return console.log( deniedAccess )

      } else {

        if( playerOne === true ) {

          if( gameFinished === false ) {

          playerOneMoveTaken.push(boardChoices.position1)
          $('#button1').append('<i class="fab fa-react"></i>')

          }

        } else {

          if(gameFinished === false) {

          playerTwoMoveTaken.push(boardChoices.position1)
          $('#button1').append('<img src="css/angular-icon-1.svg" alt="Angular icon">')

          }

        }

      }

      whosTurn();

      gameDraw();

    })


    $('#button2').on('click', function () {

      if( playerOneMoveTaken.includes('2')) {
        return console.log( deniedAccess );
      }

      if( playerTwoMoveTaken.includes('2')) {
        return console.log( deniedAccess );

      } else {

        if( playerOne === true ) {

          if( gameFinished === false ) {

            playerOneMoveTaken.push(boardChoices.position2)
            $('#button2').append('<i class="fab fa-react"></i>')

          }

        } else {

          if(gameFinished === false) {

            playerTwoMoveTaken.push(boardChoices.position2)
            $('#button2').append('<img src="css/angular-icon-1.svg" alt="Angular icon">')

          }

        }

      }

      whosTurn();

      gameDraw();

    })


    $('#button3').on('click', function () {


      if( playerOneMoveTaken.includes('3')) {

        return console.log( deniedAccess );

      }

      if(playerTwoMoveTaken.includes('3')) {

        return console.log( deniedAccess );

      } else {

        if( playerOne === true ) {

          if( gameFinished === false ) {

            playerOneMoveTaken.push(boardChoices.position3)
            $('#button3').append('<i class="fab fa-react"></i>')

          }


        } else {

          if( gameFinished === false ) {

            playerTwoMoveTaken.push(boardChoices.position3)
            $('#button3').append('<img src="css/angular-icon-1.svg" alt="Angular icon">')

          }

        }

      }

      whosTurn();

      gameDraw();

    })



    $('#button4').on('click', function () {


      if( playerOneMoveTaken.includes('4')) {

        return console.log( deniedAccess );

      }

      if( playerTwoMoveTaken.includes('4')) {

        return console.log( deniedAccess );

      } else {

        if( playerOne === true ) {

          if( gameFinished === false ) {

            playerOneMoveTaken.push(boardChoices.position4)
            $('#button4').append('<i class="fab fa-react"></i>')

          }


        } else {

          if( gameFinished === false ) {

            playerTwoMoveTaken.push(boardChoices.position4)
            $('#button4').append('<img src="css/angular-icon-1.svg" alt="Angular icon">')

          }

        }

      }

      whosTurn();

      gameDraw();

    })



    $('#button5').on('click', function () {


      if( playerOneMoveTaken.includes('5')) {

        return console.log( deniedAccess );

      }

      if( playerTwoMoveTaken.includes('5')) {

        return console.log( deniedAccess );

      } else {

        if( playerOne === true ) {

          if( gameFinished === false ) {

            playerOneMoveTaken.push(boardChoices.position5)
            $('#button5').append('<i class="fab fa-react"></i>')

          }

        } else {

          if( gameFinished === false ) {

            playerTwoMoveTaken.push(boardChoices.position5)
            $('#button5').append('<img src="css/angular-icon-1.svg" alt="Angular icon">')

          }

        }

      }

      whosTurn();

      gameDraw();

    })



    $('#button6').on('click', function () {


      if( playerOneMoveTaken.includes('6')) {

        return console.log( deniedAccess );

      }

      if(playerTwoMoveTaken.includes('6')) {

        return console.log( deniedAccess );

      } else {

        if( playerOne === true ) {

          if( gameFinished === false ) {

            playerOneMoveTaken.push(boardChoices.position6)
            $('#button6').append('<i class="fab fa-react"></i>')

          }

        } else {

          if( gameFinished === false ) {

            playerTwoMoveTaken.push(boardChoices.position6)
            $('#button6').append('<img src="css/angular-icon-1.svg" alt="Angular icon">')

          }

        }

      }

      whosTurn();
      gameDraw();

    })



    $('#button7').on('click', function () {


      if( playerOneMoveTaken.includes('7')) {

        return console.log( deniedAccess );

      }

      if(playerTwoMoveTaken.includes('7')) {

        return console.log( deniedAccess );

      } else {

        if( playerOne === true ) {

          if( gameFinished === false ) {

            playerOneMoveTaken.push(boardChoices.position7)
            $('#button7').append('<i class="fab fa-react"></i>')

          }



        } else {

          if( gameFinished === false ) {
            playerTwoMoveTaken.push(boardChoices.position7)
            $('#button7').append('<img src="css/angular-icon-1.svg" alt="Angular icon">')

          }

        }

      }

      whosTurn();

      gameDraw();

    })



    $('#button8').on('click', function () {


      if( playerOneMoveTaken.includes('8')) {
        return console.log( deniedAccess );
      }

      if(playerTwoMoveTaken.includes('8')) {
        return console.log( deniedAccess );

      } else {

        if( playerOne === true ) {

          if( gameFinished === false ) {

            playerOneMoveTaken.push(boardChoices.position8)
            $('#button8').append('<i class="fab fa-react"></i>')

          }

        } else {

          if( gameFinished === false ) {

            playerTwoMoveTaken.push(boardChoices.position8)
            $('#button8').append('<img src="css/angular-icon-1.svg" alt="Angular icon">')

          }

        }

      }

      whosTurn();

      gameDraw();

    })



    $('#button9').on('click', function () {


      if( playerOneMoveTaken.includes('9')) {

        return console.log( deniedAccess );

      }

      if(playerTwoMoveTaken.includes('9')) {

        return console.log( deniedAccess );

      } else {

        if( playerOne === true ) {

          if( gameFinished === false ) {

            playerOneMoveTaken.push(boardChoices.position9)
            $('#button9').append('<i class="fab fa-react"></i>')

          }

        } else {

          if( gameFinished === false ) {

            playerTwoMoveTaken.push(boardChoices.position9)
            $('#button9').append('<img id="angularInBox" src="css/angular-icon-1.svg" alt="Angular icon">')

          }

        }

      }

      whosTurn();

      gameDraw();

    })


    // $('#restartButton').on('click', function () {
    //   location.reload()
    // })

    let playAgain = function () {
          playerOneMoveTaken = []
          playerTwoMoveTaken = []
          totalTurns = 0

            gameFinished = false;
            player1Win = null;
            player2Win = null;
            playerOne = true;

            $('.square').empty();

            $('#bottom-result').replaceWith('<h3>Turn: <a href="https://reactjs.org/" target="_blank"><span id="span-react">React</span></h3>')

            $(".board-container").removeClass("disable-click");

          };

        $('#restartButton').on("click", playAgain)


})
