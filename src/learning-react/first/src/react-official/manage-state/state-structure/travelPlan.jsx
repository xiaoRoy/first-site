import { initialTravelPlan } from "./travelPlanPlaces";
import "./styles/travel-plan.css";
import { useState } from "react";

function PlaceLeaf({ parentId, id, plan, setPlan }) {
  const parentPlace = plan[parentId];
  const onDoneClicked = () => {
    const updatedChildIds = parentPlace.childIds.filter(
      (childId) => childId !== id
    );

    const updatedParent = { ...parentPlace, childIds: updatedChildIds };
    const newPlan = {
      ...plan,
      [parentId]: updatedParent,
    };
    setPlan(newPlan);
  };
  return <input type="button" value="Done" onClick={onDoneClicked}></input>;
}

function PlaceTree({ parentId, id, plan, setPlan }) {
  const place = plan[id];

  const childPlaceIds = place.childIds;
  const hasChildPlaces = childPlaceIds.length > 0;
  const classNameForLeave = hasChildPlaces ? "" : "place-leave";

  return (
    <li className={classNameForLeave}>
      {place.title}
      {hasChildPlaces ? (
        <ol>
          {childPlaceIds.map((placeId) => (
            <PlaceTree
              id={placeId}
              key={placeId}
              parentId={id}
              plan={plan}
              setPlan={setPlan}
            ></PlaceTree>
          ))}
        </ol>
      ) : (
        <PlaceLeaf
          parentId={parentId}
          id={id}
          plan={plan}
          setPlan={setPlan}
        ></PlaceLeaf>
      )}
    </li>
  );
}

function TravelPlan() {
  const [plan, setPlan] = useState(initialTravelPlan);
  const root = plan[0];

  return (
    <section>
      <h2>Place to Visit</h2>
      <ol>
        {root.childIds.map((childId) => (
          <PlaceTree
            id={childId}
            plan={plan}
            key={childId}
            parentId={0}
            setPlan={setPlan}
          ></PlaceTree>
        ))}
      </ol>
    </section>
  );
}

export default function TravelPlanDemo() {
  return <TravelPlan></TravelPlan>;
}
