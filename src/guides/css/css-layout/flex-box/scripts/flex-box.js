"use strict";

const articleSection = document.querySelector("#article-section");

const displaySelector = document.querySelector("#display-selector");

displaySelector.addEventListener('change', (event) => {
    const selectedDisplayType = event.target.value;
    articleSection.style.display = selectedDisplayType;
});