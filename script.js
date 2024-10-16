const container = document.querySelector(".container")

const grid = document.createElement("div");
grid.setAttribute("class", "grid");

for (let i = 0; i < 16; i++) {
    const row = document.createElement("div");
    row.setAttribute("class", "row");
    
    for (let j = 0; j < 16; j++) {
        const square = document.createElement("div");
        square.setAttribute("class", "square");
        row.appendChild(square);
    }

    grid.appendChild(row);
}

container.appendChild(grid);