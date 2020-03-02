// function to add Xs and Os
let turn = 'X';
const replace = (loc, dot) => {
  if (document.getElementById(loc).innerHTML === '') {
    document.getElementById(loc).innerHTML = dot;
    if (turn === 'X') {
      turn = 'O'
    } else {
      turn = 'X'
    }
  }
}

// The grid
document.getElementById("C1R1").addEventListener("click", () => replace("C1R1", turn));
document.getElementById("C2R1").addEventListener("click", () => replace("C2R1", turn));
document.getElementById("C3R1").addEventListener("click", () => replace("C3R1", turn));

document.getElementById("C1R2").addEventListener("click", () => replace("C1R2", turn));
document.getElementById("C2R2").addEventListener("click", () => replace("C2R2", turn));
document.getElementById("C3R2").addEventListener("click", () => replace("C3R2", turn));

document.getElementById("C1R3").addEventListener("click", () => replace("C1R3", turn));
document.getElementById("C2R3").addEventListener("click", () => replace("C2R3", turn));
document.getElementById("C3R3").addEventListener("click", () => replace("C3R3", turn));

// reset button
document.getElementById("reset").onclick = () => { reset() };

// reset function
const reset = () => {
  console.log('RESET')
  let child = document.getElementById("grid-container").childNodes;
  for (let i = 0; i < child.length; i++) {
    child[i].innerHTML = '';
  }
}