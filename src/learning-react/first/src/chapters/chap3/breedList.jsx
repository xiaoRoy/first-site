import React, { Fragment } from "react";

class BreedList extends React.Component {
  render() {
    const breedList = this.props.breedList;
    return (
      <dl>
        {breedList.map(({ breed, description }) => (
          <Fragment key={breed}>
            <dt>{breed}</dt>
            <dd>{description}</dd>
          </Fragment>
        ))}
      </dl>
    );
  }

  static use() {
    const breedList = [
      { breed: "Chihuahua", description: "Small breed of dog." },
      { breed: "Corgi", description: "Cute breed of dog." },
      { breed: "Cumberland Sheepdog", description: "Extinct breed of dog." },
    ];
    return <BreedList breedList={breedList}></BreedList>;
  }
}

export default BreedList;
