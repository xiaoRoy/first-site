import { createContext, useContext, useState } from "react";
import "./styles/user-dashboard.css";

const NameContext = createContext();

function DashboardNavSecond() {
  const name = useContext(NameContext);
  return (
    <nav className="dashboard-nav">
      <button className="button-nav">Home</button>
      <button className="button-nav">Groups</button>
      <button className="button-nav">Profile</button>
      <button className="button-nav">
        {"\uD83D\uDC64"}
        {name}
      </button>
    </nav>
  );
}

function WelcomeSection() {
  const name = useContext(NameContext);
  return (
    <section id="welcome-section">
      <span>Welcome, {name}!</span>
    </section>
  );
}

function DashBoardMain() {
  return (
    <main>
      <WelcomeSection></WelcomeSection>
    </main>
  );
}

function AdminDashboard() {
  const users = ["one", "two", "smith", "four", "zero"];
  const [user, setUser] = useState(users[0]);
  const onUserChanged = (event) => setUser(event.target.value);
  return (
    <>
      <select name="users" id="users" value={user} onChange={onUserChanged}>
        {users.map((user) => (
          <option key={user} value={user}>
            {user}
          </option>
        ))}
      </select>
      <UserDashboard name={user}></UserDashboard>
    </>
  );
}

function UserDashboard({ name }) {
  return (
    <NameContext.Provider value={name}>
      <DashboardNavSecond></DashboardNavSecond>
      <DashBoardMain></DashBoardMain>
    </NameContext.Provider>
  );
}

export default function UserDashboardDemo() {
  return <AdminDashboard></AdminDashboard>;
}
