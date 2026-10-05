# React Best Practices

## Component Structure

- Use functional components with hooks, not class components
- One component per file (unless very tightly coupled)
- Extract custom hooks to separate files in `hooks/` directory
- Keep components focused: do one thing well

## Props and State

- Use destructuring for props in function parameters
- Define prop types/interfaces above the component
- Avoid passing all props with spread operator; be explicit about which props are used
- Keep state minimal; derive computed values instead of storing them
- Use `useCallback` and `useMemo` only when performance is measured and needed

## Hooks Usage

- Only call hooks at the top level of components
- Use `useEffect` dependencies array correctly; include all dependencies
- Avoid unnecessary effect dependencies; extract logic to separate hooks if needed
- Prefer custom hooks for shared logic between components

## Rendering

- Avoid inline function definitions in JSX (except simple arrow functions)
- Use keys in lists; never use index as key when list can be reordered
- Break large render methods into smaller sub-components

## Context API

- Only use Context for data that doesn't change frequently
- Split contexts by concern (auth, theme, ui state, etc.)
- Avoid using Context for frequently changing values (use Redux/Zustand instead)

## Patterns to Avoid

- Don't call state setters inside render directly
- Don't use Context for prop drilling across many levels without considering performance
- Don't render components inside render methods
- Don't forget cleanup in useEffect return function for subscriptions/timers
