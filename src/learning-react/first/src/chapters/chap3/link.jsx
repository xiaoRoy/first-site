import React, { Component, Fragment } from "react";

class Link extends Component {
  render() {
    return (
      <p>
        <a href="//react.dev">Read more about React</a>
      </p>
    );
  }
}

class Links extends Component {
  render() {
    return (
      <Fragment>
        <Link></Link>
        <Link></Link>
        <Link></Link>
      </Fragment>
    );
  }
}

export default Links;
