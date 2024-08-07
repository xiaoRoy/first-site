const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

function drawCircle(x, y, size) {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = "white";
  context.fillRect(0, 0, canvas.width, canvas.height);

  context.beginPath();
  context.fillStyle = "pink";
  context.arc(x, y, size, 0, 2 * Math.PI);
  context.fill();
}

let x = 50;
let y = 50;
const size = 30;

function drawRect() {
  context.fillRect(25, 25, 100, 100);
  context.clearRect(45, 45, 60, 60);
  context.strokeRect(50, 50, 50, 50);
}

drawCircle(x, y, size);
// drawCircle(x + 40, y + 100, 70);
// Add your code here
// drawRect();

document.addEventListener("keydown", (event) => {
  const pressedKey = event.key;
  switch (pressedKey) {
    case "w":
      y--;
      break;
    case "a":
      x--;
      break;
    case "s":
      y++;
      break;
    case "d":
      x++;
      break;
    default:
    //do not bother to run.
  }
  drawCircle(x, y, size);
});
