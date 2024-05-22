"use strict";

const randomButton = document.querySelector("button");
// randomButton.addEventListener("click", randomBackgroundColor);

// randomButton.addEventListener('focus', randomBackgroundColor);
// randomButton.addEventListener('blur', resetBackground);

const abortController = new AbortController();

randomButton.addEventListener('mouseover', randomBackgroundColor, {signal: abortController.signal} );
randomButton.addEventListener('mouseout', resetBackground);

const container = document.querySelector(".container");



function randomBackgroundColor() {
  function randomColor() {
    return Math.floor(Math.random() * (255 + 1));
  }
  const background = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
  container.style.background = background;
}

function resetBackground() {

    container.style.background = 'black';
    abortController.abort();
}
