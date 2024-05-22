"use strict";

const settingBackgroundButton = document.querySelector("input");
settingBackgroundButton.addEventListener("click", setBackground);

const addingTextNodeButton = document.querySelector("#add-text-node");
addingTextNodeButton.addEventListener("click", addTextNode);

function setBackground() {
  const paragraphList = document.getElementsByTagName("p");

  if (paragraphList.length >= 2) {
    const secondParagraph = paragraphList[1];
    secondParagraph.style.background = "red";
  }
}

function addTextNode() {
  const paragraphList = document.getElementsByTagName("p");

  if (paragraphList.length >= 2) {
    const secondParagraph = paragraphList[1];
    const textNodeToAdd = document.createTextNode("world");
    secondParagraph.appendChild(textNodeToAdd);

    secondParagraph.removeChild(textNodeToAdd);
    const thirdParagraph = document.createElement("p");
    thirdParagraph.appendChild(textNodeToAdd);
    document.body.appendChild(thirdParagraph);
    
  }
}


