import { useState } from "react";
import "./styles.css";
function Field({ label }) {
  const [text, setText] = useState("");
  return (
    <label className="name-label">
      <span>{label}:</span>
      <input
        type="text"
        value={text}
        placeholder={label}
        onChange={(e) => setText(e.target.value)}
      />
    </label>
  );
}

function NamesInput() {
  const [fieldsOrder, setFieldOrder] = useState(["first name", "last name"]);
  const onOrderChange = () => {
    setFieldOrder(fieldsOrder.toReversed());
  };
  return (
    <div>
      <div className="names-container">
        {fieldsOrder.map((field) => (
          <Field label={field} key={field}></Field>
        ))}
      </div>
      <button onClick={onOrderChange}>Reverse order</button>
    </div>
  );
}

export default function NamesInputDemo() {
  return <NamesInput></NamesInput>;
}
