import { useState } from "react";

interface CodeBlockProps {
  code: string;
}

export function CodeBlock({ code }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback silencieux
    }
  };

  return (
    <div className="relative">
      <pre
        className="p-4 overflow-x-auto text-sm leading-relaxed font-mono"
        style={{
          backgroundColor: `hsl(var(--code-bg))`,
          color: `hsl(var(--code-fg))`,
          borderRadius: "var(--radius)",
        }}
      >
        <code>
          {code.split("\n").map((line, i) => (
            <div key={i}>
              {line.trim().startsWith("#") || line.trim() === "---" ? (
                <span style={{ color: `hsl(var(--code-accent))` }}>{line}</span>
              ) : (
                <span>{line}</span>
              )}
            </div>
          ))}
        </code>
      </pre>
      <button
        onClick={handleCopy}
        className="absolute top-3 right-3 text-xs px-2 py-1 rounded font-mono border transition-colors"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          borderColor: "rgba(255, 255, 255, 0.2)",
          color: `hsl(var(--code-fg))`,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.15)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
        }}
        aria-label="Copy code"
      >
        {copied ? "✓ Copié" : "📋 Copier"}
      </button>
    </div>
  );
}
