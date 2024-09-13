import React, { Component } from "react";

class Icon extends Component {
  render() {
    return <div></div>;
  }
}

class DraftIcon extends Icon {}

class PublishedIcon extends Icon {}

class TrashIcon extends Icon {}

const statusToIcon = {
  draft: <DraftIcon></DraftIcon>,
  published: <PublishedIcon></PublishedIcon>,
  deleted: <TrashIcon></TrashIcon>,
};

class PostStatus extends Component {
  render() {
    return statusToIcon[this.props.status] || statusToIcon.deleted;
  }
}
