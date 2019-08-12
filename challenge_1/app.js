let board = [['1A', '1B', '1C'], ['2A', '2B', '2C'], ['3A', '3B', '3C']];
let playBoard = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];

//Reset Board
document.getElementById("reset").onclick = function() {
  board.forEach((row) => {
    row.forEach((position) => {
      document.getElementById(position).innerHTML = '';
    })
  })
  playBoard = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
  player1Player2 = true;
}



/* 
==========
Toggle Pieces
==========
*/


let player1Player2 = true;

(function (){
  board.forEach((row, rowInd) => {
    row.forEach((position, colInd) => {
      document.getElementById(position).addEventListener('click', function(event) {
        if (document.getElementById(position).innerHTML === '') {
          if (player1Player2) {
            document.getElementById(position).innerHTML = 'x';
            playBoard[rowInd][colInd] = 1;
          } else {
            document.getElementById(position).innerHTML = 'o';
            playBoard[rowInd][colInd] = 2;
          }
          player1Player2 = !player1Player2;
          horizontalWin();
        }
      })
    })
  })
})();

/* 
==========
Win Checking
==========
*/


//horizontal row win

const horizontalWin = function () {
  for (let i = 0; i < playBoard.length; i++) {
    let player1 = 0;
    let player2 = 0;
    playBoard[i].forEach((position) => {
      if (position === 1) {
        player1++;
      } else if (position === 2) {
        player2++;
      }
    })
    if (player1 === 3) {
      alert(`Player 1 has won horizontally at Row ${i + 1}`);
      return;
    } else if (player2 === 3) {
      alert(`Player 1 has won horizontally at Row ${i + 1}`);
      return;
    }
  }
}
