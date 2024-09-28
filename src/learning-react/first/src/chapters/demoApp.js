import { Component } from "react";
import CountdownDemo from "./chap6/functionalCountdown";
import TextCounterDemo from "./chap6/textCounter";
import EmailSelectorsDemo from "./chap6/emailInput";



class DemoApp extends Component {
  render() {
    // return <TextCounterDemo></TextCounterDemo>
    // return <CountdownDemo></CountdownDemo>
    return <EmailSelectorsDemo></EmailSelectorsDemo>
  }
}

export default DemoApp;
