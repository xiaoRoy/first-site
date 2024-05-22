"use strict";

const generateButton = document.querySelector("input");
generateButton.addEventListener("click", generateTable);

function generateTable() {
  const table = document.createElement("table");
  table.setAttribute("border", 2);
  const tableBody = document.createElement("tbody");

  const tableRowCount = 9;
  const tableColumnCount = 10;

  for (let row = 0; row < tableRowCount; row++) {
    const rowToAdd = document.createElement("tr");
    for (let column = 0; column < tableColumnCount; column++) {
      const cell = document.createElement("td");
      const text = document.createTextNode(
        `{cell in row:${row}, column${column}}`
      );
      cell.appendChild(text);
      rowToAdd.appendChild(cell);
      const cellStyle = cell.style;
      if (column % 2 == 0) {
        cellStyle.background = "rgb(22, 99, 122)";
      } else {
        cellStyle.display = "none"
      }
    }
    tableBody.appendChild(rowToAdd);
  }
  table.appendChild(tableBody);
  document.body.appendChild(table);
}
