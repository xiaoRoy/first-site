import React from "react";

class Select extends React.Component {
  render() {
    const items = this.props.items;
    return (
      <select>
        {items.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    );
  }
}

export default Select;
