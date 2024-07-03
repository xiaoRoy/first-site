"use strict";

const priceRange = document.querySelector("#price");
const priceOutput = document.querySelector(".price-output");

function updatePrice() {
  priceOutput.textContent = priceRange.value;
}

updatePrice();
priceRange.addEventListener("input", () => {
  updatePrice();
});
