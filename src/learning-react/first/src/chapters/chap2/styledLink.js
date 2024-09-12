import React from "react";

class StyledLink extends React.Component {
  render() {
    const { href } = this.props;
    const anchor = React.createElement("a", { href }, this.props.children);
    return React.createElement("p", null, anchor);
  }
}

class StyledLinks extends React.Component {
  render() {
    const strongText = React.createElement("strong", null, "React");
    const link1 = React.createElement(
      StyledLink,
      {
        href: "//react.dev",
      },
      strongText
    );

    const link2 = React.createElement(
      StyledLink,
      {
        href: "//vuejs.org",
      },
      "Vue"
    );

    const link3 = React.createElement(
      StyledLink,
      {
        href: "//angular.io",
      },
      "Angular"
    );
    return React.createElement(React.Fragment, null, [link1, link2, link3]);
  }
}

export default StyledLinks;
