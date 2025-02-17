function createListItem() {
  return document.createElement("li");
}

function degreeToRadian(degree) {
  return (degree * Math.PI) / 180;
}

export { createListItem, degreeToRadian };
export { Square } from "./shapes/square-class.js";
export { Circle } from "./shapes/circle-class.js";
export { Triangle } from "./shapes/triangle-class.js";
