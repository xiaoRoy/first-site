import React from "react";

class HelloWorld extends React.Component {
  render() {
    return (
      <h1>
        Hello <em>World</em>!
      </h1>
    );
  }

  generateTitle() {
    const world = <em>World</em>;
    return <h1>Hello {world}!</h1>;
  }
}

export default HelloWorld;
