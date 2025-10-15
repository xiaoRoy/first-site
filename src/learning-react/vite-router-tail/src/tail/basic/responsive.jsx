import "./styles/helloWorld.css";

function ResponsiveContainer() {
  return (
    <div className="sm:bg-amber-500 md:bg-amber-700 lg:bg-amber-900">
      <p className="text-cyan-100">it appears on screen wider than 768px</p>
    </div>
  );
}

export default function ResponsiveContainerDemo() {
  return <ResponsiveContainer></ResponsiveContainer>;
}
