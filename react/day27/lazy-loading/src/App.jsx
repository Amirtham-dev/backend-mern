
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

import Task1 from "./components/Task1";
import Task2 from "./components/Task2";
import Task3 from "./components/Task3";
import Task4 from "./components/Task4";
import Task5 from "./components/Task5";
import Task6 from "./components/Task6";
import Task7 from "./components/Task7";
import Task8 from "./components/Task8";
import Task9 from "./components/Task9";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-100">
      <Navbar />

      <main className="mx-auto max-w-7xl p-4 sm:p-8">
        <Routes>
          <Route path="/" element={<Navigate to="/task1" replace />} />

          <Route path="/task1" element={<Task1 />} />
          <Route path="/task2" element={<Task2 />} />
          <Route path="/task3" element={<Task3 />} />
          <Route path="/task4" element={<Task4 />} />
          <Route path="/task5" element={<Task5 />} />
          <Route path="/task6" element={<Task6 />} />
          <Route path="/task7" element={<Task7 />} />

          <Route path="/task8/*" element={<Task8 />} />
          <Route path="/task9" element={<Task9 />} />

          <Route
            path="*"
            element={
              <div className="rounded-xl bg-white p-8 text-center shadow">
                <h2 className="text-2xl font-bold">404 - Page Not Found</h2>
                <p className="mt-2 text-gray-500">
                  Please select a task from the navbar.
                </p>
              </div>
            }
          />
        </Routes>
      </main>
    </div>
  );
}
