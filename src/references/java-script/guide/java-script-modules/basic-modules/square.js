const squareName = "square";

function draw(context, length, x, y, color) {
  context.fillStyle = color;
  context.fillRect(x, y, length, length);

  return {
    length,
    x,
    y,
    color,
  };
}

function random(min, max) {
  const result = Math.floor(Math.random() * (max - min)) + min;
  return result;
}

function reportArea(length, listId) {
  const listItem = createListItem();
  listItem.textContent = `${squareName} area is ${length * length}px square`;
  const list = document.getElementById(listId);
  list.appendChild(listItem);
}

function createListItem() {
  return document.createElement("li");
}

function reportPerimeter(length, listId) {
  const listItem = createListItem();
  listItem.textContent = `${squareName} perimeter is ${length * 4}px.`;

  const list = document.getElementById(listId);
  list.appendChild(listItem);
}

function randomSquare(context) {
  const colorPart1 = random(0, 255);
  const colorPart2 = random(0, 255);
  const colorPart3 = random(0, 255);
  const color = `rgb(${colorPart1},${colorPart2},${colorPart3})`;
  context.fillStyle = color;

  const x = random(0, 480);
  const y = random(0, 320);
  const length = random(10, 100);

  context.fillRect(x, y, length, length);

  return {
    length,
    x,
    y,
    color,
  };
}

export { squareName, draw, reportArea, reportPerimeter };

export default randomSquare;
