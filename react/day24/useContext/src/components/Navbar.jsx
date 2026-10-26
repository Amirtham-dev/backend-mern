import { useContext } from "react";
import { MiniAuthContext } from "../context/MiniAuthContext";

const Navbar = () => {
  const { user, login, logout } = useContext(MiniAuthContext);

  return (
    <nav className="flex items-center justify-between bg-gray-900 px-6 py-4 text-white">
      <h2 className="text-xl font-bold">My App</h2>

      {user ? (
        <div className="flex items-center gap-4">
          <span>Welcome {user.name}</span>

          <button
            onClick={logout}
            className="rounded bg-red-500 px-4 py-2"
          >
            Logout
          </button>
        </div>
      ) : (
        <button
          onClick={login}
          className="rounded bg-blue-500 px-4 py-2"
        >
          Login
        </button>
      )}
    </nav>
  );
};

export default Navbar;