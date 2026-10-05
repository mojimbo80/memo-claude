export type Page = {
  id: string;
  eyebrow: string;
  title: string;
  sub: string;
  phrase: string;
  source: { label: string; url: string };
  explain: { intro: string; bullets: [string, string][] };
  exLabel: string;
  code: string;
  exLabel2?: string;
  code2?: string;
  memo: string[];
};

export const PAGES: Page[] = [
  {
    id: "claude-md",
    eyebrow: "Fondamentaux",
    title: "CLAUDE.md",
    sub: "Configurer les instructions personnalisées de Claude Code",
    phrase:
      "CLAUDE.md est un fichier de configuration privée où vous documentez vos préférences, règles de code et contexte projet pour les sessions Claude Code.",
    source: {
      label: "Lire la documentation",
      url: "https://code.claude.com/docs/en/memory",
    },
    explain: {
      intro:
        "Tout comme vous écriviriez des instructions au début d'une conversation, CLAUDE.md est vos instructions persistantes — Claude Code les lit au démarrage de chaque session.",
      bullets: [
        [
          "Préférences personnelles",
          "Votre rôle, vos langues préférées, comment vous aimez travailler.",
        ],
        [
          "Règles du projet",
          "Architecture, conventions de code, patterns à suivre ou à éviter.",
        ],
        [
          "Contexte immuable",
          "Les décisions qui ne changent pas : comment on commit, les dépendances acceptées.",
        ],
      ],
    },
    exLabel: "Créer un CLAUDE.md",
    code: `# Mon Projet

## Préférences
- Langage : TypeScript strict
- Style : fonctionnel, pas de classes
- Tests : obligatoires pour les features

## Règles
- Pas de console.log en production
- Commit atomiques avec description claire
- Code revu par un pair avant merge`,
    memo: [
      "CLAUDE.md est local (pas committé) ou dans .claude/ si commité",
      "Claude Code le relit à chaque nouveau message",
      "Idéal pour documenter des décisions qui dureront",
    ],
  },

  {
    id: "regles",
    eyebrow: "Best Practices",
    title: "Les Règles de Code",
    sub: "Documenter les conventions et patterns du projet",
    phrase:
      "Les règles de code sont des fichiers Markdown dans .claude/rules/ qui formalisent les conventions : style, architecture, sécurité, tests.",
    source: {
      label: "Lire la documentation",
      url: "https://code.claude.com/docs/en/rules",
    },
    explain: {
      intro:
        "Plutôt que de répéter les mêmes consignes à chaque session, on les documente une fois dans des fichiers que Claude Code consulte automatiquement.",
      bullets: [
        [
          "Organisation",
          ".claude/rules/ contient TypeScript.md, React.md, Testing.md, etc.",
        ],
        [
          "Partage d'équipe",
          "Les règles sont commitées — toute l'équipe en bénéficie.",
        ],
        [
          "Flexibilité",
          "Facile à mettre à jour quand le projet évolue.",
        ],
      ],
    },
    exLabel: "Exemple : TypeScript.md",
    code: `# TypeScript

## Strict Mode
- Toujours \`"strict": true\` dans tsconfig.json
- Pas de \`any\`, préférer \`unknown\`

## Conventions
- Types d'import explicites : \`import type { User } from './types'\`
- Nommer les types avec PascalCase`,
    memo: [
      "Les règles vivent dans .claude/rules/ (committé)",
      "Format : Markdown simple, hiérarchie par rubrique",
      "Claude Code les suggère lors des reviews",
    ],
  },

  {
    id: "skills",
    eyebrow: "Automatisation",
    title: "Les Skills",
    sub: "Créer des commandes personnalisées pour Claude Code",
    phrase:
      "Un skill est un script ou une suite de commandes packagée sous un slash-command (/skill-name) que vous pouvez déclencher dans Claude Code.",
    source: {
      label: "Lire la documentation",
      url: "https://code.claude.com/docs/en/skills",
    },
    explain: {
      intro:
        "Plutôt que de refaire les mêmes tâches manuellement, vous créez un skill — une mini-automation déclenchée par un raccourci textuel.",
      bullets: [
        [
          "Chaining de commandes",
          "/deploy pourrait enchaîner test → build → push → deploy automatiquement.",
        ],
        [
          "Réutilisable",
          "Une fois créé, le skill est disponible dans toutes vos sessions.",
        ],
        [
          "Personnalisé",
          "Adapté à votre workflow, votre stack, vos préférences.",
        ],
      ],
    },
    exLabel: "Créer un skill simpe",
    code: `#!/bin/bash
# .claude/skills/lint-fix/run.sh

echo "Running lint..."
npm run lint

echo "Fixing with prettier..."
npm run format

echo "✅ Linting and formatting complete"`,
    memo: [
      "Les skills sont documentés dans .claude/skills/ ou .claude/hooks/",
      "Accessible via /nom-du-skill dans Claude Code",
      "Parfait pour les tâches répétitives du projet",
    ],
  },
];
