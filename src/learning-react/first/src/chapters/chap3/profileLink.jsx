import React from "react";

class ProfileLink extends React.Component {
  render() {
    const { url, label } = this.props;
    return (
      <a href={url} title={label} target="_blank">
        Profile
      </a>
    );
  }
}
export default ProfileLink;
