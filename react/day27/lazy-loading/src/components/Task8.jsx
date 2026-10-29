
import { lazy, Suspense } from "react";
import {
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import Home from "./Home";

const About = lazy(() => import("./About"));

export default function Task8() {
  const navigate = useNavigate();

  return (
    <div className="mx-auto max-w-2xl rounded-2xl bg-white p-8 shadow-xl">
      <h2 className="mb-6 text-center text-2xl font-bold">
        Task 8: Lazy Loading
      </h2>

      <div className="mb-6 flex flex-wrap justify-center gap-3">
        <button
          onClick={() => navigate("/task8/home")}
          className="rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700"
        >
          Home
        </button>

        <button
          onClick={() => navigate("/task8/about")}
          className="rounded-lg bg-purple-600 px-5 py-3 font-semibold text-white hover:bg-purple-700"
        >
          Show About
        </button>
      </div>

      <Suspense
        fallback={
          <p className="rounded-lg bg-yellow-50 p-5 text-center font-semibold text-yellow-700">
            Loading...
          </p>
        }
      >
        <Routes>
          <Route index element={<Navigate to="home" replace />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
      </Suspense>
    </div>
  );
}
