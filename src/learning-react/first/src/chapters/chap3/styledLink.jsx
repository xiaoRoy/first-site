import React from "react";

class StyledLink extends React.Component {
  render() {
    const url = this.props.url;
    return (
      <p>
        <a href={url}>{this.props.children}</a>
      </p>
    );
  }
}

class StyledLinks extends React.Component {
  render() {
    return (
      <React.Fragment>
        <StyledLink url="//react.dev">
          <strong>React</strong>
        </StyledLink>
        <StyledLink url="//vuejs.org">Vue</StyledLink>
        <StyledLink url="//angular.io">Angular</StyledLink>
      </React.Fragment>
    );
  }
}
export default StyledLinks;