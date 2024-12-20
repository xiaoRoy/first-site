import { useState } from "react";
import "./styles/travel-pack-plan.css";

class ItemToPack {
  static idCounter = 3;
  constructor(id, title, packed) {
    this.id = id;
    this.title = title;
    this.packed = packed;
  }

  togglePacked() {
    this.packed = !this.packed;
  }

  static createItemToPack(title) {
    return new ItemToPack(ItemToPack.idCounter++, title, false);
  }
}

const initialPackItems = [
  new ItemToPack(0, "Warm socks", true),
  new ItemToPack(1, "Travel journal", false),
  new ItemToPack(2, "Watercolors", false),
];

function PackItem({ id, item, handlePackItemDeleted, handlePackItemPacked }) {
  const title = item.title;
  const [packed, setPacked] = useState(item.packed);
  const onItemDeleted = () => {
    handlePackItemDeleted(id);
  };

  const onItemPacked = () => {
    handlePackItemPacked(id);
    setPacked(item.packed);
  };
  return (
    <li className="pack-item" id={id}>
      <input
        type="checkbox"
        checked={packed}
        name={title}
        id={title}
        onChange={onItemPacked}
      />
      <label className="label-item-to-pack" htmlFor={title}>
        {title}
      </label>
      <input type="button" value="Delete" onClick={onItemDeleted} />
    </li>
  );
}

function TravelPackPlan() {
  const [packItems, setPackItems] = useState(initialPackItems);
  const [addedPackItemTitle, setAddedPackItemTitle] = useState("");

  const handlePackItemAdded = (title) => {
    const newItemToPack = ItemToPack.createItemToPack(title);
    const updatedPackItems = Array.from(packItems);
    updatedPackItems.push(newItemToPack);
    setPackItems(updatedPackItems);
    setAddedPackItemTitle("");
  };

  const handlePackItemDeleted = (id) => {
    const updatedPackItems = packItems.filter((packItem) => id !== packItem.id);
    setPackItems(updatedPackItems);
  };

  const handlePackItemPacked = (id) => {
    const updatedPackItems = packItems.map((packItem) => {
      if (packItem.id === id) {
        packItem.togglePacked();
      }
      return packItem;
    });
    setPackItems(updatedPackItems);
  };

  const packedItemCount = packItems.filter(
    (packItem) => packItem.packed
  ).length;
  const packedStatistic = `${packedItemCount} of ${packItems.length} packed.`;

  return (
    <>
      <div className="travel-pack-plan-container">
        <div>
          <input
            type="input"
            placeholder="Add item"
            onChange={(event) => setAddedPackItemTitle(event.target.value)}
            value={addedPackItemTitle}
          ></input>
          <button onClick={() => handlePackItemAdded(addedPackItemTitle)}>
            Add
          </button>
        </div>
        <ul>
          {packItems.map((item) => (
            <PackItem
              id={item.id}
              key={item.id}
              item={item}
              handlePackItemDeleted={handlePackItemDeleted}
              handlePackItemPacked={handlePackItemPacked}
            ></PackItem>
          ))}
        </ul>
        <hr />
        <p>{packedStatistic}</p>
      </div>
    </>
  );
}

export default function TravelPackPlanDemo() {
  return <TravelPackPlan></TravelPackPlan>;
}
