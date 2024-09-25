import React, { Component } from "react";

class Counter extends Component {
  state = { counter: 0 };

  render() {
    return (
      <p>
        Click:{this.state.counter}
        <button
          onClick={() => this.setState({ counter: this.state.counter + 1 })}
        >
          Add
        </button>
      </p>
    );
  }
}

function showCounter() {
    return <Counter></Counter>
}


export default showCounter;