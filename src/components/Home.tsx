import { Link } from "@tanstack/react-router";
import { PAGES } from "../pages";

export function Home() {
  return (
    <div>
      <div className="mb-12 text-center">
        <h1 className="text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-100 mb-4">
          Mémo Claude
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Concepts de Claude Code, expliqués en français.
        </p>
      </div>

      <div className="space-y-3">
        {PAGES.map((page, index) => (
          <Link
            key={page.id}
            to="/$pageId"
            params={{ pageId: page.id }}
          >
            <button
              className="w-full px-6 py-6 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 rounded-lg transition hover:border-gray-900 dark:hover:border-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800 text-left"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-1">
                    {page.title}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {page.sub}
                  </div>
                </div>
                <div className="text-2xl ml-4">→</div>
              </div>
            </button>
          </Link>
        ))}
      </div>

      <div className="mt-12 p-4 bg-gray-100 dark:bg-gray-900 rounded-lg text-center">
        <p className="text-sm text-gray-600 dark:text-gray-400 m-0">
          Chaque thème contient une phrase clé, une explication simple, un exemple de code et un mémo.
        </p>
      </div>
    </div>
  );
}
