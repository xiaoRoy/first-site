import contacts from "./contacts.json";

class ContactInfo {
  constructor({ id, firstName, lastName, avatar, twitter, notes, favorite }) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
    this.twitter = twitter;
    this.notes = notes;
    this.favorite = favorite;
    this.fullName = `${firstName} ${lastName}`;
  }

  static fromJSON(jsonObject) {
    return new ContactInfo(jsonObject);
  }
}

function readContacts() {
  return contacts.map((jsonObject) => ContactInfo.fromJSON(jsonObject));
}

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function getContacts() {
  return wait(500).then(() => readContacts());
}

export { ContactInfo, readContacts, getContacts };
