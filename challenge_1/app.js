let table = [['','',''],
             ['','',''],
             ['','','']];

// function to add Xs and Os
let turn = 'X';
const makeMove = (loc, dot) => {
  if (document.getElementById(loc).innerHTML === '') {
    document.getElementById(loc).innerHTML = dot;
    let position = loc.split('')
    let row = Number(position[1]) - 1;
    let col = Number(position[3]) - 1;
    table[row][col] = turn;
    if (turn === 'X') {
      turn = 'O'
    } else {
      turn = 'X'
    }
  }
  let winner = checkForWin();

}

const checkForWin = () => {
  // check for horizontal win
  for (let r = 0; r < table.length; r++) {
    if (table[r][0] !== '' && table[r][0] === table[r][1] && table[r][1] === table[r][2]) {
      window.alert(`${table[r][0]} is the Winner!`);
    }
  }

  // check for verticle win
  for (let c = 0; c < table[0].length; c++) {
    if (table[0][c] !== '' && table[0][c] === table[1][c] && table[1][c] === table[2][c]) {
      window.alert(`${table[0][c]} is the Winner!`);
    }
  }
  // check for cross win
    // left to right
  if (table[0][0] !== '' && table[0][0] === table[1][1] && table[1][1] === table[2][2]) {
    window.alert(`${table[0][0]} is the Winner!`);
  }
    // right to left
  if (table[0][2] !== '' && table[0][2] === table[1][1] && table[1][1] === table[2][0]) {
    window.alert(`${table[0][2]} is the Winner!`);
  }


}

// The grid
document.getElementById("C1R1").addEventListener("click", () => makeMove("C1R1", turn));
document.getElementById("C2R1").addEventListener("click", () => makeMove("C2R1", turn));
document.getElementById("C3R1").addEventListener("click", () => makeMove("C3R1", turn));

document.getElementById("C1R2").addEventListener("click", () => makeMove("C1R2", turn));
document.getElementById("C2R2").addEventListener("click", () => makeMove("C2R2", turn));
document.getElementById("C3R2").addEventListener("click", () => makeMove("C3R2", turn));

document.getElementById("C1R3").addEventListener("click", () => makeMove("C1R3", turn));
document.getElementById("C2R3").addEventListener("click", () => makeMove("C2R3", turn));
document.getElementById("C3R3").addEventListener("click", () => makeMove("C3R3", turn));

// reset button
document.getElementById("reset").onclick = () => { reset() };

// reset function
const reset = () => {
  console.log('RESET')
  let child = document.getElementById("grid-container").childNodes;
  for (let i = 0; i < child.length; i++) {
    child[i].innerHTML = '';
  }
  for (let i = 0; i < table.length; i++) {
    for (let j = 0; j < table[i].length; j++) {
      table[i][j] = '';
    }
  }
}
