import { useEffect } from "react";

interface ThemeToggleProps {
  isDark: boolean;
  setIsDark: (value: boolean) => void;
}

export function ThemeToggle({ isDark, setIsDark }: ThemeToggleProps) {
  useEffect(() => {
    try {
      const saved = localStorage.getItem("theme");
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const shouldBeDark = saved === "dark" || (!saved && prefersDark);
      setIsDark(shouldBeDark);
      if (shouldBeDark) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    } catch {
      // localStorage access can fail in certain contexts
    }
  }, [setIsDark]);

  const toggle = () => {
    try {
      const newDark = !isDark;
      setIsDark(newDark);
      localStorage.setItem("theme", newDark ? "dark" : "light");
      if (newDark) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    } catch {
      // localStorage access can fail in certain contexts
    }
  };

  return (
    <button
      onClick={toggle}
      className="px-3 py-2 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 rounded text-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800"
      aria-label={isDark ? "Light mode" : "Dark mode"}
    >
      {isDark ? "☀️" : "🌙"}
    </button>
  );
}
