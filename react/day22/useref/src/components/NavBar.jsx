
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const tasks = [
    { name: "Task 1 - Login Form", path: "/task1" },
    { name: "Task 2 - Password", path: "/task2" },
    { name: "Task 3 - Navigation", path: "/task3" },
    { name: "Task 4 - Stopwatch", path: "/task4" },
    { name: "Task 5 - OTP", path: "/task5" },
  ];

  return (
    <nav className="bg-gray-900 px-6 py-5 text-white shadow-lg">
      <h2 className="mb-5 text-2xl font-bold">React useRef Tasks</h2>

      <div className="flex flex-wrap gap-3">
        {tasks.map((task) => (
          <NavLink
            key={task.path}
            to={task.path}
            className={({ isActive }) =>
              `rounded-lg px-4 py-3 text-sm font-medium transition ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "bg-gray-700 hover:bg-blue-500"
              }`
            }
          >
            {task.name}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;
