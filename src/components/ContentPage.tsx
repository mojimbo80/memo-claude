import { Link } from "@tanstack/react-router";
import { PAGES, type Page } from "../pages";
import { CodeBlock } from "./CodeBlock";

interface ContentPageProps {
  page: Page;
}

export function ContentPage({ page }: ContentPageProps) {
  const currentIndex = PAGES.findIndex((p) => p.id === page.id);
  const prevPage = currentIndex > 0 ? PAGES[currentIndex - 1] : null;
  const nextPage = currentIndex < PAGES.length - 1 ? PAGES[currentIndex + 1] : null;

  return (
    <div className="max-w-3xl mx-auto">
      {/* Header */}
      <div className="mb-8 flex justify-between items-start gap-4">
        <div>
          <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase mb-2">
            {page.eyebrow}
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-2">
            {page.title}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 m-0">
            {page.sub}
          </p>
        </div>
        <Link to="/">
          <button className="px-3 py-2 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 rounded text-sm cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 whitespace-nowrap">
            ← Accueil
          </button>
        </Link>
      </div>

      {/* En une phrase */}
      <section className="mb-8">
        <div className="border-2 border-orange-400 rounded-lg p-6 bg-orange-50 dark:bg-gray-900">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            En une phrase
          </h2>
          <p className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-4">
            {page.phrase}
          </p>
          <hr className="my-4 border-t border-gray-300 dark:border-gray-700" />
          <a
            href={page.source.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
          >
            {page.source.label} →
          </a>
        </div>
      </section>

      {/* Explication */}
      <section className="mb-8">
        <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-6 bg-gray-50 dark:bg-gray-900">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
            Explication simple
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            {page.explain.intro}
          </p>
          <ul className="space-y-4">
            {page.explain.bullets.map(([label, text]) => (
              <li key={label}>
                <strong className="text-gray-900 dark:text-gray-100">
                  {label}
                </strong>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 m-0">
                  {text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Example */}
      <section className="mb-8">
        <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-6 bg-gray-50 dark:bg-gray-900">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            {page.exLabel}
          </h2>
          <CodeBlock code={page.code} />
        </div>
      </section>

      {/* Second Example if exists */}
      {page.code2 && page.exLabel2 && (
        <section className="mb-8">
          <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-6 bg-gray-50 dark:bg-gray-900">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              {page.exLabel2}
            </h2>
            <CodeBlock code={page.code2} />
          </div>
        </section>
      )}

      {/* Memo */}
      <section className="mb-8">
        <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-6 bg-yellow-50 dark:bg-gray-900">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Mémo
          </h2>
          <ul className="space-y-2">
            {page.memo.map((item) => (
              <li
                key={item}
                className="text-gray-900 dark:text-gray-100"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Navigation */}
      <div className="flex gap-4 justify-between pt-8 border-t border-gray-300 dark:border-gray-700">
        {prevPage ? (
          <Link to="/$pageId" params={{ pageId: prevPage.id }}>
            <button className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 rounded text-sm cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800">
              ← {prevPage.title}
            </button>
          </Link>
        ) : (
          <div />
        )}
        {nextPage ? (
          <Link to="/$pageId" params={{ pageId: nextPage.id }}>
            <button className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 rounded text-sm cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800">
              {nextPage.title} →
            </button>
          </Link>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}
