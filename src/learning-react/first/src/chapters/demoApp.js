import { Component } from "react";
import showCalculator from "./chap5/calculator";
import showCounter from "./chap5/counter";

class DemoApp extends Component {
  render() {
    return showCounter();
  }
}

export default DemoApp;
