import "./styles/directives-index.css";

function LearningTheme() {
  return (
    <div className="flex justify-around m-4">
      <div className="h-4 w-4 bg-mint-500 text-amber-200"></div>
      <div className="h-4 w-4 bg-red text-amber-200"></div>
    </div>
  );
}

export default function ThemeDemo() {
  return <LearningTheme></LearningTheme>;
}
