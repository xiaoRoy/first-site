import { useState } from "react";
import "./styles/picture.css";

function PictureV2() {
  const [isActive, setActive] = useState(false);

  const pictureStatus = {
    default: "picture",
    active: "picture--active",
  };

  const backgroundStatus = {
    default: "background",
    active: "background--active",
  };

  const pictureClasses = new Set();
  pictureClasses.add(pictureStatus.default);

  const backgroundClasses = new Set();
  backgroundClasses.add(backgroundStatus.default);
  backgroundClasses.add(backgroundStatus.active);

  if (isActive) {
    pictureClasses.add(pictureStatus.active);
    backgroundClasses.delete(backgroundStatus.active);
  } else {
    pictureClasses.delete(pictureClasses.active);
    backgroundClasses.add(backgroundStatus.active);
  }

  return (
    <div
      className={[...backgroundClasses].join(" ")}
      onClick={() => setActive(!isActive)}
    >
      <img
        className={[...pictureClasses].join(" ")}
        src="https://mymodernmet.com/wp/wp-content/uploads/2017/05/rainbow-colored-village-9.jpg"
        alt="Rainbow houses in Kampung Pelangi, Indonesia"
        onClick={(event) => {
          event.stopPropagation();
          setActive(!isActive);
        }}
      />
    </div>
  );
}

export default function PictureV2Demo() {
  return <PictureV2></PictureV2>;
}
