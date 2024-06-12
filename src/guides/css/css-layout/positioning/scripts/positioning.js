"use strict";
const POSITIONING_STATIC = "static";
const POSITIONING_RELATIVE = "relative";
const POSITIONING_ABSOLUTE = "absolute";
const POSITIONING_FIXED = "fixed";
const allPositionValues = new Set([
  POSITIONING_STATIC,
  POSITIONING_RELATIVE,
  POSITIONING_ABSOLUTE,
  POSITIONING_FIXED,
]);
const positioningForm = document.querySelector("#positioning-form");
const title = document.querySelector("#title");
const paragraphSecond = document.querySelector("#paragraph-second");
const paragraphFirst = document.querySelector("#paragraph-first");
const staticPositionInput = document.querySelector("#positioning-static");
staticPositionInput.checked = true;
title.textContent = "static position";
updateParagraph(staticPositionInput.value);

positioningForm.addEventListener("change", (event) => {
  const target = event.target;
  if ("positioning" === target.name) {
    const positioningValue = target.value;
    updatePositioning(positioningValue);
    updateParagraph(positioningValue);
  }
});

function updatePositioning(positioning) {
  title.textContent = `${positioning} positioning`;
  const paragraphFirstClass = "paragraph-first";
  if (POSITIONING_ABSOLUTE === positioning) {
    paragraphFirst.classList.add(paragraphFirstClass);
    paragraphFirst.style.zIndex = 1;
  } else {
    paragraphFirst.classList.remove(paragraphFirstClass);
    paragraphFirst.style.zIndex = "auto";
  }
}

function updateParagraph(positioning) {
  const toRemove = Array.from(allPositionValues);
  const index = toRemove.indexOf(positioning);
  if (index > -1) {
    toRemove.splice(index, 1);
  }
  paragraphSecond.classList.remove(...toRemove);
  paragraphSecond.classList.add(positioning);
}
