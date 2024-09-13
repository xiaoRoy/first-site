import React from "react";

class ButtonList extends React.Component {
  getButton(text) {
    return <button disabled={this.props.disabled}>{text}</button>;
  }

  render() {
    return (
      <aside>
        {this.getButton("Up")}
        {this.getButton("Down")}
      </aside>
    );
  }
}

export default ButtonList;