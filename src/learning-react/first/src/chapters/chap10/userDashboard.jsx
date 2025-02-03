import "./styles/user-dashboard.css";

function DashboardNav() {
  return (
    <nav className="dashboard-nav">
      <ul>
        <li>Home</li>
        <li>Groups</li>
        <li>Profile</li>
        <li></li>
      </ul>
    </nav>
  );
}

function DashboardNavSecond({ name }) {
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

function WelcomeSection({ name }) {
  return (
    <section id="welcome-section">
      <span>Welcome, {name} !</span>
    </section>
  );
}

function DashBoardMain() {
  
}

function UserDashboard() {
  const name = "Smith";
  return (
    <>
      <DashboardNavSecond name={name}></DashboardNavSecond>
      <WelcomeSection name={name}></WelcomeSection>
    </>
  );
}

export default function UserDashboardDemo() {
  return <UserDashboard></UserDashboard>;
}
