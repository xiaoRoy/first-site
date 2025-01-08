import { Fragment, useState } from "react";
import products from "./product-data";
import "./styles/product-data.css";


class Product {
  constructor(name, price, stocked, category) {
    this.name = name;
    this.price = price;
    this.stocked = stocked;
    this.category = category;
  }
}

function SearchBar({
  query,
  isStockedOnly,
  onQueryChanged,
  onStockedOnlyChanged,
}) {
  const onQueryUpdated = (event) => onQueryChanged(event);
  const onStockedOnlyUpdated = (event) => onStockedOnlyChanged(event);
  return (
    <form className="search-bar">
      <ul>
        <li>
          <label htmlFor="product-search"></label>
          <input
            id="product-search"
            name="product-search-query"
            type="search"
            placeholder="Search..."
            value={query}
            onChange={onQueryUpdated}
          />
        </li>
        <li>
          <input
            type="checkbox"
            name="is-stock-only"
            id="is-stocked-only"
            value={isStockedOnly}
            onChange={onStockedOnlyUpdated}
          />{" "}
          <label htmlFor="is-stocked-only">Only show products in stock</label>
        </li>
      </ul>
    </form>
  );
}

function ProductTable({ products }) {
  let lastCategory = null;
  const rows = [];
  let indexOfCategory = 0;
  products.forEach((product) => {
    const currentCategory = product.category;
    if (lastCategory !== currentCategory) {
      lastCategory = currentCategory;
      const keyCategoryRow = `${currentCategory}#${indexOfCategory}`;
      const categoryRow = (
        <ProductCategoryRow
          category={product.category}
          key={keyCategoryRow}
        ></ProductCategoryRow>
      );
      rows.push(categoryRow);
      indexOfCategory++;
    }
    const productRow = (
      <ProductRow product={product} key={product.name}></ProductRow>
    );
    rows.push(productRow);
  });

  return (
    <table>
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function ProductCategoryRow({ category }) {
  return (
    <tr>
      <th colSpan="2">{category}</th>
    </tr>
  );
}

function ProductRow({ product }) {
  const productNameClasses = [];
  if (!product.stocked) {
    productNameClasses.push("not-stocked");
  }

  return (
    <tr>
      <th>{product.name}</th>
      <td>
        <span className={productNameClasses.join(" ")}>{product.price}</span>
      </td>
    </tr>
  );
}

function FilterProductTable() {
  const [query, setQuery] = useState("");
  const [isStockedOnly, setStockedOnly] = useState(false);

  const onQueryChanged = (event) => {
    setQuery(event.target.value);
  };

  const onStockedOnlyChanged = (event) => {
    setStockedOnly(event.target.checked);
  };
  const queryLowerCase = query.toLowerCase();
  let result = false;
  const searchProduct = (product) => {
    if (!isStockedOnly) {
      const productName = product.name.toLowerCase();
      const indexOfQuery = productName.indexOf(queryLowerCase);
      result = indexOfQuery !== -1;
    } else {
      result = product.stocked;
    }
    return result;
  };

  const productsToDisplay = products.filter(searchProduct);
  return (
    <div>
      <SearchBar
        query={query}
        isStockedOnly={isStockedOnly}
        onQueryChanged={onQueryChanged}
        onStockedOnlyChanged={onStockedOnlyChanged}
      ></SearchBar>
      <ProductTable products={productsToDisplay}></ProductTable>
    </div>
  );
}

export default function ProductTableDemo() {
  return <FilterProductTable></FilterProductTable>;
}
