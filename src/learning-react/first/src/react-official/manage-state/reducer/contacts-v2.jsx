import "./styles/contact.css";
import { useState, useReducer } from "react";

class Contact {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  copy() {
    return new Contact(this.name, this.email);
  }
}

function ContactCard({ contact, isChosen, onChosen }) {
  const email = contact.email;
  const name = contact.name;
  const internalOnChosen = () => onChosen(email);
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

function ContactCardList({ contacts, chosenEmail, onChosen }) {
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
  switch (action.type) {
    case MESSAGE_ACTION.CONTACT_CHOSEN:
      return {
        ...state,
        chosenEmail: action.chosenEmail,
      };
    case MESSAGE_ACTION.MESSAGE_CHANGED:
      return {
        ...state,
        messages: {
          ...state.messages,
          [state.chosenEmail]: action.message,
        },
      };
    case MESSAGE_ACTION.SEND:
      return {
        ...state,
        messages: {
          ...state.messages,
          [state.chosenEmail]: "",
        },
      };
    default:
      throw Error(`Unknown action:${action.type}`);
  }
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

function useMyReducer(reducer, initial) {
  const [state, setState] = useState(initial);
  const dispatch = (action) => {
    setState((currentState) => reducer(currentState, action));
  };
  return [state, dispatch];
}

function ChatApp() {
  const messages = contacts.reduce((acc, contact) => {
    acc[contact.email] = `Hello, ${contact.name}!`;
    return acc;
  }, {});
  const initialState = {
    chosenEmail: contacts[0].email,
    messages,
  };

  const [state, dispatch] = useMyReducer(messageReducer, initialState);
  const onContactChosen = (chosenEmail) =>
    dispatch({
      type: MESSAGE_ACTION.CONTACT_CHOSEN,
      chosenEmail,
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

  const chosenEmail = state.chosenEmail;

  const chosenContact = contacts.find(
    (contact) => contact.email === chosenEmail
  );
  if (!chosenContact)
    throw Error(`No matched contact found by email: ${chosenEmail}`);
  const message = state.messages[chosenEmail];
  return (
    <div className="chap-app-container">
      <ContactCardList
        contacts={contacts}
        chosenEmail={chosenEmail}
        onChosen={onContactChosen}
      ></ContactCardList>
      <ChatBox
        contact={chosenContact}
        message={message}
        onMessageChanged={onMessageChanged}
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

export default function ChatAppDemoV2() {
  return <ChatApp></ChatApp>;
}
