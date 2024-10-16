const container = document.querySelector(".container")

const grid = document.createElement("div");
grid.setAttribute("class", "grid");

let squareColor = "#8d8888";

function createGrid(n) {
    for (let i = 0; i < n; i++) {
        const row = document.createElement("div");
        row.setAttribute("class", "row");
        
        for (let j = 0; j < n; j++) {
            const square = document.createElement("div");
            square.setAttribute("class", "square");
            square.addEventListener("mouseenter", () => {
                square.style.backgroundColor = squareColor;
            })
            row.appendChild(square);
        }
    
        grid.appendChild(row);
    }
}

function clearGrid() {
    while (grid.lastElementChild) {
        grid.removeChild(grid.lastElementChild);
    }
}

createGrid(16);
container.appendChild(grid);

const buttonSection = document.querySelector(".buttons");

const newGridBtn = document.createElement("button");
newGridBtn.setAttribute("id", "newGridBtn");
newGridBtn.textContent = "New Grid";

newGridBtn.addEventListener("click", () => {
    let squareNumber = parseInt(prompt("Write the number of squares per side for the new grid (1 - 100): "));

    if (squareNumber > 100 || squareNumber < 1)  {
        alert("That number is not in the range!");
    } else if (squareNumber) {
        clearGrid();
        createGrid(squareNumber);
    } 
})

buttonSection.appendChild(newGridBtn);

/* <label for="colorpicker">Color Picker:</label> */
const colorSelect = document.createElement("input");
colorSelect.setAttribute("id", "colorSelect")
colorSelect.setAttribute("type", "color");
colorSelect.setAttribute("value", `${squareColor}`);

colorSelect.addEventListener("input", (e) => {
    squareColor = e.target.value;
})

buttonSection.appendChild(colorSelect);
