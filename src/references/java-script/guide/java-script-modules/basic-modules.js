import { create, createReportList } from "./basic-modules/canvas.js";
import {
  shapeName as squareName,
  draw as drawSquare,
  reportArea as reportSquareArea,
  reportPerimeter as reportSquarePerimeter,
} from "./basic-modules/square.js";

import randomSquare from "./basic-modules/square.js";

import * as Circle from "./basic-modules/circle.js";
import * as Triangle from "./basic-modules/triangle.js";

import { Circle as CircleClass } from "./basic-modules/shapes.js";

const canvas = create("canvas", document.body, 480, 320);
const reportList = createReportList(canvas.id);

const squareA = drawSquare(canvas.context, 50, 50, 100, "blue");
reportSquareArea(squareA.length, reportList);
reportSquarePerimeter(squareA.length, reportList);

const squareB = randomSquare(canvas.context);

const circleA = Circle.draw(canvas.context, 75, 200, 100, "green");
Circle.reportArea(circleA.radius, reportList);
Circle.reportPerimeter(circleA.radius, reportList);

const triangleA = Triangle.draw(canvas.context, 100, 75, 190, "yellow");
Triangle.reportArea(triangleA.length, reportList);
Triangle.reportPerimeter(triangleA.length, reportList);
