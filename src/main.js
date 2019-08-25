"use strict";

function test() {
    let a = 15;
    console.log(a);
}

test();

function generateBoardTable (height, width, el) {
    let table = document.createElement("table");
    for (let i = 0; i < height; i++) {
        let row = document.createElement("tr");
        for (let j = 0; j < width; j++) {
            let cell = document.createElement("td");
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
