import { createContext, useContext } from "react";
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
      <span>Welcome, {name} !</span>
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

function UserDashboard() {
  const name = "Smith";
  return (
    <NameContext.Provider value={name}>
      <DashboardNavSecond></DashboardNavSecond>
      <DashBoardMain></DashBoardMain>
    </NameContext.Provider>
  );
}

export default function UserDashboardDemo() {
  return <UserDashboard></UserDashboard>;
}
