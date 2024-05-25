"use strict";

let isOff = true;

const toggle = document.querySelector(".off");
toggle.addEventListener("click", () => {
  isOff = !isOff;
  const toggleText = isOff ? "off" : "on";
  toggle.textContent = `Machine is ${toggleText}`
});
