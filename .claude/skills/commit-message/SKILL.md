--
name: commit-message
description: >
  Use when the user wants a commit message: "suggest a commit",
  "a commit name", "a message for my changes". ONLY proposes a title
  and a description. Never runs any command that modifies the repository.
---

# Suggest a commit message

This skill only **proposes text**. It performs no actions.

## Steps
1. Read the changes, read-only:
   - `git diff --cached` (staged changes);
   - if the staging area is empty, `git diff`;
   - optionally `git status --short` for the list of files.
2. Infer the nature of the change from the diff (do not guess).
3. Propose a message in Conventional Commits format:

```
   <type>(<optional scope>): <imperative subject, ≤ 50 characters>

   <body: 1 to 3 lines, the WHAT and WHY. Lines ≤ 72 characters.>
```

   Types: feat, fix, docs, style, refactor, test, chore, ci.
4. Return the result in a copyable code block, title and body separated.
   That is all — the user will commit it themselves.

## Hard restrictions
- NEVER run `git add`, `git commit`, `git push`, `git reset`, or any
  command that modifies the repository, the index, or the history.
- Only READ commands are allowed (`git diff`, `git status`, `git log`).
- Do not offer to run those commands either: you only provide the message text.

## Style rules
- Imperative mood in the subject ("add", not "added").
- No trailing period in the subject.
- If the diff mixes unrelated topics, point it out and propose two separate
  subjects — without committing anything.