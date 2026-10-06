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

## 2. Style narratif (pédagogie — à appliquer partout)
Tu guides un débutant, tu n'écris pas une doc. Principes :
- Pars du **problème ou de la situation** avant la définition (fais sentir le besoin).
- Une seule **analogie concrète du quotidien**, tenue jusqu'au bout (n'en mélange pas deux).
- **Tutoiement**, voix active, phrases **courtes** : une idée par phrase.
- Nomme les choses comme le lecteur les **vit**, pas comme le système les implémente.
  Le jargon vient APRÈS l'intuition, et toujours expliqué à sa première apparition.
- **Montre un exemple concret avant** d'énoncer la règle générale.
- Progression **simple → nuancé** : aucune exception ni cas limite dans la phrase d'ouverture.
- Adresse-toi au lecteur ("tu gagnes…", "attention à…").
- Quand c'est pertinent, anticipe **le piège classique** du débutant
  ("on croit souvent que… alors qu'en fait…").
- Garde le **même rythme/format** que les autres pages (régularité = confort de lecture).
- Pédagogique et bienveillant, jamais pompeux. On explique, on ne récite pas la doc.

## 3. Style d'écriture par section
- La "phrase" : une seule idée claire — CE QUE C'EST + À QUOI ÇA SERT.
- L'intro de l'explication : commence par l'analogie.
- Les bullets : label court en gras + explication brève, souvent "X → conséquence".
- Le mémo : 3 à 4 puces **télégraphiques**, mémorisables d'un coup d'œil
  (si une puce a besoin d'une virgule explicative, elle n'est pas assez mûre).

## 4. Forme attendue (type Page)
- id, eyebrow (catégorie courte), title, sub (sous-titre d'une ligne)
- phrase
- source : { label, url }
- explain : { intro, bullets : paires [label, texte] — 2 à 3 }
- exLabel + code (exemple réaliste ; commentaires en lignes commençant par #)
- exLabel2 + code2 : optionnels
- memo : 3 à 4 puces

## 5. Exemple de référence (à imiter pour le ton)
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

## 6. Après
- Relis : id unique, source en https, structure complète, ton conforme à l'exemple.
- Lance `npm run typecheck` et `npm run test`.
- NE committe PAS et NE pousse PAS toi-même : laisse l'utilisateur relire et committer.
