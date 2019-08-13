let size = Number(window.prompt('Choose size of board'));
let player1Player = window.prompt('Name of Player 1');
let player2Player = window.prompt('Name of Player 2');
let gameFinish = false;
let player1Player2 = true;
let winner;
let player1Score = 0;
let player2Score = 0;


/*
==========
Board Builder
==========
*/

function makeBoard(big) {
  let playBoard = [];
  for (let row = 0; row < big; row++) {
    playBoard[row] = [];
    for (let col = 0; col < big; col++) {
      playBoard[row].push(0);
    }
  }
  return playBoard;
}

let playBoard = makeBoard(size);


function makeDOMBoard(big) {
  let dOMBoard = [];
  let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  for (let row = 0; row < big; row++) {
    dOMBoard[row] = [];
    for (let c = 0; c < big; c++) {
      let id = (row + 1) + chars.charAt(c);
      dOMBoard[row].push(id);
    }
  }
  return dOMBoard;
}

var board = makeDOMBoard(size);

(function buildDOMBoard() {
  let table = document.createElement("table");
  for (let row = 0; row < board.length; row++) {
    let tableRow = document.createElement("tr");
    let thatRow = board[row];

    for (let col = 0; col < thatRow.length; col++) {
      let slot = document.createElement("td");
      let text = document.createTextNode("-");
      slot.id = board[row][col];
      slot.appendChild(text);
      tableRow.appendChild(slot);
    }
    table.appendChild(tableRow);
  }
  document.getElementById("table").appendChild(table);
})();

/*
==========
Build Scoreboard
==========
*/

(function () {
  let table = document.createElement("table");
  table.id = "scoreboard";

  let row1 = document.createElement("tr");
  let player1head = document.createElement("th")
  let text = document.createTextNode(`${player1Player} Score`);
  player1head.appendChild(text);
  
  let player2head = document.createElement("th")
  text = document.createTextNode(`${player2Player} Score`);
  player2head.appendChild(text);

  row1.appendChild(player1head);
  row1.appendChild(player2head);

  table.appendChild(row1);

  let scoreRow = document.createElement("tr")

  let play1 = document.createElement("td");
  let play2 = document.createElement("td");
  
  play1.id = "player1";
  play2.id = "player2";

  
  let intial = document.createTextNode(0);
  let intial2 = document.createTextNode(0);
  play1.appendChild(intial);
  play2.appendChild(intial2);
  
  scoreRow.appendChild(play1);
  scoreRow.appendChild(play2);
  
  table.appendChild(scoreRow);

  document.getElementById("scoreboardPlace").appendChild(table);

})();



/*
==========
Reset Board
==========
*/

document.getElementById("reset").addEventListener('click', () => {
  winnerChoice();
  resetBoard();
})  

function winnerChoice() {
  if (gameFinish) {
    player1Player2 = winner;
  }
}

function resetBoard() {
  board.forEach((row) => {
    row.forEach((position) => {
      document.getElementById(position).innerHTML = '-';
    })
  })
  playBoard = makeBoard(size);
  gameFinish = false;
}



/* 
==========
Single Event Listener
==========
*/

document.addEventListener('click', (event) => {
  let id = event.target.id;
  
  if (id !== 'reset') {
    let row;
    let column;
    
    for (let i = 0; i < board.length; i++) {
      if (board[i].indexOf(id) !== -1) {
        row = i;
        column = board[i].indexOf(id);
      }
    }
  
    if (document.getElementById(id).innerHTML !== `${player1Player}<br>X` && document.getElementById(id).innerHTML !== `${player2Player}<br>O`) {
      if (player1Player2) {
        document.getElementById(id).innerHTML =  `${player1Player}<br>X`;
        playBoard[row][column] = 1;
      } else {
        document.getElementById(id).innerHTML = `${player2Player}<br>O`;
        playBoard[row][column] = 2;
      }
    }
    player1Player2 = !player1Player2;
    checkWin();
  }
})

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
  if (player1 === size) {
    gameFinish = true;
    winner = true;
    player1Score++;
    document.getElementById("player1").innerHTML = player1Score;
    winAnnouncment(method, `${player1Player}`);
    return;
  } else if (player2 === size) {
    gameFinish = true;
    winner = false;
    player2Score++;
    document.getElementById("player2").innerHTML = player2Score;
    winAnnouncment(method, `${player2Player}`);
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
  let j = playBoard.length - 1;

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
    if (count === (size*size)) {
      alert('No one won sadface :(');
    }
  }
}



