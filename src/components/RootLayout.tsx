import { Outlet } from "@tanstack/react-router";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

export function RootLayout() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-bg text-fg">
      <header className="border-b border-border bg-bg sticky top-0 z-40">
        <div className="max-w-column mx-auto px-6 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-primary" />
            <span className="font-mono text-xs text-muted">mémo claude</span>
          </div>
          <ThemeToggle isDark={isDark} setIsDark={setIsDark} />
        </div>
      </header>
      <main className="flex-1 flex flex-col items-center w-full bg-bg">
        <div className="max-w-column w-full px-6 py-12">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
