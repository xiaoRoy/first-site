import { Fragment, useEffect, useState } from "react";
import "./styles/text-counter.css";

function TextCounter({ content }) {
  const [textContent, setTextContent] = useState("");
  const textCount = textContent.length;
  useEffect(() => {
    setTextContent(content);
  }, [content]);
  return (
    <Fragment>
      <h2>
        The text count is <span>{textCount}</span>
      </h2>
      <p>{textContent}</p>
    </Fragment>
  );
}

function TextCounterDemo() {
  const [textContent, setTextContent] = useState("");
  const [textOutput, setTextOutput] = useState("");

  return (
    <div className="container-text-counter">
      <div className="text-input">
        <textarea
          rows="5"
          cols="15"
          placeholder="tell us your story?"
          onChange={(event) => setTextContent(event.target.value)}
          value={textContent}
        ></textarea>
        <div>
          <button className="button" onClick={() => setTextOutput(textContent)}>
            Apply
          </button>
          <button
            className="button"
            onClick={() => {
              setTextContent("");
              setTextOutput("");
            }}
          >
            Reset
          </button>
        </div>
      </div>
      <div className="text-output">
        <TextCounter content={textOutput}></TextCounter>
      </div>
    </div>
  );
}

export default TextCounterDemo;
