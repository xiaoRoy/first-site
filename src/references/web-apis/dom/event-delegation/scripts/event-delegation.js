"use strict";

document.addEventListener("DOMContentLoaded", () => {
  addTiles();
});

function addTiles() {
  const tilesCount = 16;
  const container = document.querySelector("#container");
  for (let index = 0; index < tilesCount; index++) {
    const tile = document.createElement("div");
    tile.className = "tile";
    container.appendChild(tile);
  }
}

function randomBackgroundColor() {
  function randomColor() {
    return Math.floor(Math.random() * (255 + 1));
  }
  return `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
}

const container = document.querySelector("#container");
container.addEventListener("click", (event) => {
  event.target.style.background = randomBackgroundColor();
});
