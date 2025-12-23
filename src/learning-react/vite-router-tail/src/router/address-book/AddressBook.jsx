import "./address-book-index.css";
import ContactCard from "./Contact";
import { readContacts, ContactInfo } from "./data/data";

function Search() {
  return (
    <div className="flex gap-2 border-solid rounded-xl search-outline transition-all duration-50">
      <img
        src="search_24.svg"
        alt="search icon"
        width={24}
        height={24}
        className=""
      ></img>
      <input
        type="text"
        placeholder="Search"
        className="pl-1 min-w-0 outline-none"
      />
    </div>
  );
}

function ToolBar({ className }) {
  return (
    <section className="flex flex-row gap-2 py-4 items-center border-b-1 border-solid border-x2">
      <Search></Search>
      <input type="button" value="New" className="primary-button"></input>
    </section>
  );
}

function ContactList({ contacts, className }) {
  const internalClassNames = ["pt-4 overflow-auto"];
  internalClassNames.push(className);
  const actualClassNames = internalClassNames.join(" ");
  const actualContacts = contacts.slice(0, 5);
  return (
    <nav className={actualClassNames}>
      <ul className="">
        {actualContacts.map((contact) => {
          const { id } = contact;
          const fullName = contact.fullName;
          return (
            <li key={id} className="my-1">
              <a
                href="#"
                className="flex items-center justify-between rounded-lg p-2 text-inherit gap-4 transition duration-100 hover:bg-x2"
              >
                {fullName}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

function ContactSideBar() {
  //use react context to pass the contact list
  const contacts = readContacts();
  return (
    <aside className="flex flex-col w-[22rem] bg-red-x1 h-full border-r border-solid border-x2 padding-h">
      <ToolBar></ToolBar>
      <ContactList contacts={contacts} className={"grow"}></ContactList>
      <div className="flex border-t border-solid border-x2 items-center justify-items-start py-4 m-0">
        <img src="/react-router.svg" alt="react router logo" className="mr-4" />
        <p className="text-base font-medium leading-none">
          React Router Contacts
        </p>
      </div>
    </aside>
  );
}

function AddressBookApp() {
  const fakeContact = new ContactInfo({
    id: "c1a2b3d4-e5f6-7890-a1b2-c3d4e5f67890",
    firstName: "Alexandra",
    lastName: "Reed",
    avatar: "https://i.pravatar.cc/150?img=1",
    twitter: "@AlexReedDev",
    notes: "Met at the JS Conference. Interested in open-source projects.",
    favorite: true,
  });
  return (
    <div className="flex h-full overflow-hidden">
      <ContactSideBar></ContactSideBar>
      <div className="grow-1 overflow-auto py-8 px-16">
        <ContactCard contact={fakeContact}></ContactCard>
      </div>
    </div>
  );
}

export default function AddressBookAppDemo() {
  return <AddressBookApp></AddressBookApp>;
}
