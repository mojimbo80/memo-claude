---
name: page-content
description: >
  À utiliser quand l'utilisateur veut ajouter ou rédiger le contenu d'une page
  (un thème) du site Mémo Claude : "ajoute une page", "crée le contenu de la page
  X", "rédige le thème hooks". Génère un objet Page conforme et l'ajoute à src/pages.ts.
---

# Rédiger le contenu d'une page

Tu génères le contenu d'UN thème pour le site Mémo Claude et tu l'ajoutes au
tableau PAGES de `src/pages.ts`.

## 1. Avant d'écrire
- Lis `src/pages.ts` : copie la forme du type `Page`, relève les `id` déjà pris
  (le nouvel id doit être unique, en kebab-case), et aligne-toi sur le ton existant.
- Vérifie les faits sur https://code.claude.com/docs. La `source` pointe vers la page
  pertinente (url en https://).

## 2. Style d'écriture (IMPÉRATIF — c'est le cœur du skill)
Écris comme dans l'exemple de référence ci-dessous. Règles :
- Français, **tutoiement** ("tu", "ton projet").
- Phrases **courtes et directes**. Pas de jargon sans l'expliquer.
- La "phrase" : une seule idée, claire, qui dit CE QUE C'EST et À QUOI ÇA SERT.
- L'intro de l'explication : commence par une **analogie concrète du quotidien**
  ("Imagine un nouveau développeur qui rejoint ton équipe…").
- Les bullets : chaque paire = un **label court en gras** + une explication brève.
  Souvent sous forme "X → conséquence" (ex. "À la racine du projet → partagé avec l'équipe").
- Le mémo : 3 à 4 puces **télégraphiques**, mémorisables d'un coup d'œil.
- Pédagogique et bienveillant, jamais pompeux. On explique, on ne récite pas la doc.

## 3. Forme attendue (type Page)
- id, eyebrow (catégorie courte), title, sub (sous-titre d'une ligne)
- phrase
- source : { label, url }
- explain : { intro, bullets : paires [label, texte] — 2 à 3 }
- exLabel + code (exemple réaliste ; commentaires en lignes commençant par #)
- exLabel2 + code2 : optionnels
- memo : 3 à 4 puces

## 4. Exemple de référence (à imiter pour le ton)
- title : "CLAUDE.md"
- phrase : "CLAUDE.md est un fichier texte placé à la racine de ton projet. Claude Code
  le lit tout seul au démarrage et s'en sert comme mémoire : commandes utiles,
  conventions, architecture. Tu n'as pas à réexpliquer ton projet à chaque conversation."
- source : { label: "Doc officielle — Memory", url: "https://code.claude.com/docs/en/memory" }
- explain.intro : "Imagine un nouveau développeur qui rejoint ton équipe. Tu lui laisserais
  une note : voilà comment lancer les tests, voilà nos conventions, attention à ça.
  CLAUDE.md, c'est cette note, mais pour Claude."
- explain.bullets :
  - ["À la racine du projet", " → partagé avec l'équipe (via Git)."]
  - ["Dans ~/.claude/CLAUDE.md", " → tes préférences perso, sur tous tes projets."]
  - ["Court et précis", " → mieux vaut 20 lignes utiles qu'un roman."]
- memo :
  - "Lu automatiquement au lancement."
  - "Racine = partagé · ~/.claude/ = perso."
  - "Court, concret, orienté « comment faire »."

## 5. Après
- Relis : id unique, source en https, structure complète, ton conforme à l'exemple.
- Lance `npm run typecheck` et `npm run test`.
- NE committe PAS et NE pousse PAS toi-même : laisse l'utilisateur relire et committer.
