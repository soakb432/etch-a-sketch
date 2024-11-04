/* INITIAL PAGE */

const container = document.querySelector(".container")

const grid = document.createElement("div");
grid.setAttribute("class", "grid");

let squareColor = "#778DA9";

function createGrid(n) {
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

function clearGrid() {
    grid.textContent = "";
}

createGrid(16);
colorGrid();

/* NEW GRID BUTTON */

const buttonSection = document.querySelector(".buttonSection");

const newGrid = document.createElement("button");
newGrid.setAttribute("class", "button");
newGrid.textContent = "New Grid";

newGrid.addEventListener("click", () => {
    let squareNumber = parseInt(prompt("Write the number of squares per side for the new grid (1 - 100): "));

    if (squareNumber > 100 || squareNumber < 1)  {
        alert("That number is not in the range!");
    } else if (squareNumber) {
        clearGrid();
        createGrid(squareNumber);
        colorGrid();
    } 
})

/* COLOR SELECT BUTTON */

const colorSelect = document.createElement("input");
colorSelect.setAttribute("class", "button");
colorSelect.setAttribute("type", "color");
colorSelect.setAttribute("value", `${squareColor}`);

colorSelect.addEventListener("change", (e) => {
    squareColor = e.target.value;
    rainbowState = false;
    darkenState = false;
})

/* RAINBOW MODE BUTTON */

const rainbowMode = document.createElement("button");
rainbowMode.setAttribute("class", "button");
rainbowMode.textContent = "Rainbow Mode";

function getRandomInteger(max) {
    return Math.floor(Math.random() * (max + 1));
}

let rainbowState = false;

rainbowMode.addEventListener("click", () => {
    rainbowState = !(rainbowState);
})

/* DARKEN MODE BUTTON */

const darkenMode = document.createElement("button");
darkenMode.setAttribute("class", "button");
darkenMode.textContent = "Darken Mode";

let darkenState = false;

darkenMode.addEventListener("click", () => {
    darkenState = !(darkenState);
})

buttonSection.appendChild(colorSelect);
buttonSection.appendChild(newGrid);
buttonSection.appendChild(rainbowMode);
buttonSection.appendChild(darkenMode);