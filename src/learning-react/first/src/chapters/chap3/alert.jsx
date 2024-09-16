import React, { Fragment } from "react";

class Alert extends React.Component {
  render() {
    const isErrorVisible = this.props.isError;
    const errorEmoji = isErrorVisible && "\u26A0\uFE0F";
    return (
      <p>
        {errorEmoji}
        {this.props.children}
        {errorEmoji}
      </p>
    );
  }
  static use() {
    return (
      <Fragment>
        <Alert>We are almost out of cookies</Alert>
        <Alert isError>We are completely out of ice cream</Alert>
      </Fragment>
    );
  }
}

export default Alert;
