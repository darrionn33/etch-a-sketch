const [
  boardContainer,
  gridInput,
  gridSizeDisplay,
  penColorInput,
  gridColorInput,
  resetGridButton,
  gridLineButton,
] = [
  $(".board-container"),
  $(".grid-input"),
  $(".grid-size-display"),
  $(".pen-color-input"),
  $(".grid-color-input"),
  $(".reset-grid-button"),
  $(".grid-line-button"),
];

const setGridSizeDisplay = () => {
  gridSizeDisplay.text(`${gridInput.val()} X ${gridInput.val()}`);
};
setGridSizeDisplay();

const createGrid = (gridSize) => {
  boardContainer.empty();
  const itemSize = boardContainer.width() / gridSize + "px";
  const itemColor = gridColorInput.val();
  for (let i = 0; i < gridSize; i++) {
    boardContainer.append("<div></div>").children().css("display", "flex");

    for (let j = 0; j < gridSize; j++) {
      boardContainer.children().eq(i).append("<div></div>");
      boardContainer
        .children()
        .children()
        .css({
          "background-color": itemColor,
          height: itemSize,
          width: itemSize,
        })
        .addClass("grid-items")
        .off()
        .on("click", (e) => {
          e.target.style.backgroundColor = penColorInput.val();
        });
    }
  }
};
createGrid(gridInput.val());

gridInput.on("input", () => {
  setGridSizeDisplay();
  createGrid(gridInput.val());
});

const resetGrid = () => {
  $(".grid-items").css("background-color", gridColorInput.val());
};

resetGridButton.click(() => {
  resetGrid();
});

gridColorInput.on("change", () => {
  resetGrid();
});

let gridLines = false;

const setGridLines = (value) => {
  $(".grid-items").css("outline-style", value);
};

gridLineButton.click(() => {
  if (gridLines) {
    setGridLines("none");
  } else {
    setGridLines("solid");
  }
  gridLines = !gridLines;
});
