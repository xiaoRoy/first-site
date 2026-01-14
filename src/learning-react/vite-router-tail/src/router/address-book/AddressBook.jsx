import { readContacts, ContactInfo, getContacts } from "./data/data";
import { Outlet, Link } from "react-router";

export async function clientLoader() {
  const contacts = await getContacts();
  return { contacts };
}

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
  // const actualContacts = contacts.slice(0, 5);
  const actualContacts = contacts;
  return (
    <nav className={actualClassNames}>
      {actualContacts ? (
        <ul className="">
          {actualContacts.map((contact) => {
            const { id } = contact;
            const fullName = contact.fullName;
            const contactLink = `/contacts/${id}`;
            return (
              <li key={id} className="my-1">
                <Link
                  to={contactLink}
                  className="flex items-center justify-between rounded-lg p-2 text-inherit gap-4 transition duration-100 hover:bg-x2"
                >
                  {fullName}
                </Link>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>
          <i className="text-x4">No Contacts</i>
        </p>
      )}
    </nav>
  );
}

function ContactSideBar({ contacts }) {
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

export default function AddressBookApp({ loaderData }) {
  const { contacts } = loaderData;
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
    <div className="flex h-full overflow-hidden" id="address-book-app">
      <ContactSideBar contacts={contacts}></ContactSideBar>
      <div className="grow-1 overflow-auto py-8 px-16">
        <Outlet></Outlet>
      </div>
    </div>
  );
}
