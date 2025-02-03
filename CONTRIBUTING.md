# Contributing Guidelines

## Commit Messages

Follow the conventional commits specification:

- feat(auth-BE-01): Add user authentication
- fix(BE-00): Correct API response format
- docs(FE-02): Update user card styles
- refactor(BE-00): Refactor code
- style(BE-00): Update code style
- test(BE-00): Add tests
- chore(BE-00): Update dependencies

### Rules

- Type: `feat`, `fix`, `docs`, `refactor`, `style`, `test`, `chore`
- Scope: Must be in kebab-case and follow the pattern `auth-BE-01`, `BE-00`, `FE-02`, etc.
- Subject: Must start with a capital letter and not end with a period.
- Header: Must be at most 72 characters long.

## Branch Strategy

- `main`: Production-ready code
- `develop`: Integration branch
- `feature/track-stage/feature-name`: New features (e.g., `feature/auth-BE-01/login`)
- `fix/track-stage/bug-name`: Bug fixes (e.g., `fix/ui-FE-02/button-click`)
- `track`: Represents the bootcamp track (e.g., `BE`, `FE`, `DO`)
- `stage`: Represents the stage in the bootcamp (e.g., `00`, `01`, `02`)

### Examples

- `feature/auth-BE-01/login`: Adding login feature in stage 1 of authentication track
- `fix/ui-FE-02/button-click`: Fixing button click issue in stage 2 of UI track

## Coding Style Guide

### General Guidelines

- Use **TypeScript** for all backend and frontend code.
- Follow **ESLint** and **Prettier** configurations provided in the project.
- Use **camelCase** for variable and function names.
- Use **PascalCase** for class and interface names.
- Use **kebab-case** for file and folder names.

### Indentation and Formatting

- Use **2 spaces** for indentation.
- Always use semicolons (`;`) at the end of statements.
- Use single quotes (`'`) for strings unless interpolating.

### Comments

- Use **JSDoc** for documenting functions, classes, and interfaces.
- Include inline comments for complex logic.

### Example

```typescript
// Good
function calculateSum(a: number, b: number): number {
  return a + b;
}

// Bad
function calculate_sum(a: number, b: number): number {
  return a + b;
}
```

## Development Workflow

1. Create feature branch
2. Make changes
3. Run tests and linting
4. Create PR to develop
5. Merge after review
