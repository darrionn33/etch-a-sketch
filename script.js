const boardContainer = document.querySelector(".board-container");
const gridInput = document.querySelector(".grid-input");
const gridSizeDisplay = document.querySelector(".grid-size-display");
const colorInput = document.querySelector(".color-input");
const resetGridButton = document.querySelector(".reset-grid-button");

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
      div.append(div2);
      div2.addEventListener("click", () => {
        div2.style.backgroundColor = colorInput.value;
      });
    }
    boardContainer.append(div);
  }
};

createGrid(gridInput.value);

gridInput.addEventListener("input", () => {
  gridSizeDisplay.textContent = gridInput.value + ` x ${gridInput.value}`;
  gridSize = gridInput.value;
  boardContainer.replaceChildren();
  createGrid(gridInput.value);
});

resetGridButton.addEventListener("click", () => {
  const gridItems = document.querySelectorAll(".grid-items");
  for (let i = 0; i < gridItems.length; i++) {
    gridItems[i].style.backgroundColor = "#98bad5";
  }
});
