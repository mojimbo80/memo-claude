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

## 2. Style narratif (pédagogie — la cible de toute réécriture)
Tu guides un débutant, tu n'écris pas une doc. Vise :
- Partir du **problème ou de la situation** avant la définition.
- Une seule **analogie concrète du quotidien**, tenue jusqu'au bout.
- **Tutoiement**, voix active, phrases **courtes** : une idée par phrase.
- Nommer les choses comme le lecteur les **vit** ; le jargon vient après l'intuition,
  expliqué à sa première apparition.
- **Montrer un exemple concret avant** la règle générale.
- Progression **simple → nuancé** : pas d'exception dans la phrase d'ouverture.
- Adresse directe au lecteur ; anticiper **le piège classique** quand c'est pertinent.
- Mémo en formules **télégraphiques** (3 à 4 puces).
- Garder le **même rythme/format** que les autres pages.
Beaucoup de retours ("trop long", "pas clair", "trop technique") se résolvent en
appliquant un de ces principes — identifie lequel manque et corrige-le.

## 3. Réécrire sans tout casser
- Respecte le type Page (ne supprime pas de champ requis, garde l'id inchangé).
- Ne change QUE ce qui est demandé ; garde intact ce qui convenait déjà.
- La source reste valide (https) ; mets-la à jour seulement si le fond a changé.
- Ne touche pas aux autres pages ni aux composants/au style.
- Si le retour est vague, propose 1 à 2 variantes courtes de la partie concernée
  AVANT de modifier le fichier — laisse l'utilisateur choisir.

## 4. Après
- Relis : structure intacte, ton conforme, retour bien pris en compte.
- Lance `npm run typecheck` et `npm run test`.
- NE committe PAS et NE pousse PAS : laisse l'utilisateur relire et committer.
