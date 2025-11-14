import { useState } from "react";

const WIDTH_OPTIONS = [
  { label: "None", value: "" },
  { label: "w-max", value: "w-max" },
  { label: "w-fit", value: "w-fit" },
];

function SelectionsPanel({ widthOption, onWidthChange }) {
  return (
    <div className="font-sans mb-8 p-4 bg-white rounded-xl shadow-2xl w-full max-w-4xl border border-gray-100 center-block-size">
      <h3 className="text-xl font-bold mb-3 text-indigo-700">
        1. Figure Width Utility Class
      </h3>
      <p className="text-sm text-gray-600 mb-4">
        Changes the wrapper width of the `figure` element.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        {WIDTH_OPTIONS.map((option) => (
          <label
            className="flex items-center space-x-2 p-3 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer border border-gray-300"
            key={option.value}
          >
            <input
              type="radio"
              name="figure-width"
              value={option.value}
              checked={widthOption === option.value}
              className="appearance-none h-4 w-4 border-2 border-indigo-500 rounded-full checked:bg-indigo-600 checked:border-transparent transition-all"
              onChange={() => {
                onWidthChange(option.value);
              }}
            />
            <span className="text-gray-700 font-medium">{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

function FigureAndCaption({ widthOption }) {
  const figureStyles = [
    "center-block-size bg-[#e2deed] p-4 rounded-[5px]",
    widthOption,
  ];
  return (
    <div className="py-0 px-4 center-block-size max-w-[800px] ">
      <figure className={figureStyles.join(" ")}>
        <img
            // src="images/blueberry-cheesecake-x.png"
          src="https://media.gettyimages.com/id/847408280/photo/aerial-view-of-paris-with-eiffel-tower-during-sunset.jpg?s=2048x2048&w=gi&k=20&c=hZVjJwRfDvfpFXuEHj11WMEieK1Zs3y6eenlzkzwCiY="
          alt="blue berry cake"
          className="center-block-size max-w-full block"
        />
        <figcaption className="mt-2">
          A photo for a blueberry cheesecake which sounds very delicious.
        </figcaption>
      </figure>
    </div>
  );
}

function FigureCationApp() {
  const [widthOption, setWidthOption] = useState("w-max");
  const onWidthChange = (widthOption) => {
    setWidthOption(widthOption);
  };
  return (
    <div className="p-8">
      <SelectionsPanel
        widthOption={widthOption}
        onWidthChange={onWidthChange}
      ></SelectionsPanel>
      <FigureAndCaption widthOption={widthOption}></FigureAndCaption>
    </div>
  );
}

export default function FigureCationDemo() {
  return <FigureCationApp></FigureCationApp>;
}
