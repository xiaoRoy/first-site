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
  return (
    <div className="container">
      <div className="text-input">
        <textarea rows="5" cols="15" placeholder="tell us your story?"></textarea>
        <div>
          <button>Apply</button>
          <button>Reset</button>
        </div>
      </div>
      <div className="text-output">
        <TextCounter content={"test"}></TextCounter>
      </div>
    </div>
  );
}

export default TextCounterDemo;
