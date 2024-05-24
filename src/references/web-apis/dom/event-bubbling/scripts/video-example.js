"use strict";

const button = document.querySelector("button");
const container = document.querySelector("div");
const video = document.querySelector("video");

button.addEventListener("click", toggleVideo);
container.addEventListener("click", toggleVideo);
video.addEventListener("click", (event) => {
  event.stopPropagation();
  video.play();
});

function toggleVideo(event) {
  const classAttribute = "class";
  const hidden = "hidden";
  const currentVideoState = container.getAttribute(classAttribute);
  console.log(`Current State:${currentVideoState}`);
  let valueToUpdate = currentVideoState === hidden ? "showing" : hidden;
  container.setAttribute(classAttribute, valueToUpdate);
}
