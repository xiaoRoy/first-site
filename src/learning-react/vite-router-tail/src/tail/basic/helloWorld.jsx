import "./styles/helloWorld.css";

function HelloWorld() {
  return (
    <div className="bg-amber-300 h-10 w-full border-2 border-violet-600 rounded-md my-4 p-2">
      <h1 className="text-center font-mono font-extrabold">Hello World</h1>
      <h2 className="text-center font-mono text-[12px] mt-3">Missing</h2>
    </div>
  );
}

export function HelloWorldDemo() {
  return <HelloWorld></HelloWorld>;
}
