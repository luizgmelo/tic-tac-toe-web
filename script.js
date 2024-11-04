const grid = document.querySelector('.grid');
const board = Array(9).fill('O');

for (let i = 0; i < 9; i++) {
  const gridItem = document.createElement('div');
  
  gridItem.classList.add('grid-item');
  gridItem.textContent = board[i];

  grid.appendChild(gridItem);
}
