import React from "react";

function Title() {
  const world = React.createElement("em", null, " World");
  const title = React.createElement("h1", null, ["Hello ", world, "!"]);
  return title;
}

export default Title;
