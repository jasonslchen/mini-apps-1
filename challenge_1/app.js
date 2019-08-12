let board = [['1A', '1B', '1C'], ['2A', '2B', '2C'], ['3A', '3B', '3C']];

//Reset Board
document.getElementById("reset").onclick = function() {
  board.forEach((row) => {
    row.forEach((position) => {
      document.getElementById(position).innerHTML = '';
    })
  })
}



//Toggle pieces

let player1Player2 = true;

(function (){
  board.forEach((row) => {
    row.forEach((position) => {
      document.getElementById(position).addEventListener('click', function(event) {
        if (event.target.value === '') {
          if (player1Player2) {
            document.getElementById(position).innerHTML = 'x';
          } else {
            document.getElementById(position).innerHTML = 'o';
          }
          player1Player2 = !player1Player2;
        }
      })
    })
  })
})();


