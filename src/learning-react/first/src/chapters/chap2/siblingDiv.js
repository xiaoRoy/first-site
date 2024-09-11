import React from "react";
import HelloWorldTitle from "./helloWorldTitle";
import ReadMore from "./readMore";


function TitleDiv() {
    const helloWorldTitle = HelloWorldTitle();
    const readMore = ReadMore("//react.dev");
    const group = React.createElement("div", null, [helloWorldTitle, readMore]);
    return group;
}

export default TitleDiv;