import { Fragment, useEffect, useState } from "react";
import "./styles/email.css";

function EmailInput({ emailValue }) {
  const [email, setEmail] = useState("");

  useEffect(() => setEmail(emailValue), [emailValue]);

  return (
    <label>
      Email Address:
      <input
        type="email"
        name="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
    </label>
  );
}

function EmailsSelect() {
  const defaultEmail = "daffyduck@looneytunes.invalid";
  const [email, setEmail] = useState(defaultEmail);
  const emails = [
    defaultEmail,
    "bugsbunny@looneytunes.invalid",
    "elmerfudd@looneytunes.invalid",
  ];

  return (
    <Fragment>
      <select
        className="email-select"
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      >
        {emails.map((email) => (
          <option key={email} value={email}>
            {email}
          </option>
        ))}
      </select>
      <EmailInput emailValue={email}></EmailInput>
    </Fragment>
  );
}

function EmailSelectorsDemo() {
  return (
    <div className="container">
      <h2>Select a email:</h2>
      <EmailsSelect></EmailsSelect>
    </div>
  );
}

export default EmailSelectorsDemo;
