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
    sub: "Ta note personnelle pour Claude Code — écrite une fois, relue à chaque session",
    phrase:
      "CLAUDE.md, c'est une note que tu laisses à Claude avant qu'il ne commence. Il la lit au démarrage et la suit pour tout ce qu'il fait.",
    source: {
      label: "Lire la documentation",
      url: "https://code.claude.com/docs/en/memory",
    },
    explain: {
      intro:
        "Imagine tu onboardes un développeur. Tu lui laisses une note : « voilà comment tester, voilà nos conventions, attention à ça ». CLAUDE.md, c'est cette note, mais pour Claude Code. Tu l'écris une fois, et elle te suit dans chaque session.",
      bullets: [
        [
          "Écrit une fois",
          "Tu poses tes préférences, tes règles, ton contexte une seule fois — pas à refaire.",
        ],
        [
          "Automatiquement relue",
          "Claude Code l'ouvre seul à chaque nouveau message, sans que tu le demandes.",
        ],
        [
          "Partagé ou personnel",
          "À la racine = partage avec l'équipe via Git. Dans ~/.claude/ = pour toi seul.",
        ],
      ],
    },
    exLabel: "Exemple : un CLAUDE.md simple",
    code: `# Mon Projet

## Stack
- TypeScript strict, React 19, Vite

## Règles
- Pas de console.log en prod
- Commits atomiques (une idée = un commit)
- Tests obligatoires pour les features

## Conventions
- Fonctionnel, pas de classes
- Hooks personnalisés dans src/hooks/
- Linter + formatter avant commit`,
    memo: [
      "CLAUDE.md = ta mémoire écrite. Claude la lit seul au démarrage.",
      "À la racine si partagé avec l'équipe ; ~/.claude/CLAUDE.md si perso",
      "Tout est dedans : stack, règles, patterns, pièges à éviter",
    ],
  },

  {
    id: "regles",
    eyebrow: "Best Practices",
    title: "Les Règles de Code",
    sub: "Documenter une fois ce que tu répètes à chaque review",
    phrase:
      "Les Règles, c'est la formalisation de tes critères de qualité. Au lieu de dire à chaque PR « oh attention au typing », tu l'écris une fois dans un fichier que Claude consulte à chaque review.",
    source: {
      label: "Lire la documentation",
      url: "https://code.claude.com/docs/en/rules",
    },
    explain: {
      intro:
        "Tu remarques que tu fais la même remarque en review : « il manque le type de ce param » ou « pas de spread dans les props ». Au lieu de répéter, tu l'écris dans une Règle. Claude la connaît, tout le monde gagne du temps.",
      bullets: [
        [
          "Organisé par domaine",
          ".claude/rules/ contient TypeScript.md, React.md, Testing.md, etc. — une fichier par sujet.",
        ],
        [
          "Partagé avec l'équipe",
          "Committé → tout le monde respecte les mêmes standards, pas de débat à chaque PR.",
        ],
        [
          "Vivant",
          "Tu mets à jour la Règle quand la vraie pratique change — pas besoin de repasser en review.",
        ],
      ],
    },
    exLabel: "Exemple : TypeScript.md",
    code: `# TypeScript — Nos Standards

## Types explicites
- Tout paramètre et return typé
- Pas de \`any\`, préférer \`unknown\` si vraiment nécessaire
- Types d'import : \`import type { Foo } from './types'\`

## Objets et unions
- Pas de \`object\`, c'est trop vague
- Discriminated unions plutôt que optionnels partout
- \`readonly\` pour les données immuables`,
    memo: [
      "Règles = critères de qualité écrits une fois dans .claude/rules/",
      "Format : Markdown, une section par sujet, pas de prose",
      "Consultées auto par Claude en review + linting",
    ],
  },

  {
    id: "skills",
    eyebrow: "Automatisation",
    title: "Les Skills",
    sub: "Une routine qu'on grave et qu'on relance d'un coup",
    phrase:
      "Un skill, c'est une checklist qu'on exécute automatiquement. Tu dis /pre-commit et ça lance les tests, formate, linte — tout en une seule commande.",
    source: {
      label: "Lire la documentation",
      url: "https://code.claude.com/docs/en/skills",
    },
    explain: {
      intro:
        "Tu fais ça tous les jours : ouvrir un terminal, npm run test, npm run lint, npm run format. Cinq commandes manuelles. Avec un skill, tu dis /prep-commit et voilà. Plus besoin de te souvenir ou de taper.",
      bullets: [
        [
          "Zéro oublis",
          "Pas moyen de passer la linte ou les tests : le skill les lance automatiquement.",
        ],
        [
          "Une fois écrit, éternel",
          "Un dossier .claude/skills/ + une définition, et tu le réutilises dans chaque session.",
        ],
        [
          "Partagé",
          "Committé dans le projet → tout le monde a les mêmes routines.",
        ],
      ],
    },
    exLabel: "Exemple : /pre-commit",
    code: `# .claude/skills/pre-commit/SKILL.md
description: >
  Avant de commit : teste, linte, formate

---

npm run test -- --run
if [ $? -ne 0 ]; then
  echo "❌ Tests échoués"
  exit 1
fi

npm run lint
npm run format

echo "✅ Prêt à commit"`,
    memo: [
      "Skill = routine qu'on grave dans .claude/skills/ et qu'on relance par /nom",
      "Évite les oublis (tester, formater, linter avant commit)",
      "Partagé via Git → cohérence d'équipe",
    ],
  },

  {
    id: "hooks",
    eyebrow: "Automatisation",
    title: "Les Hooks",
    sub: "Ce qui se lance tout seul sans que tu fasses rien",
    phrase:
      "Un hook, c'est un script qui s'exécute automatiquement avant ou après une action clé (commit, push, build). Tu ne fais rien, il agit.",
    source: {
      label: "Lire la documentation",
      url: "https://code.claude.com/docs/en/hooks",
    },
    explain: {
      intro:
        "Tu oublies parfois de lancer les tests avant de push et ça casse la branche. Avec un hook, juste avant que tu pushe, le hook lance les tests. S'ils échouent, il bloque. Tu ne risques rien.",
      bullets: [
        [
          "Automatique",
          "S'exécute tout seul — tu n'as rien à faire, pas même de penser à l'appeler.",
        ],
        [
          "Prévient les erreurs",
          "Valide, teste, linte avant que ça ne remonte en production.",
        ],
        [
          "Partagé",
          ".claude/hooks/ committé → l'équipe entière a les mêmes garde-fous.",
        ],
      ],
    },
    exLabel: "Exemple : hook avant un commit",
    code: `# .claude/hooks/pre-commit.sh

# Bloque le commit si les tests échouent
npm run test -- --run
if [ $? -ne 0 ]; then
  echo "❌ Tests échoués — commit annulé"
  exit 1
fi

# Nettoie avant commit
npm run lint
npm run format

echo "✅ C'est bon"`,
    memo: [
      "Hooks = scripts dans .claude/hooks/ qui s'exécutent automatiquement",
      "Parfait pour : tester avant commit, linter avant push, valider avant build",
      "Partagé via Git → tout le monde en bénéficie",
    ],
  },

  {
    id: "memory-system",
    eyebrow: "Persistance",
    title: "Le Système de Mémoire",
    sub: "Claude se souvient de tes décisions d'une session à l'autre",
    phrase:
      "Avec Memory System, tu expliques ton projet une fois — Claude s'en souvient. La session d'après, il l'a en tête, tu gères juste le code.",
    source: {
      label: "Lire la documentation",
      url: "https://code.claude.com/docs/en/memory",
    },
    explain: {
      intro:
        "Lundi tu bosses sur le projet et tu expliques l'architecture. Mardi tu dois la réexpliquer à Claude. Jeudi pareil. Avec Memory, tu l'expliques une fois. Claude la lit automatiquement chaque session et tu n'as plus à répéter.",
      bullets: [
        [
          "Explique une fois",
          "Document tes décisions, ton architecture, tes règles une seule fois.",
        ],
        [
          "Claude les retrouve automatiquement",
          "À chaque session, il les relit sans que tu le demandes.",
        ],
        [
          "Gagne du temps",
          "Pas besoin de copier la même config, les mêmes patterns à chaque conversation.",
        ],
      ],
    },
    exLabel: "Exemple : un fichier de mémoire",
    code: `# .claude/memory/architecture.md

## Stack
- Frontend : React 19 + Vite + Tailwind
- Backend : Node.js + Express
- DB : PostgreSQL

## Principes
- Fonctionnel, pas de classes
- Hooks personnalisés pour la logique partagée
- Context API pour auth + theme uniquement

## Ce qu'on n'utilise PAS
- Redux (trop lourd pour notre size)
- Class components
- console.log en production`,
    memo: [
      "Memory = fichiers Markdown dans ~/.claude/memory/ ou .claude/memory/",
      "Claude les lit automatiquement à chaque session",
      "Parfait pour : architecture, patterns, décisions qui ne changent pas",
    ],
  },

  {
    id: "mcp",
    eyebrow: "Intégration",
    title: "MCP (Model Context Protocol)",
    sub: "Claude accède directement à tes outils — Git, APIs, DB",
    phrase:
      "Avec MCP, Claude peut lire tes vraies données : logs, commits, DB. Au lieu de deviner, il voit exactement ce qui se passe.",
    source: {
      label: "Lire la documentation",
      url: "https://code.claude.com/docs/en/mcp",
    },
    explain: {
      intro:
        "Tu dis à Claude « pourquoi le deploy a échoué ». Sans MCP, il devine. Avec MCP, tu ouvres un tunnel sécurisé : Claude lit les vrais logs, voit les vrais commits, interroge ta vraie DB. Il sait exactement.",
      bullets: [
        [
          "Accès à tes outils",
          "Git, APIs internes, logs, DB, métriques — Claude peut les consulter directement.",
        ],
        [
          "Contexte réel",
          "Plus de suppositions : Claude voit tes vraies données et donne des réponses précises.",
        ],
        [
          "Sécurisé",
          "Tu configures ce que Claude peut voir dans .claude/mcp.json — tu contrôles tout.",
        ],
      ],
    },
    exLabel: "Exemple : MCP pour Git",
    code: `# .claude/mcp.json

{
  "mcps": [
    {
      "name": "git",
      "command": "node",
      "args": ["./mcp-git.js"],
      "env": {
        "REPO_PATH": "/path/to/repo"
      }
    }
  ]
}

# Maintenant Claude peut faire :
# - git log --oneline
# - git diff HEAD~1
# - git show <commit>`,
    memo: [
      "MCP = tunnel sécurisé vers tes outils (Git, APIs, DB)",
      "Claude consulte tes vraies données au lieu de deviner",
      "Config dans .claude/mcp.json avec permissions explicites",
    ],
  },

  {
    id: "agents",
    eyebrow: "Intelligence",
    title: "Les Agents",
    sub: "Une IA qui travaille toute seule, sans te demander à chaque étape",
    phrase:
      "Un agent, c'est une IA autonome. Tu lui dis une fois ce qu'il faut faire, il le fait et te reporte. Pas besoin de diriger chaque étape.",
    source: {
      label: "Lire la documentation",
      url: "https://code.claude.com/docs/en/agents",
    },
    explain: {
      intro:
        "Imagine un bot qui review les PRs : il vérifiait les tests, la couverture, la sécu, tout seul. Tu lui dis « revise cette PR » et voilà. Il ne te demande rien, il décide et agit.",
      bullets: [
        [
          "Autonome",
          "Il décide ce qu'il faut faire ensuite — tu n'as pas à lui dire chaque étape.",
        ],
        [
          "Lance-et-oublie",
          "Déclenche-le et il travaille. Tu vérifies le rapport après.",
        ],
        [
          "Intégré",
          "S'enchaîne avec les hooks, les skills, tes routines — tout fonctionne ensemble.",
        ],
      ],
    },
    exLabel: "Exemple : agent de PR review",
    code: `# .claude/agents/pr-reviewer.md
name: PR Reviewer
description: Review auto des pull requests

---

Pour chaque PR, je vérifiée :
1. ✅ Les tests passent
2. ✅ Couverture > 80%
3. ✅ Pas de console.log
4. ✅ Types explicites
5. ✅ Dépendances approuvées

Je report : APPROVED ou CHANGES_REQUESTED`,
    memo: [
      "Agents = IA autonome qui décide et agit sans supervision",
      "Utiles pour : reviews, monitoring, notifications, automation",
      "Lance-les via hooks, skills, ou schedule",
    ],
  },

  {
    id: "debugging",
    eyebrow: "Développement",
    title: "Techniques de Debugging",
    sub: "Comment donner les bonnes infos à Claude pour qu'il trouve la panne",
    phrase:
      "Déboguer bien, c'est pas juste dire « ça marche pas ». C'est donner le stack trace, ce qui a changé, comment reproduire. Fait ça, Claude trouve 10x plus vite.",
    source: {
      label: "Lire la documentation",
      url: "https://code.claude.com/docs/en/debugging",
    },
    explain: {
      intro:
        "Si tu dis à un collègue « ça bug » sans contexte, il va te poser des questions pendant 10 min. Pareil avec Claude. Mais si tu lui donnes : error message, étapes pour reproduire, derniers changements — il l'a en 30 secondes.",
      bullets: [
        [
          "Contexte d'abord",
          "Error message + stack + logs + « j'ai changé ça hier » = Claude comprend au premier coup.",
        ],
        [
          "Reproductibilité",
          "Si tu peux reproduire le bug, Claude le reproduit aussi et l'analyse en temps réel.",
        ],
        [
          "Tester la solution",
          "Ajoute un test qui échoue, puis demande à Claude de le fixer. Ça converge direct.",
        ],
      ],
    },
    exLabel: "Bon debug : donner les infos clés",
    code: `❌ Mauvais:
"Mon app crash, aide-moi"

✅ Bon:
Error: Cannot read property 'name' of undefined

Stack trace:
getUserProfile (line 42) → render → props.user.name

Ce que j'ai changé hier:
- Refacto du middleware auth
- User passe par context maintenant, pas props

Étapes pour reproduire:
1. Login
2. Go to /profile
3. Crash au render`,
    memo: [
      "Bon debug = Error + Stack + Contexte + Repro steps",
      "Ajoute un test qui échoue pour que Claude puisse vérifier sa solution",
      "Partage un repo minimal qui reproduit le bug si c'est complexe",
    ],
  },

  {
    id: "ai-context",
    eyebrow: "Optimisation",
    title: "Comprendre le Contexte AI",
    sub: "Plus de contexte ≠ meilleures réponses. Qualité avant quantité.",
    phrase:
      "Chaque LLM a un context window : la quantité d'infos qu'il peut lire en une fois. Plus tu envoies de bruit, moins Claude se concentre sur le signal.",
    source: {
      label: "Lire la documentation",
      url: "https://code.claude.com/docs/en/context",
    },
    explain: {
      intro:
        "Imagine une conversation de 2h au téléphone. Au bout d'une heure, ton interlocuteur ne se souvient plus du début. Pareil avec Claude. Si tu envoies 50 fichiers, il « oublie » les plus pertinents.",
      bullets: [
        [
          "Qualité > Quantité",
          "Un fichier pertinent > 10 fichiers génériques. Claude se concentre mieux.",
        ],
        [
          "Récent prime",
          "L'info d'aujourd'hui est plus utile que l'historique d'il y a 6 mois.",
        ],
        [
          "Cache + Memory",
          "Réutilise la même doc plusieurs fois = Claude la garde en cache, gagne du temps.",
        ],
      ],
    },
    exLabel: "Bon vs mauvais contexte",
    code: `❌ Mauvais:
Envoie: tous les .md du projet (40 pages)
Claude lit: trop, perd le focus
Résultat: réponse générique

✅ Bon:
Envoie: extrait du CLAUDE.md + ce fichier seul
Claude lit: contexte précis, frais
Résultat: réponse tailored`,
    memo: [
      "Context window = limite de ce que Claude digère en une fois",
      "Stratégie : CLAUDE.md + Memory + fichier pertinent actuel",
      "Moins c'est mieux si c'est du signal fort vs du bruit",
    ],
  },
];
