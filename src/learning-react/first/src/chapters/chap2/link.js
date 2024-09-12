import React from "react";

class Link extends React.Component {
  render() {
    const readMoreAnchor = React.createElement(
      "a",
      { href: "//react.dev" },
      "Read more about React"
    );
    const paragraph = React.createElement("p", null, readMoreAnchor);
    return paragraph;
  }
}


class Links extends React.Component {
    render() {
        const link1 = React.createElement(Link);
        const link2 = React.createElement(Link);
        const link3 = React.createElement(Link);
        return React.createElement(React.Fragment, null, [link1, link2, link3]);
    }
}

export default Links;