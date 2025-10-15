import "./styles/helloWorld.css";

function DarkMode() {
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white">
        Hello!
    </div>
  );
}

export default function DarkModeDemo() {
  return <DarkMode></DarkMode>;
}
