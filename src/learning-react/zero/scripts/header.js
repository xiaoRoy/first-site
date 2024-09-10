const world = React.createElement("em", null, "world");
const helloWorld = React.createElement("h1", null, "Hello ", world, "!");
const reactRoot = ReactDOM.createRoot(document.getElementById("root"));
reactRoot.render(helloWorld);
