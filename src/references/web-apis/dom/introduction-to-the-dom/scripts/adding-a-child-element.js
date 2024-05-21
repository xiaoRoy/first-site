"use strict";

const parent = document.body.querySelector(".parent");

const addChildButton = document.body.querySelector("#add-child");
addChildButton.addEventListener("click", () => {
  if (parent.childNodes.length > 1) {
    return;
  }

  const child = document.createElement("div");
  child.classList.add("child");
  child.textContent = "child";
  parent.appendChild(child);
});

const removeChildButton = document.body.querySelector("#remove-child");
removeChildButton.addEventListener("click", (event) => {
    const child = document.body.querySelector(".child");
    if (child) {
        child.remove();
    }
});
