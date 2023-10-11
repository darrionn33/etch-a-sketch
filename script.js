const gridInput = document.querySelector("#gridInput");
const resetGrid = document.querySelector("button");
const h2 = document.querySelector("h2");
let gridSize = 16;
h2.textContent = gridInput.value + ` x ${gridInput.value}`;

const boardContainer = document.querySelector(".board-container");

for (let i = 1; i <= gridSize; i++) {
  const div = document.createElement("div");
  const colorInput = document.querySelector("#colorInput");
  div.style.display = "flex";

  for (let i = 1; i <= gridSize; i++) {
    const div2 = document.createElement("div");
    div2.classList.add("grid");
    div.append(div2);
    div2.addEventListener("click", () => {
      div2.style.backgroundColor = colorInput.value;
    });
  }
  boardContainer.append(div);
}
gridInput.addEventListener("input", (e) => {
  h2.textContent = gridInput.value + ` x ${gridInput.value}`;
  gridSize = gridInput.value;
  boardContainer.replaceChildren();
  for (let i = 1; i <= gridSize; i++) {
    const div = document.createElement("div");
    const colorInput = document.querySelector("#colorInput");
    div.style.display = "flex";

    for (let i = 1; i <= gridSize; i++) {
      const div2 = document.createElement("div");
      div2.classList.add("grid");
      // div2.style.outline = "1px solid lightgray";
      div2.style.width = 300 / gridSize + "px";
      div2.style.height = 300 / gridSize + "px";
      div.append(div2);
      div2.addEventListener("click", () => {
        div2.style.backgroundColor = colorInput.value;
      });
    }
    boardContainer.append(div);
  }
});

resetGrid.addEventListener("click", () => {
  const gridItems = document.querySelectorAll(".grid");
  for (let i = 0; i < gridItems.length; i++) {
    gridItems[i].style.backgroundColor = "#98bad5";
  }
});
