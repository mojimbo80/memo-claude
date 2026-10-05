---
name: page-rewrite
description: >
  À utiliser quand l'utilisateur n'est pas satisfait du contenu d'une page du site
  Mémo Claude et veut le réécrire ou l'ajuster : "réécris la page X", "ça ne me plaît
  pas", "reformule", "raccourcis", "change l'analogie", "simplifie le mémo".
  Modifie un objet Page existant dans src/pages.ts.
---

# Réécrire le contenu d'une page

Tu retouches le contenu d'UN thème déjà présent dans PAGES (src/pages.ts), selon le
retour de l'utilisateur. Tu ne pars pas de zéro : tu améliores l'existant.

## 1. Repérer et comprendre
- Demande (ou déduis) QUELLE page (id ou titre) et CE QUI ne va pas :
  trop long ? trop technique ? analogie peu claire ? exemple à revoir ? mémo flou ?
- Lis l'objet Page concerné dans src/pages.ts pour partir de son contenu actuel.

## 2. Réécrire en gardant le style maison (IMPÉRATIF)
- Français, tutoiement, phrases courtes et directes.
- "phrase" : une seule idée claire (ce que c'est + à quoi ça sert).
- intro de l'explication : une analogie concrète du quotidien.
- bullets : label court en gras + explication brève, souvent "X → conséquence".
- mémo : 3 à 4 puces télégraphiques.
- Pédagogique, jamais pompeux. On n'ajoute pas de jargon non expliqué.
- Ne change QUE ce qui est demandé ; garde intact ce qui convenait déjà.
  (Si le retour est vague, propose 1 à 2 variantes courtes de la partie concernée
  avant de modifier le fichier.)

## 3. Contraintes de forme
- Respecte le type Page (ne supprime pas de champ requis, garde l'id inchangé).
- La source reste valide (https) ; mets-la à jour seulement si le fond a changé.
- Ne touche pas aux autres pages ni aux composants/au style.

## 4. Après
- Relis : structure intacte, ton conforme, retour bien pris en compte.
- Lance `npm run typecheck` et `npm run test`.
- NE committe PAS et NE pousse PAS : laisse l'utilisateur relire et committer.
