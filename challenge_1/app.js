const Board = [['1A', '1B', '1C'], ['2A', '2B', '2C'], ['3A', '3B', '3C']];
let playBoard = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
let gameFinish = false;

//Reset Board
document.getElementById("reset").onclick = function() {
  Board.forEach((row) => {
    row.forEach((position) => {
      document.getElementById(position).innerHTML = '-';
    })
  })
  playBoard = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
  player1Player2 = true;
  gameFinish = false;
}



/* 
==========
Toggle Pieces
==========
*/


let player1Player2 = true;

(function (){
  Board.forEach((row, rowInd) => {
    row.forEach((position, colInd) => {
      document.getElementById(position).addEventListener('click', function(event) {
        if (document.getElementById(position).innerHTML !== 'x' && document.getElementById(position).innerHTML !== 'o') {
          if (player1Player2) {
            document.getElementById(position).innerHTML = 'x';
            playBoard[rowInd][colInd] = 1;
          } else {
            document.getElementById(position).innerHTML = 'o';
            playBoard[rowInd][colInd] = 2;
          }
        }
        player1Player2 = !player1Player2;
        checkWin();
      })
    })
  })
})();

/* 
==========
Win Checking
==========
*/

const checkWin = () => {
  horizontalWin();
  verticalWin();
  topLefttoBotRightDiag();
  topRighttoBotLeftDiag();
  tie();
}

const winAnnouncment = (winMethod, player) => {
  alert(`Hurray Player ${player} won with a ${winMethod} win!`)
}

const checkWinner = (player1, player2, method) => {
  if (player1 === 3) {
    gameFinish = true;
    winAnnouncment(method, '1');
    return;
  } else if (player2 === 3) {
    gameFinish = true;
    winAnnouncment(method, '2');
    return;
  }
}

//horizontal row win

const horizontalWin = () => {
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
    
    checkWinner(player1, player2, 'Horizontal');
  }
}

//vertical column win

const verticalWin = () => {
  for (let row = 0; row < playBoard.length; row++) {
    let player1 = 0;
    let player2 = 0;
    for (var col = 0; col < playBoard[row].length; col++) {
      if (playBoard[col][row] === 1) {
        player1++;
      } else if (playBoard[col][row] === 2) {
        player2++;
      }
      
    }
    checkWinner(player1, player2, 'Vertical');
  }
}

//diagonal win

const topLefttoBotRightDiag = () => {
  let player1 = 0;
  let player2 = 0;

  for (let i = 0; i < playBoard.length; i++) {
    if (playBoard[i][i] === 1) {
      player1++;
    } else if (playBoard[i][i]) {
      player2++;
    }
  }

  checkWinner(player1, player2, 'Top Left to Bottom Right Diagonal');
}

const topRighttoBotLeftDiag = () => {
  let player1 = 0;
  let player2 = 0;
  let j = 2;

  for (let i = 0; i < playBoard.length; i++) {
    if (playBoard[i][j]=== 1) {
      player1++;
    } else if (playBoard[i][j]=== 2) {
      player2++
    }
    j--;
  }
  checkWinner(player1, player2, 'Top Right to Bottom Left Diagonal');
}


const tie = () => {
  if (!gameFinish) {
    let count = 0;
    playBoard.forEach((row) => {
      row.forEach((slot) => {
        if (slot === 1 || slot === 2) {
          count++;
        }
      })
    })
    if (count === 9) {
      alert('No one won sadface :(');
    }
  }
}



