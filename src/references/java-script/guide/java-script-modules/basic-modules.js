import { create, createReportList } from "./basic-modules/canvas.js";
import {
  squareName,
  draw,
  reportArea,
  reportPerimeter,
} from "square";

import randomSquare from "square";

const canvas = create("canvas", document.body, 480, 320);
const reportList = createReportList(canvas.id);

const squareA = draw(canvas.context, 50, 50, 100, "blue");
reportArea(squareA.length, reportList);
reportPerimeter(squareA.length, reportList);

const squareB = randomSquare(canvas.context);
