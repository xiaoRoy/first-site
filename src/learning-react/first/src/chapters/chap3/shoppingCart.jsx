import React, { Component, Fragment } from "react";

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

class GuestButton extends Component {
  render() {
    const canCheckout = this.props.canCheckout;
    return (
      <Fragment>
        <button>Login</button>
        <button disabled={canCheckout}>Checkout as guest</button>
      </Fragment>
    );
  }
}

class UserButton extends Component {
  render() {
    const { canCheckout, hasCreditCard, hasAddress } = this.props.userStatus;
    return hasCreditCard ? (
      <Fragment>
        <button disabled={canCheckout}>Checkout</button>
        {hasAddress && <button disabled={canCheckout}>One click buy</button>}
      </Fragment>
    ) : (
      <button>Add credit card</button>
    );
  }
}

class ShoppingCartV2 extends Component {
  render() {
    //under mvvm, these logics should go into view model;
    const isLoggedIn = this.props.users !== null;
    const items = this.props.items;
    const canCheckout =
      items.length > 0 && items.every((item) => !item.outOfStock);
    const hasCreditCard = this.props.user.creditCard !== null;
    const hasAddress = this.props.user.address !== null;
    const userStatus = { canCheckout, hasCreditCard, hasAddress };

    return isLoggedIn ? (
      <UserButton userStatus={userStatus}></UserButton>
    ) : (
      <GuestButton canCheckout={canCheckout}></GuestButton>
    );
  }
}
