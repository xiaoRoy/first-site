import React from "react";

class Link extends React.Component {
  render() {
    const { href, framework } = this.props;
    const readMoreAnchor = React.createElement(
      "a",
      { href },
      `Read more about ${framework}`
    );
    const linkWrapper = "React" === framework ? "h1" : "p";

    return React.createElement(linkWrapper, null, readMoreAnchor);
  }
}

class Links extends React.Component {
  render() {
    const link1 = React.createElement(Link, {
      href: "//react.dev",
      framework: "React",
    });
    const link2 = React.createElement(Link, {
      href: "//vuejs.org",
      framework: "Vue",
    });
    const link3 = React.createElement(Link, {
      href: "//angular.io",
      framework: "Angular",
    });
    return React.createElement(React.Fragment, null, [link1, link2, link3]);
  }
}

export default Links;
