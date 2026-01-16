import "./styles.css";
import places from "./imageData.json";
import { useState } from "react";
import { createContext } from "react";
import { useContext } from "react";

export default function ImagePlaceShowcaseDemo() {
  return <ImagePlaceShowcase></ImagePlaceShowcase>;
}
const IMAGE_SIZE = {
  LARGE: 150,
  SMALL: 100,
};

const ImageSizeContext = createContext(IMAGE_SIZE.LARGE);

function ImagePlaceShowcase() {
  const [isLarge, setLarge] = useState(false);
  const imageSize = isLarge ? IMAGE_SIZE.LARGE : IMAGE_SIZE.SMALL;
  const onLargeChange = (isLarge) => setLarge(isLarge);
  return (
    <div>
      <label>
        <input
          type="checkbox"
          onChange={(event) => onLargeChange(event.target.checked)}
          value={isLarge}
        />
        Use large images
      </label>
      <hr />
      <ImageSizeContext.Provider value={imageSize}>
        <ImagePlaceList></ImagePlaceList>
      </ImageSizeContext.Provider>
    </div>
  );
}

function ImagePlaceList() {
  return (
    <ul>
      {places.map((place) => (
        <li key={place.id}>
          <Place place={place}></Place>
        </li>
      ))}
    </ul>
  );
}

function Place({ place }) {
  return (
    <>
      <PlaceImage place={place}></PlaceImage>
      <p>
        <b>{place.name}</b>
        {`: ${place.description}`}
      </p>
    </>
  );
}

function PlaceImage({ place }) {
  const imageSize = useContext(ImageSizeContext);
  const imageUrl = `https://i.imgur.com/${place.imageId}l.jpg`;
  const styles = {
    width: imageSize,
    height: imageSize,
  };
  return (
    <div style={styles} className="fake-image"></div>
    // <img
    //   src={imageUrl}
    //   alt={place.name}
    //   width={imageSize}
    //   height={imageSize}
    // ></img>
  );
}
