import { useState } from "react";

import ThemeProvider from "./provider/ThemeProvider";
import AuthProvider from "./provider/AuthProvider";
import MiniAuthProvider from "./provider/MiniAuthProvider";
import UserProvider from "./provider/Provider";

import ThemeSwitcher from "./components/ThemeSwitcher";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import Navbar from "./components/Navbar";
import MiniDashboard from "./components/MiniDashboard";

import withAuth from "./hoc/withAuth";
import withMiniAuth from "./hoc/withMiniAuth";

const ProtectedDashboard = withAuth(Dashboard);
const ProtectedProfile = withAuth(Profile);
const ProtectedMiniDashboard = withMiniAuth(MiniDashboard);

const App = () => {
  const [task, setTask] = useState("2");

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-3 bg-gray-200 p-4">
        {["2", "3", "4", "5"].map((number) => (
          <button
            key={number}
            onClick={() => setTask(number)}
            className={`rounded-lg px-4 py-2 text-white ${
              task === number ? "bg-blue-700" : "bg-gray-600"
            }`}
          >
            Task {number}
          </button>
        ))}
      </div>

      {task === "2" && (
        <ThemeProvider>
          <ThemeSwitcher />
        </ThemeProvider>
      )}

      {task === "3" && (
        <AuthProvider>
          <Login />
        </AuthProvider>
      )}

      {task === "4" && (
        <AuthProvider>
          <UserProvider>
            <div className="min-h-screen space-y-6 bg-gray-100 p-8">
              <Login />

              <div className="grid gap-6 md:grid-cols-2">
                <ProtectedDashboard />
                <ProtectedProfile />
              </div>
            </div>
          </UserProvider>
        </AuthProvider>
      )}

      {task === "5" && (
        <MiniAuthProvider>
          <Navbar />

          <div className="flex min-h-[80vh] items-center justify-center bg-gray-100 p-6">
            <ProtectedMiniDashboard />
          </div>
        </MiniAuthProvider>
      )}
    </div>
  );
};

export default App;