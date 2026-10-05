import { Link } from "@tanstack/react-router";
import { PAGES, type Page } from "../pages";
import { CodeBlock } from "./CodeBlock";
import { SECTION_EMOJIS } from "../constants/sectionEmojis";

interface ContentPageProps {
  page: Page;
}

function SectionBadge({ emoji }: { emoji: string }) {
  return (
    <div
      className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-accent text-accent-fg text-sm"
      style={{ borderRadius: "50%" }}
    >
      {emoji}
    </div>
  );
}

export function ContentPage({ page }: ContentPageProps) {
  const currentIndex = PAGES.findIndex((p) => p.id === page.id);
  const prevPage = currentIndex > 0 ? PAGES[currentIndex - 1] : null;
  const nextPage = currentIndex < PAGES.length - 1 ? PAGES[currentIndex + 1] : null;

  return (
    <div>
      {/* Back link */}
      <Link to="/" className="inline-block mb-8">
        <span className="font-mono text-primary text-sm hover:opacity-70 transition-opacity">
          ← Accueil
        </span>
      </Link>

      {/* Header */}
      <div className="mb-12">
        <div className="font-mono text-primary uppercase text-xs font-medium tracking-widest mb-2">
          {page.eyebrow}
        </div>
        <h1 className="font-display text-5xl font-bold mb-3">
          {page.title}
        </h1>
        <p className="text-lg text-muted">
          {page.sub}
        </p>
      </div>

      {/* En une phrase */}
      <section className="mb-8">
        <div className="mb-3 flex items-center gap-2">
          <SectionBadge emoji={SECTION_EMOJIS.phrase} />
          <h2 className="font-display font-bold text-[1.15rem]">En une phrase</h2>
        </div>
        <div className="bg-card border border-border rounded-[var(--radius)] p-6 shadow-sm">
          <p className="text-fg mb-4">
            {page.phrase}
          </p>
          <div className="border-t border-border my-4" />
          <a
            href={page.source.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm text-primary hover:opacity-70 transition-opacity"
          >
            source ↗
          </a>
        </div>
      </section>

      {/* Explication */}
      <section className="mb-8">
        <div className="mb-3 flex items-center gap-2">
          <SectionBadge emoji={SECTION_EMOJIS.explain} />
          <h2 className="font-display font-bold text-[1.15rem]">Explication simple</h2>
        </div>
        <div className="bg-card border border-border rounded-[var(--radius)] p-6 shadow-sm">
          <p className="text-fg mb-6">{page.explain.intro}</p>
          <ul className="space-y-4">
            {page.explain.bullets.map(([label, text]) => (
              <li key={label}>
                <strong className="text-fg">{label}</strong>
                <p className="text-sm text-muted mt-1 m-0">
                  {text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Example */}
      <section className="mb-8">
        <div className="mb-3 flex items-center gap-2">
          <SectionBadge emoji={SECTION_EMOJIS.example} />
          <h2 className="font-display font-bold text-[1.15rem]">{page.exLabel}</h2>
        </div>
        <div className="bg-card border border-border rounded-[var(--radius)] p-6 shadow-sm">
          <CodeBlock code={page.code} />
        </div>
      </section>

      {/* Second Example if exists */}
      {page.code2 && page.exLabel2 && (
        <section className="mb-8">
          <div className="mb-3 flex items-center gap-2">
            <SectionBadge emoji={SECTION_EMOJIS.example} />
            <h2 className="font-display font-bold text-[1.15rem]">{page.exLabel2}</h2>
          </div>
          <div className="bg-card border border-border rounded-[var(--radius)] p-6 shadow-sm">
            <CodeBlock code={page.code2} />
          </div>
        </section>
      )}

      {/* Memo */}
      <section className="mb-12">
        <div className="mb-3 flex items-center gap-2">
          <SectionBadge emoji={SECTION_EMOJIS.memo} />
          <h2 className="font-display font-bold text-[1.15rem]">Mémo</h2>
        </div>
        <div
          className="border-l-4 border-primary p-6"
          style={{
            backgroundColor: `hsl(var(--accent))`,
            borderRadius: "var(--radius)",
          }}
        >
          <h3 className="font-display font-bold text-accent-fg mb-4">Retiens bien</h3>
          <ul className="space-y-3">
            {page.memo.map((item) => (
              <li key={item} className="text-fg text-sm">
                • {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Navigation */}
      <div className="flex gap-4 justify-between pt-8 border-t border-border">
        {prevPage ? (
          <Link
            to="/$pageId"
            params={{ pageId: prevPage.id }}
            className="flex-1"
          >
            <button className="w-full px-4 py-2 rounded-[var(--radius)] bg-bg2 border border-border hover:border-primary hover:bg-primary hover:text-white transition-colors text-fg font-mono text-sm">
              ← Précédent
            </button>
          </Link>
        ) : (
          <div className="flex-1" />
        )}
        {nextPage ? (
          <Link
            to="/$pageId"
            params={{ pageId: nextPage.id }}
            className="flex-1"
          >
            <button className="w-full px-4 py-2 rounded-[var(--radius)] bg-bg2 border border-border hover:border-primary hover:bg-primary hover:text-white transition-colors text-fg font-mono text-sm">
              Suivant →
            </button>
          </Link>
        ) : (
          <div className="flex-1" />
        )}
      </div>
    </div>
  );
}
