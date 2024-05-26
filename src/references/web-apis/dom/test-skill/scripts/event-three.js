"use strict";

const buttonBar = document.querySelector(".button-bar");
buttonBar.addEventListener("click", (event) => {
  const pressedButton = event.target;
  const color = pressedButton.getAttribute("data-color");
  if (color) {
    event.currentTarget.style.background = color;
  }
});
