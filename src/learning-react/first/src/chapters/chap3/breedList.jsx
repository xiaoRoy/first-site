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
}

export default BreedList;