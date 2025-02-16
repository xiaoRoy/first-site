import { createListItem } from "./shapes.js";



const RADIAN_0 = 0;
const RADIAN_360 = Math.PI * 2;
const shapeName = "circle";

function draw(context, radius, x, y, color) {
  context.fillStyle = color;
  context.beginPath();
  context.arc(x, y, radius, RADIAN_0, RADIAN_360, false);
  context.fill();

  return {
    radius,
    x,
    y,
    color,
  };
}

function reportArea(radius, listId) {
  const listItem = createListItem();
  const area = Math.round(Math.PI * radius * radius);
  listItem.textContent = `${shapeName} area is ${area} px squared.`;
  const list = document.getElementById(listId);
  list.appendChild(listItem);
}

function reportPerimeter(radius, listId) {
  const listItem = createListItem();
  const circumference = Math.round(2 * Math.PI * radius);
  listItem.textContent = `${shapeName} circumference is ${circumference}px.`;
  const list = document.getElementById(listId);
  list.appendChild(listItem);
}

export {shapeName, draw, reportArea, reportPerimeter}