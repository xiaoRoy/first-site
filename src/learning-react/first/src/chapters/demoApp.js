import React, { Component } from "react";

import BreedList from "./chap3/breedList";

class DemoApp extends Component {
  render() {
    const breedList = [
      { breed: "Chihuahua", description: "Small breed of dog." },
      { breed: "Corgi", description: "Cute breed of dog." },
      { breed: "Cumberland Sheepdog", description: "Extinct breed of dog." },
    ];
    return <BreedList breedList={breedList}></BreedList>;
  }
}

export default DemoApp;
