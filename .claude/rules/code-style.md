# Code Style and Formatting

## File Organization

- Use absolute imports (configure `baseUrl` and `paths` in `tsconfig.json`)
- Group imports: external → internal → relative

## Formatting

- Use Prettier for consistent formatting
- Configure Prettier in `.prettierrc`:
  - `"singleQuote": true`
  - `"trailingComma": "es5"`
  - `"semi": true`
  - `"printWidth": 100`
  - `"tabWidth": 2`

## Variable and Function Naming

- Use descriptive names; avoid abbreviations except for well-known conventions
- Use active verbs for functions: `get`, `set`, `is`, `has`, `fetch`, `create`, `update`, `delete`
- Avoid single-letter variables except in loops (`for (const i = 0; ...)`)
- Use consistent naming across the codebase

## Comments

- Write comments only when the "why" is non-obvious
- Avoid comments that describe "what" the code does (the code should be self-explanatory)
- Document complex algorithms, workarounds, and non-obvious trade-offs
- Keep comments up-to-date with code changes

## Code Complexity

- Aim for functions that do one thing
- Keep cyclomatic complexity low (avoid deep nesting)
- Prefer early returns to reduce nesting
- Use guard clauses at the beginning of functions

## Constants

- Extract magic numbers and strings to named constants
- Group related constants in objects or enums
- Use `as const` for literal types
- Avoid mutating constants

## Error Handling

- Validate inputs at system boundaries (user input, API responses)
- Throw descriptive errors with clear messages
- Use specific error types instead of generic `Error`
- Handle errors explicitly; avoid silent failures
