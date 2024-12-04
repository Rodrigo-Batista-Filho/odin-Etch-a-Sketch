const container = document.querySelector(".container");
let isDrawing = false;

function createGrid(gridSize) {
    container.innerHTML = "";

    container.style.gridTemplateColumns = `repeat${gridSize} 1fr`;
    container.style.gridTemplateRows = `repeat${gridSize} 1fr`;

    for(let i = 0; i < gridSize * gridSize; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        container.appendChild(square);
    }

    const squares = document.querySelectorAll(".square");

    squares.forEach(square => {
        square.addEventListener("mouseover", () => {
            if(isDrawing){
                square.style.backgroundColor = "lightblue";
            }
        });
    });
}

createGrid(16);

container.addEventListener("mousedown", () => {
    isDrawing = true;
});

container.addEventListener("mouseup", () => {
    isDrawing = false;
});

document.getElementById("changeGridBtn").addEventListener("click", () => {
    let newSize = prompt("enter the number of squares per side (max 100):");

    newSize = parseInt(newSize);
    if(isNaN(newSize) || newSize < 1 || newSize > 100) {
        alert("please enter a valid number between 1 and 100.");
    } else {
        createGrid(newSize);
    }
});