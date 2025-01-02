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

const KEY_SELECTED_EMAIL = "selected-email";

const initialEmails = [
  Email.createEmail("Ready for adventure?", true),
  Email.createEmail("Time to check in!'"),
  Email.createEmail("Festival Begins in Just SEVEN Days!"),
];

function EmailItem({
  email,
  handleFavorite,
  handlerHover,
  isHighlighted,
  isMultiple,
}) {
  const onFavoriteClicked = () => handleFavorite(email);
  const onEmailHovered = () => handlerHover(email);
  const hoveredStyleClassName = isHighlighted ? "highlighted" : "";
  const emailSubject = email.subject;

  const itemWithStar = (
    <>
      <button onClick={onFavoriteClicked}>{email.favoriteTitle}</button>
      {emailSubject}
    </>
  );

  const multipleSelectionItem = (
    <label htmlFor={emailSubject}>
      <input
        type="checkbox"
        id={emailSubject}
        name={KEY_SELECTED_EMAIL}
        value={email.id}
      ></input>
      {emailSubject}
    </label>
  );
  return (
    <li
      onMouseMove={onEmailHovered}
      className={hoveredStyleClassName}
      onFocus={onEmailHovered}
    >
      {isMultiple ? multipleSelectionItem : itemWithStar}
    </li>
  );
}

function Inbox({ emails }) {
  const [emailList, setEmailList] = useState(emails);
  const [hoveredEmailId, setHoveredEmailId] = useState(null);
  const [isMultiple, setMultiple] = useState(false);

  const [selectedEmailIds, setSelectedEmailIds] = useState([]);

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

  const onMultipleSelectionClicked = () => {
    setMultiple((value) => !value);
    setSelectedEmailIds([]);
  };

  const onEmailSelected = (event) => {
    if (event.target.name === KEY_SELECTED_EMAIL) {
      const emailId = event.target.value;
      const index = selectedEmailIds.indexOf(emailId);
      let updatedEmailIds;
      if (index != -1) {
        updatedEmailIds = selectedEmailIds.filter((id) => id !== emailId);
      } else {
        updatedEmailIds = Array.from(selectedEmailIds);
        updatedEmailIds.push(emailId);
      }
      setSelectedEmailIds(updatedEmailIds);
    }
  };

  const selectedEmailsCount = selectedEmailIds.length;
  const letterText = selectedEmailsCount == 1 ? "letter" : "letters";
  const selectedEmailsText = `${selectedEmailsCount} ${letterText}`;

  return (
    <section>
      <div className="inbox-title-container">
        <h2>Inbox</h2>
        <button
          onClick={onMultipleSelectionClicked}
          className="btn-multiple-selection"
        >
          Multiple Selection
        </button>
      </div>

      <ul onChange={onEmailSelected}>
        {emailList.map((email) => (
          <EmailItem
            key={email.id}
            email={email}
            handleFavorite={handleFavorite}
            handlerHover={handleHover}
            isHighlighted={hoveredEmailId === email.id}
            isMultiple={isMultiple}
          ></EmailItem>
        ))}
      </ul>
      {isMultiple && <p>You selected {selectedEmailsText}</p>}
    </section>
  );
}

export default function InboxDemo() {
  return <Inbox emails={initialEmails}></Inbox>;
}
