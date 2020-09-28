$(document).ready(function() {
    console.log( "ready!" );

    $('#button1').on('click', function () {
      console.log('button 1 clicked')
      playerOneMoveTaken.push(boardPosition.position1)
    })
    $('#button2').on('click', function () {
      console.log('button 2 clicked')
      playerOneMoveTaken.push(boardPosition.position2)
    })
    $('#button3').on('click', function () {
      console.log('button 3 clicked')
      playerOneMoveTaken.push(boardPosition.position3)
    })
    $('#button4').on('click', function () {
      console.log('button 4 clicked')
      playerOneMoveTaken.push(boardPosition.position4)
    })
    $('#button5').on('click', function () {
      console.log('button 5 clicked')
      playerOneMoveTaken.push(boardPosition.position5)
    })
    $('#button6').on('click', function () {
      console.log('button 6 clicked')
      playerOneMoveTaken.push(boardPosition.position6)
    })
    $('#button7').on('click', function () {
      console.log('button 7 clicked')
      playerOneMoveTaken.push(boardPosition.position7)
    })
    $('#button8').on('click', function () {
      console.log('button 8 clicked')
      playerOneMoveTaken.push(boardPosition.position8)
    })
    $('#button9').on('click', function () {
      console.log('button 9 clicked')
      playerOneMoveTaken.push(boardPosition.position9)
    })
})
