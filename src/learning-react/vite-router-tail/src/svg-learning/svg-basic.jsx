import "./svg-basic.css";

function Rectangle() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      id="svg-basic-rectangle"
    >
      <rect
        x="10"
        y="10"
        width="40"
        height="40"
        fill="#f1ab11"
        stroke="#000"
        strokeWidth="1px"
      ></rect>
    </svg>
  );
}

function Circle({ width, height }) {
  return (
    <svg
      height={height}
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      id="svg-basic-rectangle"
    >
      <circle
        cx="50"
        cy="50"
        r="30"
        fill="#f1ab11"
        stroke="#000"
        strokeWidth="1"
      ></circle>
    </svg>
  );
}

function SizeDemo() {
  return (
    <svg viewBox="0 0 100 100" height="100px" width="100px">
      <rect x="0" y="0" width="40" height="40" fill="red" />

      <rect x="20" y="20" width="40" height="40" fill="blue" />
    </svg>
  );
}

function CircleButton() {
  return (
    <button className="svg-circle-button">
      <Circle height={24} width={24}></Circle>
      <span>Click Me!</span>
    </button>
  );
}

function SvgBasicDemo() {
  return (
    <div id="svg-container">
      <CircleButton></CircleButton>
    </div>
  );
}

export { SvgBasicDemo };
