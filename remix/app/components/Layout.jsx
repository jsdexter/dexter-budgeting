import { Form, NavLink } from "@remix-run/react";
import { useUser } from "~/utils";

export default function Layout({ children }) {
  const user = useUser();
  return (
    <div className="flex h-full">
      <aside className="w-60 bg-gray-900 flex flex-col border-r border-gray-800 flex-shrink-0">
        <div className="p-6 border-b border-gray-800">
          <h1 className="text-lg font-bold text-indigo-400">Dexter Budget</h1>
          <p className="text-xs text-gray-500 mt-1 truncate">{user.email}</p>
        </div>
        <nav className="flex-1 p-3 space-y-1">
          <NavItem to="/dashboard" icon="📊">Dashboard</NavItem>
          <NavItem to="/bills" icon="📋">Bills</NavItem>
          <NavItem to="/history" icon="📅">History</NavItem>
        </nav>
        <div className="p-3 border-t border-gray-800">
          <Form action="/logout" method="post">
            <button className="w-full text-left text-sm text-gray-500 hover:text-white px-3 py-2 rounded-lg hover:bg-gray-800 transition">
              ← Sign out
            </button>
          </Form>
        </div>
      </aside>
      <main className="flex-1 overflow-y-auto">{children}</main>
    </div>
  );
}

function NavItem({ to, icon, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition ${
          isActive
            ? "bg-indigo-600 text-white"
            : "text-gray-400 hover:bg-gray-800 hover:text-white"
        }`
      }
    >
      <span>{icon}</span>
      {children}
    </NavLink>
  );
}
