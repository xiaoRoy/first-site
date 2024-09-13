import React, { Component } from "react";

class DateTimeNow extends Component {
  render() {
    const dateTimeNow = new Date().toLocaleString();
    return <span>Current date and time is {dateTimeNow}.</span>;
  }
}

export default DateTimeNow;