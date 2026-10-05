import { Outlet } from "@tanstack/react-router";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

export function RootLayout() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <header className="border-b border-gray-300 dark:border-gray-800 bg-white dark:bg-gray-900 py-4">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold m-0">Mémo Claude</h1>
          <ThemeToggle isDark={isDark} setIsDark={setIsDark} />
        </div>
      </header>
      <main className="flex-1 py-8 px-6">
        <div className="max-w-6xl mx-auto w-full">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
