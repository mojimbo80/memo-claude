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
      aria-label={isDark ? "Light mode" : "Dark mode"}
      className="px-3 py-1.5 border border-border hover:border-primary rounded-full text-muted hover:text-primary transition-colors font-mono text-xs flex items-center gap-1"
    >
      {isDark ? "☀ clair" : "☾ sombre"}
    </button>
  );
}
