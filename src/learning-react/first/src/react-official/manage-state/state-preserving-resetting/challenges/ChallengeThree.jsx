import { useEffect, useState } from "react";
import "./styles.css";

function ContactList({ contacts, selectedContactId, onContactSelected }) {
  return (
    <section className="contact-lst">
      <ul>
        {contacts.map((contact) => (
          <li className="contact" key={contact.id}>
            <button
              onClick={() => {
                onContactSelected(contact.id);
              }}
            >
              {contact.id === selectedContactId ? (
                <b>{contact.name}</b>
              ) : (
                contact.name
              )}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Field2({ label, field, onFieldChange }) {
  const internalOnFieldChange = (event) => {
    onFieldChange(event.target.value);
  };
  return (
    <label className="field-three">
      <span>{label}:</span>
      <input type="text" onChange={internalOnFieldChange} value={field} />
    </label>
  );
}

function EditContact2({ initialContact, onSave }) {
  const [contact, setContact] = useState(initialContact);

  // const [name, setName] = useState(intiName);
  // const [email, setEmail] = useState(intiEmail);
  const onNameChange = (newName) => {
    setContact({ ...contact, name: newName });
  };
  const onEmailChange = (newEmail) => {
    setContact({ ...contact, email: newEmail });
  };
  const { name, email } = contact;
  const internalOnReset = () => {
    setContact(initialContact);
  };

  const internalOnSave = () => {
    onSave(contact);
  };
  return (
    <section className="field-container">
      <Field2 label="Name" field={name} onFieldChange={onNameChange}></Field2>
      <Field2
        label="Email"
        field={email}
        onFieldChange={onEmailChange}
      ></Field2>

      <div className="edit-field-options">
        <button onClick={internalOnSave}>Save</button>
        <button onClick={internalOnReset}>Reset</button>
      </div>
    </section>
  );
}

function Field({ label, initField, onFieldChange }) {
  const [field, setField] = useState(initField);
  const internalOnFieldChange = (event) => {
    const updatedFiled = event.target.value;
    setField(updatedFiled);
    onFieldChange(updatedFiled);
  };
  return (
    <label className="field-three">
      <span>{label}:</span>
      <input type="text" onChange={internalOnFieldChange} value={field} />
    </label>
  );
}

function EditContact({ initialContact, onReset }) {
  const { name, email } = initialContact;
  const onNameChange = () => {};
  const onEmailChange = () => {};

  const internalOnReset = () => {
    onReset();
  };
  return (
    <section className="field-container">
      <Field label="Name" initField={name} onFieldChange={onNameChange}></Field>
      <Field
        label="Email"
        initField={email}
        onFieldChange={onEmailChange}
      ></Field>

      <div className="edit-field-options">
        <button>Save</button>
        <button onClick={internalOnReset}>Reset</button>
      </div>
    </section>
  );
}

const initialContacts = [
  { id: 0, name: "Taylor", email: "taylor@mail.com" },
  { id: 1, name: "Alice", email: "alice@mail.com" },
  { id: 2, name: "Bob", email: "bob@mail.com" },
];

function ContactManager() {
  const [contactList, setContactList] = useState(initialContacts);
  const [selectedContactId, setSelectedContactId] = useState(0);
  const selectedContact = contactList.find(
    (contact) => contact.id === selectedContactId
  );

  const onContactSelected = (newlySelectedContactId) => {
    setSelectedContactId(newlySelectedContactId);
  };

  const onSave = (updatedContact) => {
    console.log(updatedContact);
    const updatedContacts = contactList.map((contact) => {
      let result = contact;
      if (contact.id === updatedContact.id) {
        result = updatedContact;
      }
      return result;
    });
    setContactList(updatedContacts);
  };
  return (
    <div>
      <ContactList
        contacts={contactList}
        selectedContactId={selectedContactId}
        onContactSelected={onContactSelected}
      ></ContactList>
      <hr />
      <EditContact2
        initialContact={selectedContact}
        key={selectedContactId}
        onSave={onSave}
      ></EditContact2>
    </div>
  );
}

export default function ContactManagerDemo() {
  return <ContactManager></ContactManager>;
}
