import { useState } from "react";
import "./styles/hex-color.css";

const PLACE_HOLDER = `conic-gradient(
grey 0.25turn, white 0 0.5 turn
grey 0 0.75turn, white 0 1turn )`;

function HexColor() {
  const [color, setColor] = useState("BADA55");
  const hexColorValueLength = 6;
  const background =
    color.length == hexColorValueLength ? `#${color}` : PLACE_HOLDER;
  const onColorChanged = (event) => {
    const colorValue = event.target.value
      .replace(/[^0-9a-f]/gi, "")
      .toUpperCase();
    setColor(colorValue);
  };
  const colorOutputStyle = { background };
  return (
    <form className="hex-color-form">
      <label htmlFor="color">
        <input
          type="text"
          name="color"
          id="color"
          value={color}
          onChange={onColorChanged}
        />
      </label>
      <span className="output" style={colorOutputStyle}></span>
    </form>
  );
}

export default function HexColorDemo() {
  return <HexColor></HexColor>;
}
