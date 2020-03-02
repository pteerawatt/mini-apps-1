console.log('app.js is connected to index.html');
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

console.log(document.getElementById("C1R1").childNodes[0])
document.getElementById("C1R1").addEventListener("click", () => replace("C1R1", turn));
document.getElementById("C2R1").addEventListener("click", () => replace("C2R1", turn));
document.getElementById("C3R1").addEventListener("click", () => replace("C3R1", turn));

document.getElementById("C1R2").addEventListener("click", () => replace("C1R2", turn));
document.getElementById("C2R2").addEventListener("click", () => replace("C2R2", turn));
document.getElementById("C3R2").addEventListener("click", () => replace("C3R2", turn));

document.getElementById("C1R3").addEventListener("click", () => replace("C1R3", turn));
document.getElementById("C2R3").addEventListener("click", () => replace("C2R3", turn));
document.getElementById("C3R3").addEventListener("click", () => replace("C3R3", turn));

