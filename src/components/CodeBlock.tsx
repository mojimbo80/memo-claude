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
      <pre className="bg-gray-900 text-gray-200 p-4 rounded-lg overflow-x-auto text-sm leading-relaxed">
        <code>
          {code.split("\n").map((line, i) => (
            <div key={i}>
              {line.startsWith("#") ? (
                <span className="text-orange-400">{line}</span>
              ) : (
                line
              )}
            </div>
          ))}
        </code>
      </pre>
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 px-3 py-2 border border-gray-300 bg-white rounded text-sm cursor-pointer hover:bg-gray-50"
        aria-label="Copy code"
      >
        {copied ? "✓ Copié" : "📋 Copier"}
      </button>
    </div>
  );
}
