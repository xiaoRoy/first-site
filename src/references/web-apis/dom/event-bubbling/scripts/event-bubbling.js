"use strict";

const container = document.querySelector("#container");
const output = document.querySelector("#output");
const button = document.querySelector("button");

const isCaptureEnable = { capture: true };
document.body.addEventListener("click", handleClicked, isCaptureEnable);
container.addEventListener("click", handleClicked, isCaptureEnable);
button.addEventListener("click", handleClicked);

function handleClicked(event) {
  output.textContent += "\n";
  const message = `you clicked on a ${event.currentTarget.tagName} element`;
  output.textContent += message;
}
