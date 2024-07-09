"use strict";

const colorSelect = document.querySelector("#color");
const colorOutput = document.querySelector("#color-output");

const multipleSelect = document.querySelector("#multi");
const multipleOutput = document.querySelector("#multi-output");

function displaySelectedColor() {
  colorOutput.textContent = colorSelect.value;
}

displaySelectedColor();

document.addEventListener("DOMContentLoaded", () => {
  colorSelect.addEventListener("change", () => {
    displaySelectedColor();
  });

  multipleSelect.addEventListener("change", () => {
    const selectedValues = Array.from(multipleSelect.selectedOptions).map(
      (option) => option.value
    );
    multipleOutput.textContent = selectedValues.join(", ");
  });
});
