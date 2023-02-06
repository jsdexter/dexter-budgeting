import { json } from "@remix-run/node";
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import Header from "./components/Header";
import Main from "./routes/transactions";

import tailwindStylesheetUrl from "./styles/tailwind.css";
import { getUser } from "./session.server";

export const links = () => {
  return [{ rel: "stylesheet", href: tailwindStylesheetUrl }];
};

export const meta = () => ({
  charset: "utf-8",
  title: "Dexter Budgeting",
  viewport: "width=device-width,initial-scale=1",
});

export async function loader({ request }) {
  return json({
    user: await getUser(request),
  });
}

export default function App() {
  return (
    <Document>
        <Outlet />
    </Document>
  )
}

function Document ({ children, title }) {
  return (
    <html lang="en" className="h-full">
    <head>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.3/flowbite.min.css" rel="stylesheet" />
      <Meta />
      <Links />
    </head>
    <body className="h-full">
      {children}
      {process.env.NODE_ENV === "development" ? <LiveReload /> : null}
      <ScrollRestoration />
      <Scripts />
      {/* <script src="remix/node_modules/flowbite/dist/flowbite.min.js"></script> */}
      <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.3/flowbite.min.js"></script>
    </body>
  </html>
  )
}
