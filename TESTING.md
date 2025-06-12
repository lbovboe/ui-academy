# Testing Guide for UI Academy

This guide explains how to write effective unit tests for React components using Jest and React Testing Library.

## Table of Contents

1. [Overview](#overview)
2. [Testing Philosophy](#testing-philosophy)
3. [What to Test](#what-to-test)
4. [Testing Tools](#testing-tools)
5. [Writing Tests](#writing-tests)
6. [Common Testing Patterns](#common-testing-patterns)
7. [Running Tests](#running-tests)
8. [Best Practices](#best-practices)

## Overview

We use **Jest** as our testing framework and **React Testing Library** for testing React components. This combination encourages testing components as users would interact with them, leading to more reliable and maintainable tests.

## Testing Philosophy

### Test What Users See and Do

- Test component behavior, not implementation details
- Focus on user interactions and outcomes
- Avoid testing internal state or methods directly
- Test accessibility and semantic structure

### The Testing Trophy

```
    🏆
   /   \
  /  E2E \     <- Few, high-value end-to-end tests
 /-------\
/  INTEG  \    <- Some integration tests
\---------/
\ UNIT   /     <- Many unit tests (what we focus on)
 \-----/
  \STATIC/     <- Linting, TypeScript, formatting
   \---/
```

## What to Test

### ✅ DO Test

1. **Rendering**: Does the component render without crashing?
2. **User Interactions**: Click, type, hover, focus events
3. **Conditional Rendering**: Different states based on props/state
4. **Accessibility**: ARIA attributes, semantic HTML, keyboard navigation
5. **Props Handling**: How component responds to different prop values
6. **State Changes**: How user actions affect component state
7. **Integration**: How components work together

### ❌ DON'T Test

1. **Implementation Details**: Internal state, private methods
2. **Third-party Libraries**: Assume they work correctly
3. **Styling**: Unless it affects functionality
4. **Complex Business Logic**: Should be in separate utility functions

## Testing Tools

### Jest

Jest is our testing framework that provides:

- **Test Runner**: Executes tests and reports results
- **Assertion Library**: `expect()` functions for making assertions
- **Mocking**: Mock functions, modules, and timers
- **Code Coverage**: Reports on how much code is tested
- **Snapshot Testing**: Capture component output for regression testing

### React Testing Library

React Testing Library provides utilities for:

- **Rendering**: Render components in a test environment
- **Querying**: Find elements by text, role, label, etc.
- **User Events**: Simulate user interactions
- **Waiting**: Wait for asynchronous changes
- **Custom Matchers**: Additional assertions via jest-dom

### Key Queries (in order of preference)

1. **getByRole**: Find by ARIA role (most accessible)
2. **getByLabelText**: Find form elements by their label
3. **getByText**: Find by text content
4. **getByDisplayValue**: Find form elements by their value
5. **getByAltText**: Find images by alt text
6. **getByTestId**: Find by data-testid (last resort)

## Writing Tests

### Basic Test Structure

```typescript
import { render, screen, fireEvent } from '@testing-library/react'
import MyComponent from './MyComponent'

describe('MyComponent', () => {
  it('should render correctly', () => {
    render(<MyComponent />)
    expect(screen.getByText('Hello World')).toBeInTheDocument()
  })
})
```

### Test Organization

```typescript
describe('ComponentName', () => {
  describe('Rendering', () => {
    // Tests for basic rendering
  });

  describe('User Interactions', () => {
    // Tests for clicks, typing, etc.
  });

  describe('Props Handling', () => {
    // Tests for different prop combinations
  });

  describe('Accessibility', () => {
    // Tests for ARIA, keyboard navigation, etc.
  });
});
```

## Common Testing Patterns

### 1. Testing Component Rendering

```typescript
it('renders without crashing', () => {
  render(<NavBar />)
  expect(screen.getByRole('img', { name: /logo/i })).toBeInTheDocument()
})
```

### 2. Testing User Interactions

```typescript
it('handles button click', () => {
  const handleClick = jest.fn()
  render(<Button onClick={handleClick}>Click me</Button>)

  fireEvent.click(screen.getByRole('button', { name: /click me/i }))
  expect(handleClick).toHaveBeenCalledTimes(1)
})
```

### 3. Testing Conditional Rendering

```typescript
it('shows error message when error prop is provided', () => {
  render(<Form error="Something went wrong" />)
  expect(screen.getByText('Something went wrong')).toBeInTheDocument()
})

it('does not show error message when no error', () => {
  render(<Form />)
  expect(screen.queryByText('Something went wrong')).not.toBeInTheDocument()
})
```

### 4. Testing Async Behavior

```typescript
it('loads data after button click', async () => {
  render(<DataLoader />)

  fireEvent.click(screen.getByRole('button', { name: /load data/i }))

  expect(await screen.findByText('Data loaded!')).toBeInTheDocument()
})
```

### 5. Mocking Dependencies

```typescript
// Mock external dependencies
jest.mock('./ThemeToggle', () => {
  return function MockThemeToggle() {
    return <button data-testid="theme-toggle">Theme Toggle</button>
  }
})

// Mock hooks
const mockUsePathname = jest.fn()
jest.mock('next/navigation', () => ({
  usePathname: () => mockUsePathname(),
}))
```

### 6. Testing Forms

```typescript
it('submits form with correct data', () => {
  const handleSubmit = jest.fn()
  render(<ContactForm onSubmit={handleSubmit} />)

  fireEvent.change(screen.getByLabelText(/name/i), {
    target: { value: 'John Doe' }
  })
  fireEvent.change(screen.getByLabelText(/email/i), {
    target: { value: 'john@example.com' }
  })
  fireEvent.click(screen.getByRole('button', { name: /submit/i }))

  expect(handleSubmit).toHaveBeenCalledWith({
    name: 'John Doe',
    email: 'john@example.com'
  })
})
```

## Running Tests

### Available Commands

```bash
# Run all tests
npm test

# Run tests in watch mode (re-runs on file changes)
npm run test:watch

# Run tests with coverage report
npm run test:coverage

# Run specific test file
npm test -- --testPathPatterns=NavBar.test.tsx

# Run tests matching a pattern
npm test -- --testNamePattern="renders"
```

### Test File Naming

- Place test files in `__tests__` folders next to components
- Use `.test.tsx` or `.spec.tsx` extensions
- Name test files after the component they test

```
app/
  components/
    headers/
      NavBar.tsx
      __tests__/
        NavBar.test.tsx
```

## Best Practices

### 1. Write Descriptive Test Names

```typescript
// ❌ Bad
it('works', () => {});

// ✅ Good
it('marks Home as active when on root path', () => {});
```

### 2. Use Arrange-Act-Assert Pattern

```typescript
it('updates counter when button is clicked', () => {
  // Arrange
  render(<Counter initialValue={0} />)

  // Act
  fireEvent.click(screen.getByRole('button', { name: /increment/i }))

  // Assert
  expect(screen.getByText('1')).toBeInTheDocument()
})
```

### 3. Test One Thing at a Time

```typescript
// ❌ Bad - testing multiple things
it('renders and handles clicks and shows correct text', () => {
  // Too many responsibilities
});

// ✅ Good - focused tests
it('renders with initial text', () => {});
it('handles button click', () => {});
it('shows updated text after click', () => {});
```

### 4. Use beforeEach for Setup

```typescript
describe('MyComponent', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    // Reset any global state
  });
});
```

### 5. Prefer User-Centric Queries

```typescript
// ❌ Avoid implementation details
screen.getByTestId('submit-button');

// ✅ Use semantic queries
screen.getByRole('button', { name: /submit/i });
```

### 6. Test Accessibility

```typescript
it('has proper semantic structure', () => {
  render(<NavBar />)

  // Test ARIA roles
  expect(screen.getByRole('navigation')).toBeInTheDocument()

  // Test alt text
  expect(screen.getByRole('img', { name: /logo/i })).toBeInTheDocument()

  // Test keyboard navigation
  const link = screen.getByRole('link', { name: /home/i })
  link.focus()
  expect(link).toHaveFocus()
})
```

### 7. Keep Tests Independent

Each test should be able to run in isolation and not depend on other tests.

### 8. Mock External Dependencies

Mock API calls, external libraries, and complex dependencies to keep tests fast and reliable.

## Example: NavBar Component Tests

See `app/components/headers/__tests__/NavBar.test.tsx` for a comprehensive example that demonstrates:

- Component rendering tests
- Navigation active state logic
- Event listener setup/cleanup
- Accessibility testing
- Responsive design verification
- Performance considerations

This test file serves as a template for testing similar components in your application.

## Resources

- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [React Testing Library Documentation](https://testing-library.com/docs/react-testing-library/intro/)
- [Testing Library Queries](https://testing-library.com/docs/queries/about/)
- [Jest DOM Matchers](https://github.com/testing-library/jest-dom)
- [Common Testing Mistakes](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)
