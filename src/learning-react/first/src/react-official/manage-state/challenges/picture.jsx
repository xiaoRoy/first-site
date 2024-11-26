import { useRef } from "react";
import "./styles/picture.css";

function Picture() {
  const backgroundRef = useRef();
  const pictureRef = useRef();
  const pictureId = "picture";
  const onClick = (event) => {
    const targetId = event.target.id;
    if (pictureId === event.target.id) {
        event.stopPropagation();
    }
    backgroundRef.current.classList.toggle("background--active");
    pictureRef.current.classList.toggle("picture--active");
  };
  return (
    <div
      className="background background--active"
      ref={backgroundRef}
      onClick={onClick}
    >
      <img
        id={pictureId}
        className="picture"
        src="https://mymodernmet.com/wp/wp-content/uploads/2017/05/rainbow-colored-village-9.jpg"
        alt="Rainbow houses in Kampung Pelangi, Indonesia"
        ref={pictureRef}
        onClick={onClick}
      />
    </div>
  );
}

export default function PictureDemo() {
  return <Picture></Picture>;
}
