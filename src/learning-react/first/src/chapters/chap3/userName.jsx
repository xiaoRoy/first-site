import React, { Component } from "react";

class UserName extends Component {
  render() {
    const { userName, isVerified } = this.props;
    return (
      <p>
        {userName}
        {isVerified && <Checkmark></Checkmark>}
      </p>
    );
  }
}

class Checkmark extends Component {
  render() {
    return React.Fragment;
  }
}
