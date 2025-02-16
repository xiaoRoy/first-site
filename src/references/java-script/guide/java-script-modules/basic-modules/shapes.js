function createListItem() {
  return document.createElement("li");
}

function degreeToRadian(degree) {
  return (degree * Math.PI) / 180;
}

export { createListItem, degreeToRadian };
