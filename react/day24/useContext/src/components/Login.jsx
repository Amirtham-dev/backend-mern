import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const { isLoggedIn, username, login, logout } =
    useContext(AuthContext);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-gray-100">
      {isLoggedIn ? (
        <>
          <h2 className="text-2xl font-bold text-green-700">
            Welcome {username}
          </h2>

          <button
            onClick={logout}
            className="rounded-lg bg-red-600 px-5 py-2 text-white"
          >
            Logout
          </button>
        </>
      ) : (
        <>
          <h2 className="text-xl font-semibold">Please Login</h2>

          <button
            onClick={login}
            className="rounded-lg bg-blue-600 px-5 py-2 text-white"
          >
            Login
          </button>
        </>
      )}
    </div>
  );
};

export default Login;