"use strict";
const allPositionValues = new Set(["static", "relative", "absolute"]);
const positioningForm = document.querySelector("#positioning-form");
const title = document.querySelector("#title");
const paragraphSecond = document.querySelector("#paragraph-second");
const paragraphFirst = document.querySelector("#paragraph-first");
const staticPositionInput = document.querySelector("#positioning-static");
staticPositionInput.checked = true;
title.textContent = "static position"
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
    title.textContent = `${positioning} positioning`
    if ("absolute" === positioning) {
        paragraphFirst.classList.add("paragraph-first");
        paragraphFirst.style.zIndex = 1;
    } else {
        paragraphFirst.classList.remove("paragraph-first");
        paragraphFirst.style.zIndex = "auto"
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