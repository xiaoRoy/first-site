import { useState } from "react";
import "./styles/inbox.css";

class Email {
  constructor(id, subject, isFavorite) {
    this.id = id;
    this.subject = subject;
    this.isFavorite = isFavorite;
  }

  get favoriteTitle() {
    return this.isFavorite ? "Un-star" : "Star";
  }

  toggleFavorite() {
    this.isFavorite = !this.isFavorite;
  }

  copy() {
    return new Email(this.id, this.subject, this.isFavorite);
  }

  static id = 0;

  static createEmail(title, isFavorite = false) {
    return new Email(Email.id++, title, isFavorite);
  }
}

const initialEmails = [
  Email.createEmail("Ready for adventure?", true),
  Email.createEmail("Time to check in!'"),
  Email.createEmail("Festival Begins in Just SEVEN Days!"),
];

function EmailItem({ email, handleFavorite, handlerHover, isHighlighted }) {
  const onFavoriteClicked = () => handleFavorite(email);
  const onEmailHovered = () => handlerHover(email);
  const hoveredStyleClassName = isHighlighted ? "highlighted" : "";

  return (
    <li
      onMouseMove={onEmailHovered}
      className={hoveredStyleClassName}
      onFocus={onEmailHovered}
    >
      <button onClick={onFavoriteClicked}>{email.favoriteTitle}</button>
      {email.subject}
    </li>
  );
}

function Inbox({ emails }) {
  const [emailList, setEmailList] = useState(emails);
  const [hoveredEmailId, setHoveredEmailId] = useState(null);

  const handleFavorite = (targetEmail) => {
    const updatedEmails = emailList.map((email) => {
      let updatedEmail;
      if (email.id === targetEmail.id) {
        targetEmail.toggleFavorite();
        updatedEmail = targetEmail.copy();
      } else {
        updatedEmail = email;
      }
      return updatedEmail;
    });
    setEmailList(updatedEmails);
  };

  const handleHover = (targetEmail) => {
    setHoveredEmailId(targetEmail.id);
  };

  return (
    <section>
      <h2>Inbox</h2>
      <ul>
        {emailList.map((email) => (
          <EmailItem
            key={email.id}
            email={email}
            handleFavorite={handleFavorite}
            handlerHover={handleHover}
            isHighlighted={hoveredEmailId === email.id}
          ></EmailItem>
        ))}
      </ul>
    </section>
  );
}

export default function InboxDemo() {
  return <Inbox emails={initialEmails}></Inbox>;
}
