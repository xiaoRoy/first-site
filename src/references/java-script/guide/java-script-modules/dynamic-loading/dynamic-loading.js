import * as Canvas from "../basic-modules/canvas.js";
import colors from "../basic-modules/getColors.js";

const btnCircle = document.querySelector(".circle");
const btnTriangle = document.querySelector(".triangle");
const btnSquare = document.querySelector(".square");

const canvas = Canvas.create("canvas", document.body, 480, 320);
const listId = Canvas.createReportList(canvas.id);

btnCircle.addEventListener("click", () => {
  import("../basic-modules/circle.js").then((Circle) => {
    const circle = Circle.draw(canvas.context, 50, 50, 100, colors.blue);
    Circle.reportArea(circle.radius, listId);
    Circle.reportPerimeter(circle.radius, listId);
  });
});

btnTriangle.addEventListener("click", () => {
  import("../basic-modules/triangle.js").then((Triangle) => {
    const triangle = Triangle.draw(canvas.context, 100, 75, 190, colors.yellow);
    Triangle.reportArea(triangle.length, listId);
    Triangle.reportPerimeter(triangle.length, listId);
  });
});

btnSquare.addEventListener("click", () => {
  import("../basic-modules/square.js").then((Square) => {
    const square = Square.draw(canvas.context, 75, 200, 100, colors.green);
    Square.reportArea(square.length, listId);
    Square.reportPerimeter(square.length, listId);
  });
});
