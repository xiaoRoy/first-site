import "./styles.css";
import places from "./imageData.json";
import { useState } from "react";

export default function ImagePlaceShowcaseDemo() {
  return <ImagePlaceShowcase></ImagePlaceShowcase>;
}

function ImagePlaceShowcase() {
  const [isLarge, setLarge] = useState(false);
  const imageSize = isLarge ? 150 : 100;
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
      <ImagePlaceList imageSize={imageSize}></ImagePlaceList>
    </div>
  );
}

function ImagePlaceList({ imageSize }) {
  return (
    <ul>
      {places.map((place) => (
        <li key={place.id}>
          <Place place={place} imageSize={imageSize}></Place>
        </li>
      ))}
    </ul>
  );
}

function Place({ place, imageSize }) {
  return (
    <>
      <PlaceImage place={place} imageSize={imageSize}></PlaceImage>
      <p>
        <b>{place.name}</b>
        {`: ${place.description}`}
      </p>
    </>
  );
}

function PlaceImage({ place, imageSize }) {
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
