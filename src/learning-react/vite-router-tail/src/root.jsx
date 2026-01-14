import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";
import "./root.css";

export function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Address Book</title>
        <Meta />
        <Links />
        <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

// export function HydrateFallback() {
//   return (
//     <div id="loading-splash" className="bg-amber-400">
//       <div id="loading-splash-spinner" />
//       <p>Loading, please wait...</p>
//     </div>
//   );
// }

export default function Root() {
  return <Outlet></Outlet>;
}
