import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center gap-4 ${
        theme === "Light"
          ? "bg-white text-black"
          : "bg-gray-900 text-white"
      }`}
    >
      <h2 className="text-2xl font-bold">
        Current Theme: {theme}
      </h2>

      <button
        onClick={toggleTheme}
        className="rounded-lg bg-blue-600 px-5 py-2 text-white"
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default ThemeSwitcher;