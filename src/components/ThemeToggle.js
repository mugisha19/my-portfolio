import React from "react";
import useTheme from "../hooks/useTheme";

export default function ThemeToggle() {
  const [theme, toggleTheme] = useTheme();
  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
    >
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
}
