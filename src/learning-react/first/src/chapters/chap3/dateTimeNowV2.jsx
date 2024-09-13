import React, { Component } from "react";

class DataTimeNowV2 extends Component {
  render() {
    const dateTimeNow = new Date().toLocaleString();
    /* What happens if you mess up and set a custom property on an HTML element?
     * React will render it anyway. (P50)
     **/
    const now = <date>{dateTimeNow}</date>;
    const message = <p>Today is {now}</p>;
    return message;
  }
}

export default DataTimeNowV2;
