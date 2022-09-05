const DEFAULT_GRID_SIZE = 16;
let squareColor = "#1B5299";
let rgbMode = false;
let mousedown = false;

const grid = document.querySelector("#grid");
const resetBtn = document.querySelector("#resetBtn");
const sizeValue = document.querySelector("#sizeValue")
const sizeSlider = document.querySelector("#sizeSlider")
const colorBtn = document.querySelector("#colorBtn")
const rgbBtn = document.querySelector("#rgbBtn")
const colorSelector = document.getElementById("colorSelector");


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
    if (!mousedown) return;

    if (rgbMode) 
        this.style.backgroundColor = getRandomColor(); 
    else
        this.style.backgroundColor = squareColor;
}

function getRandomColor(){
    return "#" + Math.floor(Math.random()*16777215).toString(16);
}

function reset() {
    sizeValue.innerHTML = `${DEFAULT_GRID_SIZE} x ${DEFAULT_GRID_SIZE}`;
    emptyGrid();
    drawGrid(DEFAULT_GRID_SIZE);
    setColorMode();
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

function setColorMode(){
    colorBtn.classList.add('active');
    rgbBtn.classList.remove('active');

    rgbMode = false;
}

function setRgbMode(){
    colorBtn.classList.remove('active');
    rgbBtn.classList.add('active');

    rgbMode = true;
}


drawGrid(DEFAULT_GRID_SIZE);

resetBtn.addEventListener('click', reset);
sizeSlider.addEventListener('input', onSizeInput);
sizeSlider.addEventListener('change', onSizeChange);
colorBtn.addEventListener('click', setColorMode);
rgbBtn.addEventListener('click', setRgbMode);
colorSelector.addEventListener('input', () => {
    squareColor = colorSelector.value;
});
grid.addEventListener('mousedown', () => {
    mousedown = true;
});
grid.addEventListener('mouseup', () => {
    mousedown = false;
});