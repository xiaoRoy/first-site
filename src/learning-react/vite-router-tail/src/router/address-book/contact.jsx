function ContactCard({ contact }) {
  return (
    <div className="flex items-start">
      <img src={contact.avatar} alt="avatar" className="rounded-3xl" />
      <div>
        <div className="flex">
          <h1 className="text-4xl/tight font-bold outline-none">{contact.fullName}</h1>
          <img src="" alt="favorite" />
        </div>
        <a href="">
          <span>{contact.twitter}</span>
        </a>
        <p>{contact.notes}</p>
        <div>
          <button className="inline-block">Edit</button>
          <button className="inline-block">Delete</button>
        </div>
      </div>
    </div>
  );
}

export default ContactCard;
