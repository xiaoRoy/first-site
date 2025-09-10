import "./styles/contact.css";
import { useReducer, useState } from "react";

class Contact {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}

function ContactCard({ contact, isChosen, onChosen }) {
  const email = contact.email;
  const name = contact.name;
  const internalOnChosen = () => onChosen(contact);
  const cardClassArray = ["contact-card"];
  if (isChosen) {
    cardClassArray.push("chosen");
  }
  const initials = name
    ? name
        .split(" ")
        .map((part) => part[0])
        .join("")
        .toUpperCase()
    : "";

  return (
    <li className={cardClassArray.join(" ")} onClick={internalOnChosen}>
      <div className="avatar">
        <span className="initials">{initials}</span>
      </div>
      <div className="contact-info">
        <p className="contact-name">{name}</p>
        <p className="contact-email">{email}</p>
      </div>
    </li>
  );
}

function ContactCardList({ contacts, chosenContact, onChosen }) {
  const chosenEmail = chosenContact ? chosenContact.email : null;
  return (
    <ul className="contact-list">
      {contacts.map((contact) => {
        const email = contact.email;
        return (
          <ContactCard
            key={email}
            contact={contact}
            isChosen={email === chosenEmail}
            onChosen={onChosen}
          ></ContactCard>
        );
      })}
    </ul>
  );
}
const MESSAGE_ACTION = {
  CONTACT_CHOSEN: "contact_chosen",
  MESSAGE_CHANGED: "message_changed",
  SEND: "send",
};

function messageReducer(state, action) {
  let defaultMessage = "Hello";
  let updated = { ...state };
  switch (action.type) {
    case MESSAGE_ACTION.CONTACT_CHOSEN:
      updated.chosenContact = action.chosenContact;
      updated.message = "Hello";
      break;
    case MESSAGE_ACTION.MESSAGE_CHANGED:
      updated.message = action.message;
      break;

    case MESSAGE_ACTION.SEND:
      updated.message = "Hello";
      break;
    default:
      throw Error(`Unknown action:${action.type}`);
  }
  return updated;
}

function ChatBox({ contact, message, onMessageChanged, onMessageSend }) {
  const email = contact ? contact.email : "";
  const name = contact ? contact.name : "";
  const buttonContent = `Send to ${email}`;
  const placeholder = `Chat to ${name}`;
  const internalOnMessageChange = (event) => {
    onMessageChanged(event.target.value);
  };

  const internalOnMessageSend = () => {
    window.alert(`Sending ${message} to ${email}`);
    onMessageSend();
  };
  return (
    <section className="chat-box-container">
      <textarea
        name="chat-box"
        className="chat-box"
        placeholder={placeholder}
        onChange={internalOnMessageChange}
        value={message}
      ></textarea>
      <button onClick={internalOnMessageSend}>{buttonContent}</button>
    </section>
  );
}

function ChatApp() {
  const message = "hello";
  const initialState = {
    chosenContact: null,
    message,
  };

  const [state, dispatch] = useReducer(messageReducer, initialState);
  const onContactChosen = (chosenContact) =>
    dispatch({
      type: MESSAGE_ACTION.CONTACT_CHOSEN,
      chosenContact,
    });

  const onMessageChanged = (message) =>
    dispatch({
      type: MESSAGE_ACTION.MESSAGE_CHANGED,
      message,
    });

  const onMessageSent = () => {
    dispatch({
      type: MESSAGE_ACTION.SEND,
    });
  };

  return (
    <div className="chap-app-container">
      <ContactCardList
        contacts={contacts}
        chosenContact={state.chosenContact}
        onChosen={onContactChosen}
      ></ContactCardList>
      <ChatBox
        contact={state.chosenContact}
        onMessageChanged={onMessageChanged}
        message={state.message}
        onMessageSend={onMessageSent}
      ></ChatBox>
    </div>
  );
}

const contacts = [
  new Contact("Alice Johnson", "alice@example.com"),
  new Contact("Bob Smith", "bob@example.com"),
  new Contact("Charlie Brown", "charlie@example.com"),
  new Contact("Diana Prince", "diana@example.com"),
  new Contact("Ethan Hunt", "ethan@example.com"),
  new Contact("Fiona Gallagher", "fiona@example.com"),
  new Contact("George Miller", "george@example.com"),
  new Contact("Hannah Lee", "hannah@example.com"),
  new Contact("Ian Wright", "ian@example.com"),
  new Contact("Julia Roberts", "julia@example.com"),
];

export default function ChatAppDemo() {
  return <ChatApp></ChatApp>;
}
