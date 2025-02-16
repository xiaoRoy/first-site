import { degreeToRadian, createListItem } from "./shapes.js";

const shapeName = "triangle";

function calculateHeight(length) {
  return (length / 2) * Math.tan(degreeToRadian(60));
}

function draw(context, length, x, y, color) {
  context.fillStyle = color;
  const height = calculateHeight(length);
  context.beginPath();
  context.moveTo(x, y);
  context.lineTo(x + length, y);

  context.lineTo(x + length / 2, y + height);
  context.lineTo(x, y);
  context.fill();

  return {
    length,
    x,
    y,
    color,
  };
}

function reportArea(length, listId) {
  const listItem = createListItem();
  const area = Math.round((calculateHeight(length) * length) / 2);
  listItem.textContent = `${shapeName} area is ${area} px squared.`;
  const list = document.getElementById(listId);
  list.appendChild(listItem);
}

function reportPerimeter(length, listId) {
  const listItem = createListItem();
  listItem.textContent = `${shapeName} perimeter is ${length * 3}px`;
  const list = document.getElementById(listId);
  list.appendChild(listItem);
}

export { shapeName, draw, reportArea, reportPerimeter };
