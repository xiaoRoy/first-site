"use strict";

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