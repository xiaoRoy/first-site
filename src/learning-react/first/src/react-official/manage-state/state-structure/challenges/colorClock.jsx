import { useEffect, useState } from "react";

function useTime() {
  const [time, setTime] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

class Color {
  constructor(name) {
    this.name = name;
    this.value = name;
  }
}

const COLOR_NAMES = ["lightcoral", "midnightblue", "rebeccapurple"];

function ColorClockInternal({ initialColor, time }) {
  //   const [color, setColor] = useState(initialColor);
  const clockStyle = {
    color: initialColor.value,
  };
  console.log(clockStyle);

  return <h1 style={clockStyle}>{time.toLocaleTimeString()}</h1>;
}

function ColorClock() {
  const colors = COLOR_NAMES.map((colorName) => new Color(colorName));
  const time = useTime();
  const [color, setColor] = useState(colors[0]);

  const handleColorSelected = (event) => {
    console.log(event.currentTarget);
    const colorName = event.currentTarget.value;

    const selectedColor = colors.find((color) => colorName === color.name);
    console.log(selectedColor);
    if (selectedColor) {
      setColor(selectedColor);
    }
  };
  return (
    <div>
      Pick a color:
      <select name="color" onChange={handleColorSelected}>
        {colors.map((color) => (
          <option key={color.name} id={color.name} value={color.name}>
            {color.name}
          </option>
        ))}
      </select>
      <ColorClockInternal initialColor={color} time={time}></ColorClockInternal>
    </div>
  );
}

export default function ColorClockDemo() {
  return <ColorClock></ColorClock>;
}
