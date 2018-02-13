const initialBoard = document.getElementById('navbar-new');
initialBoard.addEventListener("click", (e) => {
  e.preventDefault();
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
grid_0.addEventListener("click", (e) => {
  e.preventDefault();
  grid_0.innerText = "X";
});

const grid_1 = document.getElementById('grid-1');
grid_1.addEventListener("click", (e) => {
  e.preventDefault();
  grid_1.innerText = 'X';
});

const grid_2 = document.getElementById('grid-2');
grid_2.addEventListener("click", (e) => {
  e.preventDefault();
  grid_2.innerText = 'X';
});

const grid_3 = document.getElementById('grid-3');
grid_3.addEventListener("click", (e) => {
  e.preventDefault();
  grid_3.innerText = 'X';
});

const grid_4 = document.getElementById('grid-4');
grid_4.addEventListener("click", (e) => {
  e.preventDefault();
  grid_4.innerText = 'X';
});

const grid_5 = document.getElementById('grid-5');
grid_5.addEventListener("click", (e) => {
  e.preventDefault();
  grid_5.innerText = 'X';
});

const grid_6 = document.getElementById('grid-6');
grid_6.addEventListener("click", (e) => {
  e.preventDefault();
  grid_6.innerText = 'X';
});

const grid_7 = document.getElementById('grid-7');
grid_7.addEventListener("click", (e) => {
  e.preventDefault();
  grid_7.innerText = 'X';
});

const grid_8 = document.getElementById('grid-8');
grid_8.addEventListener("click", (e) => {
  e.preventDefault();
  grid_8.innerText = 'X';
});
