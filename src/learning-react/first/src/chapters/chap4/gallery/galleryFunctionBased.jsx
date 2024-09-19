import React, { useMemo } from "react";
import "./styles/gallery.css";

function Image({ index, title }) {
  const imageSourceGenerator = () => `//picsum.photos/id/${index}/150/150/`;
  const id = useMemo(() => `image-${Math.floor(Math.random() * 1000000)}`, []);
  return (
    <figure id={id} className="image">
      <img src={imageSourceGenerator()} alt={title} />
      <figcaption>
        <h3>Species:{title}</h3>
      </figcaption>
    </figure>
  );
}

function Gallery({ imageList }) {
  return (
    <section className="gallery">
      {imageList.map(({ index, title }) => (
        <Image index={index} title={title}></Image>
      ))}
    </section>
  );
}

function showGallery() {
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

export default showGallery;
