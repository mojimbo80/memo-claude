# TypeScript Best Practices

## Type Safety

- Always use explicit types for function parameters and return types, avoid `any`
- Use `unknown` instead of `any` when the type is truly unknown
- Enable strict mode in `tsconfig.json`:
  - `"strict": true`
  - `"noImplicitAny": true`
  - `"noImplicitThis": true`
  - `"strictNullChecks": true`

## Interfaces and Types

- Use `interface` for object shapes, `type` for unions and complex types
- Prefer specific types over `object` or `unknown` without proper narrowing
- Use `readonly` for immutable data structures
- Avoid extending with optional properties; use discriminated unions instead

## Naming Conventions

- Use PascalCase for classes, interfaces, and types
- Use camelCase for variables, functions, and properties
- Use UPPER_SNAKE_CASE for constants
- Prefix boolean variables/types with `is`, `has`, `can`, `should`

## Common Patterns

- Use discriminated unions for variant types instead of optional properties
- Use utility types: `Pick`, `Omit`, `Record`, `Partial`, `Required`
- Avoid circular dependencies; use barrel exports carefully
- Use `as const` for literal types when appropriate
