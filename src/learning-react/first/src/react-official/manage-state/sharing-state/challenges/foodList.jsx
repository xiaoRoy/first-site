import { useState } from "react";
import foods from "./foodData";
import "./styles/food-list.css";
class Food {
  constructor(id, name, description) {
    this.id = id;
    this.name = name;
    this.description = description;
  }

  static id = 0;

  static generateFood(name, description) {
    return new Food(Food.id++, name, description);
  }
}

function searchFoods(query, foodList) {
  let result;
  if (query && query.length > 0) {
    const queryLowerCase = query.toLowerCase();
    result = foodList.filter((item) => {
      return item.name
        .split(" ")
        .some((word) => word.toLowerCase().startsWith(queryLowerCase));
    });
  } else {
    result = Array.from(originFoodList);
  }
  return result;
}

const originFoodList = foods.map(
  (item) => new Food(item.id, item.name, item.description)
);

function FoodListWithSearch() {
  const [query, setQuery] = useState("");
  const foodList = searchFoods(query, foods);
  const handleQueryChange = (query) => {
    setQuery(query);
  };
  return (
    <section className="food-list-search">
      <SearchBar
        query={query}
        handleQueryChange={handleQueryChange}
      ></SearchBar>
      <hr />
      <FoodList foodList={foodList}></FoodList>
    </section>
  );
}

function SearchBar({ query, handleQueryChange }) {
  const onQueryChange = (event) => {
    handleQueryChange(event.target.value);
  };
  return (
    <div className="search-bar">
      <label htmlFor="food-search">Search:</label>
      <input
        type="text"
        name="food-search"
        id="food-search"
        value={query}
        onChange={onQueryChange}
      />
    </div>
  );
}

function FoodList({ foodList }) {
  return (
    <table>
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Description</th>
        </tr>
      </thead>
      <tbody>
        {foodList.map((food) => {
          return (
            <tr key={food.id}>
              <th scope="row">{food.name}</th>
              <td>{food.description}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default function FoodListWithSearchDemo() {
  return <FoodListWithSearch></FoodListWithSearch>;
}
