import { index, route } from "@react-router/dev/routes";

// export default [route("contacts/:contactId", "routes/contact.tsx")];
export default [
    index("./rr-main.jsx"),
    route("*?", "catch-all.jsx"),
];