"use strict";
const allPositionValue = ["static", "relative"];
const positioningForm = document.querySelector("#positioning-form");
const title = document.querySelector("#title");
const paragraph = document.querySelector("#paragraph-second");
const staticPositionInput = document.querySelector("#positioning-static");
staticPositionInput.checked = true;
title.textContent = "static position"
updateParagraph(staticPositionInput.value);
console.log(paragraph);


positioningForm.addEventListener("change", (event) => {
    const target = event.target;
    if ("positioning" === target.name) {
        const positioningValue = target.value;
        updatePositioning(positioningValue);
        updateParagraph(positioningValue);
    }

});



function updatePositioning(positioning) {
    // console.log(positioning);
    title.textContent = `${positioning} positioning`
}

function updateParagraph(positioning) {
    console.log(`Position to update:${positioning}`);
    const toRemove = Array.from(allPositionValue).pop(positioning);
    console.log(`Paragraph to remove: ${toRemove}`);
    paragraph.classList.remove(...toRemove)
    paragraph.classList.add(positioning);
    // console.log(`Paragraph ${paragraph.classList}`);

}