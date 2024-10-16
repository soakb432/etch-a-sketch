const container = document.querySelector(".container")

const grid = document.createElement("div");
grid.setAttribute("class", "grid");

function createGrid(n) {
    for (let i = 0; i < n; i++) {
        const row = document.createElement("div");
        row.setAttribute("class", "row");
        
        for (let j = 0; j < n; j++) {
            const square = document.createElement("div");
            square.setAttribute("class", "square"); 
            // SET MOUSE EVENT HERE
            square.addEventListener("mouseenter", () => {
                square.style.backgroundColor = "red";
            })
            row.appendChild(square);
        }
    
        grid.appendChild(row);
    }
}

createGrid(16);

container.appendChild(grid);

const newGridBtn = document.createElement("button");
newGridBtn.setAttribute("class", "newGridBtn");
newGridBtn.textContent = "New Grid";

newGridBtn.addEventListener("click", () => {
    let squareNumber = parseInt(prompt("Write the number of squares per side for the new grid (1 - 100): "));
    
    if (squareNumber > 100 || squareNumber < 1 || squareNumber === NaN)  {
        alert("That number is not in the range!");
    }
})

container.appendChild(newGridBtn);


