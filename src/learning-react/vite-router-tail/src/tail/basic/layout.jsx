import "./styles/helloWorld.css";

function ChildItem({ color }) {
  const styles = ["h-16", "w-16", "rounded-full", color].join(" ");

  return <div className={styles}></div>;
}

function BasicLayout() {
  return (
    <div className="flex flex-col justify-evenly space-y-6 m-2">
      <ChildItem color={"bg-blue-500"}></ChildItem>
      <ChildItem color={"bg-orange-500"}></ChildItem>
      <ChildItem color={"bg-green-500"}></ChildItem>
    </div>
  );
}

function GridLayout() {
  return (
    <div className="grid grid-cols-3 gap mt-2 mx-2">
      <ChildItem color={"bg-blue-500"}></ChildItem>
      <ChildItem color={"bg-orange-500"}></ChildItem>
      <ChildItem color={"bg-green-500"}></ChildItem>
    </div>
  );
}

export function BasicLayoutDemo() {
  return <GridLayout></GridLayout>;
}
