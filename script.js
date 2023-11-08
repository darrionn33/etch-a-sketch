const boardContainer = document.querySelector(".board-container");
const gridInput = document.querySelector(".grid-input");
const gridSizeDisplay = document.querySelector(".grid-size-display");
const penColorInput = document.querySelector(".pen-color-input");
const gridColorInput = document.querySelector(".grid-color-input");
const resetGridButton = document.querySelector(".reset-grid-button");
const gridLineButton = document.querySelector(".grid-line-button");

let gridLines = false;

gridSizeDisplay.textContent = gridInput.value + ` x ${gridInput.value}`;

const createGrid = (gridSize) => {
  for (let i = 0; i < gridSize; i++) {
    const div = document.createElement("div");
    div.style.display = "flex";

    for (let i = 0; i < gridSize; i++) {
      const div2 = document.createElement("div");
      div2.classList.add("grid-items");
      div2.style.width = boardContainer.offsetWidth / gridSize + "px";
      div2.style.height = boardContainer.offsetWidth / gridSize + "px";
      div2.style.backgroundColor = gridColorInput.value;
      div.append(div2);
      div2.addEventListener("click", () => {
        div2.style.backgroundColor = penColorInput.value;
      });
    }
    boardContainer.append(div);
  }
};

createGrid(gridInput.value);

gridInput.addEventListener("input", () => {
  gridSizeDisplay.textContent = gridInput.value + ` x ${gridInput.value}`;
  boardContainer.replaceChildren();
  createGrid(gridInput.value);
});

const resetGrid = () => {
  const gridItems = document.querySelectorAll(".grid-items");
  for (let i = 0; i < gridItems.length; i++) {
    gridItems[i].style.backgroundColor = gridColorInput.value;
  }
};
resetGridButton.onclick = () => {
  resetGrid();
};

gridColorInput.onchange = () => {
  resetGrid();
};

const setGridLines = (value) => {
  const gridItems = document.querySelectorAll(".grid-items");
  for (let i = 0; i < gridItems.length; i++) {
    gridItems[i].style.outlineStyle = value;
  }
};
gridLineButton.onclick = () => {
  if (gridLines) {
    setGridLines("none");
  } else {
    setGridLines("solid");
  }
  gridLines = !gridLines;
};
