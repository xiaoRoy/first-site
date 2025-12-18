import { FavoriteButton } from "./favorite-button";

function ContactCard({ contact }) {
  return (
    <div className="flex">
      <img
        src={contact.avatar}
        alt="avatar"
        className="rounded-3xl w-48 h-48 mr-8 bg-x3 object-cover"
      />
      <div>
        <div className="flex items-center gap-2">
          <h1
            className="text-[2rem]/tight font-bold outline-none focus:text-focus"
            tabIndex="0"
          >
            {contact.fullName}
          </h1>
          <FavoriteButton size={56} initIsFavorite={false}></FavoriteButton>
        </div>
        <a
          href=""
          className="text-[1.5rem] text-action hover:underline decoration-2"
        >
          <span>{contact.twitter}</span>
        </a>
        <p>{contact.notes}</p>
        <div className="my-4">
          <button className="inline-block mx-4 primary-button">Edit</button>
          <button className="inline-block mx-4 primary-button">Delete</button>
        </div>
      </div>
    </div>
  );
}

export default ContactCard;
