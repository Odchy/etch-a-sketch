const DEFAULT_GRID_SIZE = 16;

const grid = document.querySelector("#grid");
const resetBtn = document.querySelector("#resetBtn");
const sizeValue = document.querySelector("#sizeValue")
const sizeSlider = document.querySelector("#sizeSlider")
const squareColor = "#1B5299";

function drawGrid(size) {
    const squareSize = (grid.clientWidth / size);

    for (let index = 0; index < size*size; index++) {
        grid.appendChild(drawSquare(squareSize));
    }
}

function drawSquare(squareSize) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.width = squareSize + "px";
    square.style.height = squareSize + "px";
    square.addEventListener('mouseover', colorSquare);
    
    return square;
}

function colorSquare(){
    this.style.backgroundColor = squareColor;
}

function getRandomColor(){
    return "#" + Math.floor(Math.random()*16777215).toString(16);
}

function reset() {
    sizeValue.innerHTML = `${DEFAULT_GRID_SIZE} x ${DEFAULT_GRID_SIZE}`;
    emptyGrid();
    drawGrid(DEFAULT_GRID_SIZE);
}

function emptyGrid() {
    grid.innerHTML = "";
}

function onSizeInput(){
    sizeValue.innerHTML = `${this.value} x ${this.value}`;
}

function onSizeChange(){
    emptyGrid();
    drawGrid(this.value);
}

drawGrid(DEFAULT_GRID_SIZE);

resetBtn.addEventListener('click', reset);
sizeSlider.addEventListener('input', onSizeInput);
sizeSlider.addEventListener('change', onSizeChange);
