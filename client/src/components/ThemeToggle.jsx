import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <button
      className="px-3 py-1 border rounded"
      onClick={() => setDarkMode(!darkMode)}
    >
      {darkMode ? "Light" : "Dark"}
    </button>
  );
}
