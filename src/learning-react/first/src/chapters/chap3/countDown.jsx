import React, { Component } from "react";

class CountDown extends Component {
  render() {
    const { remaining } = this.props;
    if (remaining === 0) return null;

    const secondInMinute = 60;
    const seconds = remaining % secondInMinute;
    const minutes = Math.floor(remaining / 60);
    return (
      <p>
        {minutes} : {seconds}
      </p>
    );
  }
}
