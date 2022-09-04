const grid = document.querySelector("#grid");

function drawGrid() {
    const size = 16;
    for (let index = 0; index < size*size; index++) {
        grid.appendChild(drawSquare(size));
    }
}

function drawSquare(gridSize) {
    const size = (grid.clientWidth / gridSize) - 1;

    const square = document.createElement("div");
    square.classList.add("square");
    square.style.width = size + "px";
    square.style.height = size + "px";

    return square;
}

function getRandomColor(){
    return "#" + Math.floor(Math.random()*16777215).toString(16);
}

drawGrid();

const choices = document.querySelectorAll('.square');
//choices.forEach(choice => choice.addEventListener('click', playRound));

