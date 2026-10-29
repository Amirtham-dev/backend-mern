
import { NavLink } from "react-router-dom";

const links = [
  { name: "Counter", path: "/task1" },
  { name: "Custom Counter", path: "/task2" },
  { name: "Password", path: "/task3" },
  { name: "Student Form", path: "/task4" },
  { name: "API Users", path: "/task5" },
  { name: "Search Users", path: "/task6" },
  { name: "Todo", path: "/task7" },
  { name: "Home", path: "/task8/home" },
  { name: "About", path: "/task8/about" },
  { name: "Student Details", path: "/task9" },
];

export default function Navbar() {
  return (
    <nav className="bg-slate-900 p-4 text-white shadow-lg">
      <h1 className="mb-4 text-center text-2xl font-bold">
        React Practice
      </h1>

      <div className="flex flex-wrap justify-center gap-2">
        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              `rounded-lg px-3 py-2 text-sm font-medium transition ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "bg-slate-800 text-gray-200 hover:bg-slate-700"
              }`
            }
          >
            {link.name}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
