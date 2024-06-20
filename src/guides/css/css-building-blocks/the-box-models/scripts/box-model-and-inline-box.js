"use strict";

const displayForm = document.querySelector("#display-form");

const targetSpan = document.querySelector("#target-span");

displayForm.addEventListener("change", (event) => {
    const target = event.target;
    if ("display" === target.name) {
        updateSpanDisplay(target.value);
    }
});

function updateSpanDisplay(display) {
    targetSpan.style.display = display;

}