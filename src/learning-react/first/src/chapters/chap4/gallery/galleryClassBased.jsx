import React, { Component } from "react";
import "./styles/gallery.css";

class Image extends React.Component {
  constructor(props) {
    super(props);
    this.id = `image-${Math.floor(Math.random() * 1000000)}`;
  }

  render() {
    const { index, title } = this.props;
    return (
      <figure id={this.id} className="image">
        <img src={this.getImageSource(index)} alt={title} />
        <figcaption>
          <h3>Species:{title}</h3>
        </figcaption>
      </figure>
    );
  }

  getImageSource(index) {
    return `//picsum.photos/id/${index}/150/150/`;
  }
}

class Gallery extends Component {
  render() {
    const imageList = this.props.imageList;
    return (
      <section className="gallery">
        {imageList.map(({ index, title }) => (
          <Image index={index} title={title}></Image>
        ))}
      </section>
    );
  }

  static use() {
    const imageList = [
      { index: 1003, title: "Deer" },
      { index: 1020, title: "Bear" },
      { index: 1024, title: "Vulture" },
      { index: 1084, title: "Walrus" },
    ];
    return (
      <main>
        <h1>Animals</h1>
        <Gallery imageList={imageList}></Gallery>
      </main>
    );
  }
}

export default Gallery;
