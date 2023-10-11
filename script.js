const boardContainer = document.querySelector(".board-container");

for (let i = 1; i <= 16; i++) {
  const div = document.createElement("div");
  const colorInput = document.querySelector("input");
  div.style.display = "flex";

  for (let i = 1; i <= 16; i++) {
    const div2 = document.createElement("div");
    div2.classList.add("grid-on", "grid-off");
    div.append(div2);
    div2.addEventListener("click", () => {
      div2.style.backgroundColor = colorInput.value;
    });
  }
  boardContainer.append(div);
}
