import React from "react";
import HelloWorldTitle from "./helloWorldTitle";
import ReadMore from "./readMore";

function TitleFragment() {
    const helloWorldTitle = HelloWorldTitle();
    const readMore = ReadMore("//react.dev");
    const group = React.createElement(React.Fragment, null, [helloWorldTitle, readMore]);
    return group;
}

export default TitleFragment;