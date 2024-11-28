/* INITIAL PAGE */

const container = document.querySelector(".container")

const grid = document.createElement("div");
grid.setAttribute("class", "grid");

const DEFAULT_COLOR = "#778DA9";
const DEFAULT_SIZE = 16;

let squareColor = DEFAULT_COLOR;
let currentSize = DEFAULT_SIZE;

function createGrid(n) {
    currentSize = n;
    for (let i = 0; i < n; i++) {
        const row = document.createElement("div");
        row.setAttribute("class", "row");
        
        for (let j = 0; j < n; j++) {
            const square = document.createElement("div");
            square.setAttribute("class", "square");
            row.appendChild(square);
        }

        grid.appendChild(row);
    }   container.appendChild(grid);
} 

function colorGrid() {
    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        let squareOpacity = 0;
        square.addEventListener("mouseenter", () => {
            if (darkenState) {
                if (squareOpacity < 1) {
                    squareOpacity += 0.1;
                }
                square.style.opacity = squareOpacity;
            } else {
                square.style.opacity = 1;
            }
            if (rainbowState) {
                square.style.backgroundColor = `rgb(${getRandomInteger(255)}, ${getRandomInteger(255)}, ${getRandomInteger(255)})`;
            } else {
                square.style.backgroundColor = squareColor;
            }
        })
    })
}

function deleteGrid() {
    grid.textContent = "";
}

createGrid(currentSize);
colorGrid();

/* NEW GRID BUTTON */

const buttonSection = document.querySelector(".buttonSection");

const newGrid = document.createElement("button");
newGrid.textContent = "New";

newGrid.addEventListener("click", () => {
    let squareNumber = parseInt(prompt("Write the number of squares per side for the new grid (1 - 100): "));

    if (squareNumber > 100 || squareNumber < 1)  {
        alert("That number is not in the range!");
    } else if (squareNumber) {
        deleteGrid();
        createGrid(squareNumber);
        colorGrid();
    } 
})

/* CLEAR GRID BUTTON */

const clearGrid = document.createElement("button");
clearGrid.textContent = "Clear";

const squares = document.querySelectorAll(".square")

clearGrid.addEventListener("click", () => {
    deleteGrid();
    createGrid(currentSize);
    colorGrid();
})

/* COLOR SELECT BUTTON */

const colorSelect = document.createElement("input");
colorSelect.setAttribute("type", "color");
colorSelect.setAttribute("value", `${squareColor}`);

colorSelect.addEventListener("change", (e) => {
    squareColor = e.target.value;

    rainbowState = false;
    rainbowMode.classList.remove("active");

    darkenState = false;
    darkenMode.classList.remove("active");
})

/* RAINBOW MODE BUTTON */

const rainbowMode = document.createElement("button");
rainbowMode.textContent = "Rainbow";

function getRandomInteger(max) {
    return Math.floor(Math.random() * (max + 1));
}

let rainbowState = false;

rainbowMode.addEventListener("click", () => {
    rainbowState = !(rainbowState);
    rainbowMode.classList.toggle("active");
})

/* DARKEN MODE BUTTON */

const darkenMode = document.createElement("button");
darkenMode.textContent = "Darken";

let darkenState = false;

darkenMode.addEventListener("click", () => {
    darkenState = !(darkenState);
    darkenMode.classList.toggle("active");
})

buttonSection.appendChild(colorSelect);
buttonSection.appendChild(newGrid);
buttonSection.appendChild(clearGrid);
buttonSection.appendChild(rainbowMode);
buttonSection.appendChild(darkenMode);

// TODO: COLOR MODE button (store the current color from COLOR SELECTOR)
// TODO: color grid ONLY when mouse is held down