import React, { Fragment, useState } from "react";
import "./styles/contact.css";

function Field({ name, childId, label }) {
  return (
    <Fragment>
      <div className="field">
        <label htmlFor={childId}>{label}</label>
        <input type="text" name={name} id={childId} className="contact-input" />
      </div>
    </Fragment>
  );
}
const FIELD_IDS = {
  USER: "fieldset-user",
  REQUEST: "fieldset-request",
  NONE: "none",
};

const COLOR_FOCUSED = "oldlace";
const COLOR_BLURRED = "transparent";

function getBackgroundColor(currentTargetId, fieldId) {
  return currentTargetId === fieldId ? COLOR_FOCUSED : COLOR_BLURRED;
}

function Contact() {
  const [focus, setFocus] = useState(FIELD_IDS.NONE);
  const onFocus = (reactEvent) => {
    const currentTargetId = reactEvent.currentTarget.id;
    setFocus(currentTargetId);
  };

  const onBlur = () => {
    setFocus(FIELD_IDS.NONE);
  };
  return (
    <form className="container" onBlur={onBlur}>
      <h1>Contact</h1>
      <fieldset
        id={FIELD_IDS.USER}
        onFocus={onFocus}
        style={{
          backgroundColor: getBackgroundColor(focus, FIELD_IDS.USER),
        }}
      >
        <legend>User</legend>
        <Field name="name" childId="name" label="Name:"></Field>
        <Field name="email" childId="email" label="Email:"></Field>
      </fieldset>
      <fieldset
        id={FIELD_IDS.REQUEST}
        onFocus={onFocus}
        style={{
          backgroundColor: getBackgroundColor(focus, FIELD_IDS.REQUEST),
        }}
      >
        <legend>Request</legend>
        <Field name="subject" id="subject" label="Subject:"></Field>
        <Field name="body" id="body" label="Body:"></Field>
      </fieldset>
    </form>
  );
}

export default function ContactDemo() {
  return <Contact></Contact>;
}
