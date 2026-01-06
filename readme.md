# HT Packages

This package provides shared configuration for ESLint (JavaScript) and PHP_CodeSniffer (PHP) to ensure consistent coding standards across projects.

## 📦 Contents

- **ESLint Config**: `eslint.config.mjs` (ESLint 9+ compatible)
- **PHPCS Config**: `phpcs.xml` (WordPress Coding Standards)

## 🚀 Setup & Installation

### 1. Install Dependencies

To work on this package locally, install both JavaScript and PHP dependencies:

```bash
npm install
composer install
```

### 2. Verify Installation

Ensure that the linters are working correctly:

```bash
npm run lint:all
```

---

## 🛠 Development Commands

| Command | Description |
|---------|-------------|
| `npm run lint:js` | Lint JavaScript files. |
| `npm run lint:js:fix` | Fix JavaScript linting errors automatically. |
| `npm run lint:php` | Lint PHP files. |
| `npm run lint:php:fix` | Fix PHP linting errors automatically. |
| `npm run lint:all` | Run both JS and PHP linters. |
| `npm run lint:all:report` | Generate JSON/Text reports (requires `dev/reports/` scripts). |

---

## 📦 Publishing the Package

You do **not** need to run GitHub Actions to publish; you can publish directly from your local machine.

### Prerequisites
1. You must have an account on npmjs.com.
2. You must be logged in locally:
   ```bash
   npm login
   ```

### Steps to Publish

1. **Update Version**: Bump the version number (patch, minor, or major).
   ```bash
   npm version patch
   ```

2. **Publish to NPM**:
   ```bash
   npm publish
   ```
   *(If this is a scoped package like `@my-org/ht-packages`, use `npm publish --access public`)*
