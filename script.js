function getContrast50(hexcolor) {
  return parseInt(hexcolor, 16) > 0xffffff / 2 ? "black" : "white";
}

let gridLines = false;
$("#lines").click(() => {
  if (gridLines) {
    $(".container").children().not(".overlay").css("outline-style", "none");
    $("#lines")
      .children(":first")
      .text("Lines: OFF")
      .css({ "background-color": "transparent", color: "black" });
    $("#lines").children("div:nth-child(2)").css("display", "none");
  } else {
    $(".container").children().not(".overlay").css("outline-style", "solid");
    $("#lines")
      .children(":first")
      .text("Lines:  ON")
      .css({ "background-color": "black", color: "white" });
    $("#lines").children("div:nth-child(2)").css("display", "block");
  }
  gridLines = !gridLines;
});

function createGrid(size) {
  const outlineColor = getContrast50($("#grid-color").val().split("#")[1]);
  $(".container").children().not(".overlay").remove();
  let i = 0;
  let columns = "";
  while (i < size * size) {
    if (i < size) {
      columns = columns + "1fr ";
    }
    $(".container").append("<div></div)");
    i++;
  }
  $(".container")
    .css("grid-template-columns", columns)
    .children()
    .not(".overlay")
    .addClass("grid-item")
    .css({
      "background-color": $("#grid-color").val(),
      "outline-color": outlineColor,
    })
    .off()
    .on("mouseover", (e) => {
      e.target.style.backgroundColor = $("#pen-color").val();
    });
  if (gridLines) {
    $(".grid-item").css("outline-style", "solid");
  }
}
createGrid(16);

$(".colors")
  .children()
  .not(":last")
  .click((e) => {
    e.preventDefault();
    $("#pen-color").val(e.target.value);
  });

let oldColor = $("#pen-color").val();
$("#pen-color").on("change", () => {
  oldColor = $("#pen-color").val();
  console.log(1);
});
$("#erase").click(() => {
  oldColor = $("#pen-color").val();
  $("#pen-color").val($("#grid-color").val());
  $(".selected").css("left", "50%");
});
$("#paint").click(() => {
  $("#pen-color").val(oldColor);
  $(".selected").css("left", "0%");
});

$("#grid-color").on("change", () => {
  createGrid($("#grid-size-input").val());
});

$("#reset").click(() => {
  createGrid($("#grid-size-input").val());
});

let showGridSizeDiv = false;
$("#grid-size-display").click(() => {
  if (showGridSizeDiv) {
    $(".grid-size-div").css("display", "none");
    $("#grid-size-display").css("outline", "none");
  } else {
    $(".grid-size-div").css("display", "flex");
    $("#grid-size-display").css("outline", "3px solid #d062ec");
  }
  showGridSizeDiv = !showGridSizeDiv;
});

$("#grid-size-range").on("input", () => {
  const value = $("#grid-size-range").val();
  $("#grid-size-input").val(value);
  $("#grid-size-span").text(value);
  $("#grid-size-display").text(value);
  createGrid(value);
});
$("#grid-size-input").on("input", () => {
  const value =
    $("#grid-size-input").val() !== "" ? $("#grid-size-input").val() : 1;
  $("#grid-size-range").val(value);
  $("#grid-size-span").text(value);
  $("#grid-size-display").text(value);
  createGrid(value);
});

$(document).on({
  mousedown: () => {
    $(".overlay").css("display", "none");
  },
  mouseup: () => {
    $(".overlay").css("display", "block");
  },
  touchstart: () => {
    $(".overlay").css("display", "none");
  },
  touchend: () => {
    $(".overlay").css("display", "block");
  },
  touchmove: (e) => {
    e.preventDefault();
    const element = document.elementFromPoint(
      e.touches[0].clientX,
      e.touches[0].clientY
    );
    $(element)
      .filter(".grid-item")
      .css("background-color", $("#pen-color").val());
  },
});
