import "./styles/contact.css";
import { useState } from "react";

class Contact {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}

function ContactCard({ name, email, isChosen, onChosen }) {
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
    <div className={cardClassArray.join(" ")} onClick={internalOnChosen}>
      <div className="avatar">
        <span className="initials">{initials}</span>
      </div>
      <div className="contact-info">
        <p className="contact-name">{name}</p>
        <p className="contact-email">{email}</p>
      </div>
    </div>
  );
}

function ContactCardList({ contacts }) {
  const [chosenEmail, setChosenEmail] = useState(null);
  const onChosen = (email) => setChosenEmail(email);
  return contacts.map((contact) => {
    const email = contact.email;
    return (
      <ContactCard
        key={email}
        {...contact}
        isChosen={email === chosenEmail}
        onChosen={onChosen}
      ></ContactCard>
    );
  });
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

export default function ContactCardDemo() {
  return <ContactCardList contacts={contacts}></ContactCardList>;
}
