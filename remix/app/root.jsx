import { json } from "@remix-run/node";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { getUser } from "~/session.server";
import tailwindStyles from "~/tailwind.css?url";

export const links = () => [{ rel: "stylesheet", href: tailwindStyles }];

export const meta = () => [
  { charset: "utf-8" },
  { title: "Dexter Budgeting" },
  { name: "viewport", content: "width=device-width,initial-scale=1" },
];

export async function loader({ request }) {
  return json({ user: await getUser(request) });
}

export default function App() {
  return (
    <html lang="en" className="h-full bg-gray-950">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="h-full text-gray-100">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
