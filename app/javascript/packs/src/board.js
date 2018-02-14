const initialBoard = document.getElementById('navbar-new');
initialBoard.addEventListener("click", (e) => {
  e.preventDefault();
  alert('Game starts!');
  grid_0.innerText = '';
  grid_1.innerText = '';
  grid_2.innerText = '';
  grid_3.innerText = '';
  grid_4.innerText = '';
  grid_5.innerText = '';
  grid_6.innerText = '';
  grid_7.innerText = '';
  grid_8.innerText = '';
});

const grid_0 = document.getElementById('grid-0');
const grid_1 = document.getElementById('grid-1');
const grid_2 = document.getElementById('grid-2');
const grid_3 = document.getElementById('grid-3');
const grid_4 = document.getElementById('grid-4');
const grid_5 = document.getElementById('grid-5');
const grid_6 = document.getElementById('grid-6');
const grid_7 = document.getElementById('grid-7');
const grid_8 = document.getElementById('grid-8');

let currentPlayer = "X";

function ticTac(){
  if (this.innerText !== "X" || this.innerText !== "O") {
    this.innerText = currentPlayer;
    currentPlayer = currentPlayer == "X" ? "O" : "X";
  }
};

document.getElementById("grid-0").onclick = ticTac;
document.getElementById("grid-1").onclick = ticTac;
document.getElementById("grid-2").onclick = ticTac;
document.getElementById("grid-3").onclick = ticTac;
document.getElementById("grid-4").onclick = ticTac;
document.getElementById("grid-5").onclick = ticTac;
document.getElementById("grid-6").onclick = ticTac;
document.getElementById("grid-7").onclick = ticTac;
document.getElementById("grid-8").onclick = ticTac;

let allThree = function(firstBox, secondBox, thirdBox) {
  let firstBoxOwner = firstBox.innerText;
  let secondBoxOwner = secondBox.innerText;
  let thirdBoxOwner = thirdBox.innerText;

  if ((firstBoxOwner === secondBoxOwner) && (secondBoxOwner === thirdBoxOwner)){
    if (firstBoxOwner === "X"){
      alert('X wins!');
    } else if (firstBoxOwner === "O"){
      alert('O wins!');
    }
  }
  return null;
};

let diagonalWinner = function() {
  let leftDownDiag = allThree(grid_0, grid_4, grid_8);
  let rightUpDiag = allThree(grid_2, grid_4, grid_6);

  return leftDownDiag || rightUpDiag;
};

let columnWinner = function() {
  let leftCol = allThree(grid_0, grid_3, grid_6);
  let middleCol = allThree(grid_1, grid_4, grid_7);
  let rightCol = allThree(grid_2, grid_5, grid_8);

  return leftCol || (middleCol || rightCol);
};

let rowWinner = function() {
  let topRow = allThree(grid_0, grid_1, grid_2);
  let middleRow = allThree(grid_3, grid_4, grid_5);
  let bottomRow = allThree(grid_6, grid_7, grid_8);

  return topRow || (middleRow || bottomRow);
};

let getWinner = function() {
  return diagonalWinner() || (rowWinner() || columnWinner());
};

let winner = getWinner();
if (winner) {
  alert("Player " + winner + " won!");
};
