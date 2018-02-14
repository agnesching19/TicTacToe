const grid_0 = document.getElementById('grid-0');
const grid_1 = document.getElementById('grid-1');
const grid_2 = document.getElementById('grid-2');
const grid_3 = document.getElementById('grid-3');
const grid_4 = document.getElementById('grid-4');
const grid_5 = document.getElementById('grid-5');
const grid_6 = document.getElementById('grid-6');
const grid_7 = document.getElementById('grid-7');
const grid_8 = document.getElementById('grid-8');
const initialBoard = document.getElementById('navbar-new');

const allThree = function(firstBox, secondBox, thirdBox) {
  let firstBoxOwner = firstBox.innerText;
  let secondBoxOwner = secondBox.innerText;
  let thirdBoxOwner = thirdBox.innerText;

  if ((firstBoxOwner === secondBoxOwner) && (secondBoxOwner === thirdBoxOwner)){
    if (firstBoxOwner === "X"){
      return 'X';
    } else if (firstBoxOwner === "O"){
      return 'O';
    }
  }
  return null;
};

const diagonalWinner = function() {
  let leftDownDiag = allThree(grid_0, grid_4, grid_8);
  let rightUpDiag = allThree(grid_2, grid_4, grid_6);

  return leftDownDiag || rightUpDiag;
};

const columnWinner = function() {
  let leftCol = allThree(grid_0, grid_3, grid_6);
  let middleCol = allThree(grid_1, grid_4, grid_7);
  let rightCol = allThree(grid_2, grid_5, grid_8);

  return leftCol || (middleCol || rightCol);
};

const rowWinner = function() {
  let topRow = allThree(grid_0, grid_1, grid_2);
  let middleRow = allThree(grid_3, grid_4, grid_5);
  let bottomRow = allThree(grid_6, grid_7, grid_8);

  return topRow || (middleRow || bottomRow);
};

const getWinner = function() {
  return diagonalWinner() || (rowWinner() || columnWinner());
};

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

  let currentPlayer = "X";
  let moves = 0;

  function ticTac() {
    if (this.innerText !== "X" || this.innerText !== "O") {
      this.innerText = currentPlayer;
      currentPlayer = currentPlayer == "X" ? "O" : "X";
      moves++;
    }
    let winner = getWinner();

    if (winner) {
      alert("Player " + winner + " win!");

    } else if (moves > 9){
      alert("Neither player won!");
    }
    console.log(moves);
  };

  document.getElementById("grid-0").addEventListener('click', ticTac);
  document.getElementById("grid-1").addEventListener('click', ticTac);
  document.getElementById("grid-2").addEventListener('click', ticTac);
  document.getElementById("grid-3").addEventListener('click', ticTac);
  document.getElementById("grid-4").addEventListener('click', ticTac);
  document.getElementById("grid-5").addEventListener('click', ticTac);
  document.getElementById("grid-6").addEventListener('click', ticTac);
  document.getElementById("grid-7").addEventListener('click', ticTac);
  document.getElementById("grid-8").addEventListener('click', ticTac);

  let winner = getWinner();

  if (winner) {
    alert("Player " + winner + " won!");
  } else if (moves < 9) {
    ticTac();
  } else {
    alert("Neither player won!");
  }
});

