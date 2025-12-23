import { index, layout } from "@react-router/dev/routes";

export default [
  layout("./rr-main.jsx", [index("./router/address-book/AddressBook.jsx")]),
];
