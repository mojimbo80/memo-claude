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
    sub: "Des workflows réutilisables pour tes tâches récurrentes",
    phrase:
      "Un skill est un workflow personnalisé — une séquence d'étapes empaquetée et déclenchée par un slash-command (/nom-du-skill) que tu réutilises sans la réécrire.",
    source: {
      label: "Lire la documentation",
      url: "https://code.claude.com/docs/en/skills",
    },
    explain: {
      intro:
        "Imagine une checklist que tu fais tout le temps : « lancer les tests, corriger les erreurs, formater, commit ». Au lieu de l'exécuter manuellement à chaque fois, tu la graves une fois dans un skill, et ensuite tu dis /ma-checklist pour tout faire d'un coup.",
      bullets: [
        [
          "Une fois écrit, réutilisable",
          "Le skill vit dans ton projet (.claude/skills/) et tu l'utilises dans chaque session.",
        ],
        [
          "Économise des étapes répétitives",
          "Pas besoin de taper les mêmes commandes ou de refaire le même prompt à chaque fois.",
        ],
        [
          "Tailored à ton workflow",
          "Tu décides quoi inclure : tests, linting, build, deploy, génération de docs, etc.",
        ],
      ],
    },
    exLabel: "Exemple : un skill de pre-commit",
    code: `# .claude/skills/pre-commit/SKILL.md
description: >
  Vérifie et nettoie avant commit : lint, format, tests.

---

npm run lint
npm run format
npm run test -- --run
echo "✅ Prêt à commit"`,
    memo: [
      "Chaque skill = un dossier dans .claude/skills/ avec SKILL.md + run.sh",
      "Lance avec /nom-du-skill ; Claude te guide ou exécute automatiquement",
      "Parfait pour les routines projet : test → build, deploy, cleanup, etc.",
    ],
  },
];
