# Testing Best Practices

## Unit Tests

- Test behavior, not implementation details
- Use descriptive test names that explain what is being tested
- Follow AAA pattern: Arrange → Act → Assert
- Keep tests focused on a single behavior per test
- Avoid test interdependencies; each test should be independent

## React Component Testing

- Test user interactions and visual output, not internal state
- Use `@testing-library/react` for component testing
- Query by accessible roles, labels, and text (avoid querying by class/id when possible)
- Avoid testing React internals (hooks, state, props) unless critical
- Use `userEvent` instead of `fireEvent` for more realistic user interactions

## Mocking

- Mock external dependencies (APIs, services, libraries)
- Avoid mocking implementation details
- Mock at module boundaries, not within components
- Use realistic mock data that matches production shape
- Reset mocks between tests to avoid side effects

## Test Coverage

- Aim for meaningful coverage, not high percentages
- Focus on critical paths and edge cases
- Don't test trivial code (getters, simple mapping)
- Integration tests > unit tests for catching real bugs

## Async Testing

- Always await async operations in tests
- Use `waitFor` for assertions on async state changes
- Handle promises properly; don't leave unresolved promises
- Test loading states, error states, and success states

## Test Organization

- Group related tests with `describe` blocks
- Use meaningful test names: `should [behavior] when [condition]`
- Keep test files close to source files (e.g., `Button.tsx` and `Button.test.tsx`)
- Avoid duplicate test setup; use `beforeEach` for common setup
