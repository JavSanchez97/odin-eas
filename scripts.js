const grid = document.querySelector('.grid');
let gridValue = document.querySelector('.grid-size');
let gridSize = document.querySelector('input');
const resetBtn = document.querySelector('.reset');
const applyGridSize = document.querySelector('.apply');
let squareSize = 16;

createGrid(squareSize);

//this will make the divs square
function createDiv(size){
  const div=document.createElement('div');
  div.classList.add('box');
  div.style.width = `${size}px`;
  div.style.height = `${size}px`;
  return div;
}
//and this will make the actual grid and append to the HTML grid class
function createGrid(gridSize){
  for (let i = 0;i < gridSize; i++){
    for(let j = 0; j < gridSize; j++){
      grid.appendChild(createDiv(grid.clientWidth / gridSize));
    }
  }
}

function reset(){
  while(grid.firstChild){
    grid.removeChild(grid.lastChild);
  }
  createGrid(squareSize);
}
  
grid.addEventListener('mouseover', function(e){
  //only makes the divs that are boxes active
  if (e.target.matches('.box')){
    e.target.classList.add('active');
  }
});

//this will change the size of the grid
gridSize.addEventListener('input', function(e){
  squareSize = e.target.value;
  gridValue.textContent = `${squareSize}x${squareSize}`;
});

applyGridSize.addEventListener('click', function(){
  reset();
})

resetBtn.addEventListener('click', reset);