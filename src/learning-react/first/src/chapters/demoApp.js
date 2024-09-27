import { Component } from "react";
import showEmailSelectors from "./chap6/emailInput";
import showCountdown from "./chap6/functionalCountdown";



class DemoApp extends Component {
  render() {
    return showCountdown()
  }
}

export default DemoApp;
