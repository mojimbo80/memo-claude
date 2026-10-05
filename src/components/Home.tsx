import { Link } from "@tanstack/react-router";
import { PAGES } from "../pages";

export function Home() {
  return (
    <div>
      <div className="mb-16 text-center">
        <h1 className="font-display text-6xl font-bold mb-4">
          <span className="text-primary">⚡</span> Mémo Claude
        </h1>
        <p className="text-lg text-muted">
          Concepts de Claude Code, expliqués en français.
        </p>
      </div>

      <div className="space-y-3">
        {PAGES.map((page, index) => (
          <Link
            key={page.id}
            to="/$pageId"
            params={{ pageId: page.id }}
            className="block"
          >
            <button
              className="w-full bg-primary hover:bg-primary-dark text-white p-6 cursor-pointer transition-all active:translate-y-0.5 shadow-sm border-b-[3px] border-primary-dark hover:shadow-md"
              style={{ borderRadius: "var(--radius)" }}
            >
              <div className="flex items-center justify-between gap-4 text-left">
                <div className="flex-1">
                  <div className="font-mono text-sm font-medium mb-1 opacity-80">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="font-display font-bold text-base mb-1">
                    {page.title}
                  </div>
                  <div className="text-sm opacity-80">
                    {page.sub}
                  </div>
                </div>
                <div className="text-2xl flex-shrink-0">→</div>
              </div>
            </button>
          </Link>
        ))}
      </div>

      <div className="mt-16 pt-8 border-t-2 border-dashed border-border text-center">
        <p className="font-mono text-xs text-muted">
          Chaque thème contient une phrase clé, une explication simple, un exemple de code et un mémo.
        </p>
      </div>
    </div>
  );
}
