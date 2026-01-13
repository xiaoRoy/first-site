import { index, layout, route } from "@react-router/dev/routes";
const addressBookBasePath = "./router/address-book/routes/";
export default [
  layout("./rr-main.jsx", [
    index("./router/address-book/AddressBook.jsx"),
    route("contacts/:contactId", `${addressBookBasePath}ContactDetailPage.jsx`),
  ]),

  route("todo", "./react-official/use-effects/not-need/challenge-one/Todo.jsx"),
];
