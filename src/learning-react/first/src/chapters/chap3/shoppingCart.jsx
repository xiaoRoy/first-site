import React, { Component } from "react";

class ShoppingCart extends Component {
  render() {
    const items = this.props.items;
    return (
      <aside>
        <h1>Shopping Card</h1>
        {items.length === 0 ? (
          <p>Your cart is empty. Go buy something!</p>
        ) : (
          <CardItems items={items}></CardItems>
        )}
      </aside>
    );
  }
}

class CardItems extends Component {
  render() {
    return <div></div>;
  }
}
