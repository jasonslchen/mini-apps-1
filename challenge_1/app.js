let board = ['1A', '1B', '1C', '2A', '2B', '2C', '3A', '3B', '3C'];

//Reset Board
document.getElementById("reset").onclick = function() {
  board.forEach((position) => {
    document.getElementById(position).innerHTML = '';
  })
}
