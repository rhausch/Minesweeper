"use strict";

function test() {
  var a = 15;
  console.log(a);
}

test();

function generateBoardTable(height, width, el) {
  var table = document.createElement("table");

  for (var i = 0; i < height; i++) {
    var row = document.createElement("tr");

    for (var j = 0; j < width; j++) {
      var cell = document.createElement("td");
      cell.id = i + "-" + j;
      cell.textContent = " ";
      cell.classList.add("cell");
      row.append(cell);
    }

    table.append(row);
  }

  el.append(table);
}

generateBoardTable(10, 10, document.getElementById("main-board"));
//# sourceMappingURL=main.js.map