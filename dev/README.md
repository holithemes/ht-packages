# HT Packages Development Guide

Complete guide for developing, testing, and publishing HoliThemes linting packages.

## 📁 Project Structure

```
ht-packages/
├── packages/
│   ├── eslint-config/          # @holithemes/eslint-config
│   ├── phpcs-config/           # @holithemes/phpcs-config
│   ├── ht-packages/            # @holithemes/ht-packages (main)
│   └── shared-utils/           # @holithemes/shared-utils
├── package.json                # Monorepo workspace config
└── README.md                   # Main documentation
```

## 📦 Publishing Packages

## 📝 Publishing Notes

### First Time Publishing
- **`--access public`** is required for scoped packages (`@holithemes/*`)
- Without it, npm tries to publish as private (requires paid plan)
- Once set, subsequent publishes remember the access level

### What Happens Without `--access public`?
```bash
# This will FAIL for first publish:
npm publish
# Error: You must sign up for private packages

# This will WORK:
npm publish --access public
```

### Prerequisites
1. **NPM Account**: Create account at [npmjs.com](https://npmjs.com)
2. **Organization Access**: Join `@holithemes` organization
3. **Authentication**: Login to npm
```bash
npm login
```

### Publishing Individual Packages

#### 1. ESLint Config Package
```bash
cd packages/eslint-config

# Update version
npm version patch  # or minor/major

# First publish (sets public access)
npm publish --access public

# Subsequent publishes
npm publish

# Verify publication
npm view @holithemes/eslint-config
```

#### 2. PHPCS Config Package
```bash
cd packages/phpcs-config

# Update version
npm version patch

# First publish (one time only)
npm publish --access public

# Subsequent publishes
npm publish

# Verify publication
npm view @holithemes/phpcs-config
```

#### 3. Shared Utils Package
```bash
cd packages/shared-utils

# Update version
npm version patch

# First publish (one time only)
npm publish --access public

# Subsequent publishes
npm publish

# Verify publication
npm view @holithemes/shared-utils
```

#### 4. Main HT Packages
```bash
cd packages/ht-packages

# Update version
npm version patch

# First publish (one time only)
npm publish --access public

# Subsequent publishes
npm publish

# Verify publication
npm view @holithemes/ht-packages
```

### Publishing All Packages (Monorepo)
```bash
cd ht-packages
# From root directory

# Update versions for all packages
npm run version:patch
# or
npm run version:minor
# or
npm run version:major

# Publish all packages
npm run publish:all

# Verify all publications
npm view @holithemes/eslint-config
npm view @holithemes/phpcs-config
npm view @holithemes/shared-utils
npm view @holithemes/ht-packages
```

## 🔧 Usage Instructions

### ESLint Configuration

#### Installation
```bash
npm install --save-dev @holithemes/eslint-config
```

#### Usage in Project
Create `eslint.config.js`:
```javascript
import config from '@holithemes/eslint-config';

export default config;
```

#### Run ESLint
```bash
# Lint files
npx eslint .

# Fix auto-fixable issues
npx eslint . --fix

# Lint specific files
npx eslint src/**/*.js
```

### PHPCS Configuration

#### Installation
```bash
npm install --save-dev @holithemes/phpcs-config
```

#### Usage in Project
Create `phpcs.xml`:
```xml
<?xml version="1.0"?>
<ruleset name="My Project">
  <rule ref="./node_modules/@holithemes/phpcs-config/phpcs.xml"/>
  <file>./src</file>
</ruleset>
```

#### Run PHPCS
```bash
# Install PHP dependencies
composer require --dev squizlabs/php_codesniffer
composer require --dev wp-coding-standards/wpcs

# Lint PHP files
./vendor/bin/phpcs

# Fix auto-fixable issues
./vendor/bin/phpcbf

# Lint specific files
./vendor/bin/phpcs src/
```

### Combined Package Usage

#### Installation
```bash
npm install --save-dev @holithemes/ht-packages
```

#### Usage
```javascript
import { eslintConfig, validateConfig } from '@holithemes/ht-packages';

// Use ESLint config
export default eslintConfig;

// Use utilities
validateConfig(myConfig);
```

## 🧪 Testing Packages

### Test ESLint Config
```bash
cd packages/eslint-config

# Create test file
echo "const test = 'hello world'" > test.js

# Test linting
npx eslint test.js

# Clean up
rm test.js
```

### Test PHPCS Config
```bash
cd packages/phpcs-config

# Create test PHP file
echo "<?php echo 'hello world';" > test.php

# Test linting (requires composer install)
composer install
./vendor/bin/phpcs test.php

# Clean up
rm test.php
```

## 🔄 Version Management

### Semantic Versioning
- **Patch** (1.0.1): Bug fixes, minor updates
- **Minor** (1.1.0): New features, backward compatible
- **Major** (2.0.0): Breaking changes

### Version Commands
```bash
# Patch version (1.0.0 → 1.0.1)
npm version patch

# Minor version (1.0.0 → 1.1.0)
npm version minor

# Major version (1.0.0 → 2.0.0)
npm version major

# Custom version
npm version 1.2.3
```

## 🚨 Troubleshooting

### Common Issues

#### 1. Permission Denied
```bash
# Fix: Login to npm
npm login

# Verify login
npm whoami
```

#### 2. Package Already Exists
```bash
# Fix: Update version first
npm version patch
npm publish --access public
```

#### 3. Scoped Package Access
```bash
# Fix: Ensure public access
npm publish --access public
```

#### 4. Workspace Dependencies
```bash
# Fix: Install from root
cd ../../  # Go to root
npm install
```

## 📋 Checklist Before Publishing

### Pre-publish Checklist
- [ ] Code is tested and working
- [ ] Version is updated (`npm version`)
- [ ] README is updated
- [ ] Dependencies are correct
- [ ] No sensitive data in package
- [ ] Logged into npm (`npm whoami`)

### Post-publish Verification
- [ ] Package appears on npmjs.com
- [ ] Installation works (`npm install @holithemes/package-name`)
- [ ] Usage examples work
- [ ] Documentation is accessible

## 🔗 Useful Links

- [NPM Documentation](https://docs.npmjs.com/)
- [ESLint Configuration](https://eslint.org/docs/user-guide/configuring/)
- [PHPCS Documentation](https://github.com/squizlabs/PHP_CodeSniffer)
- [WordPress Coding Standards](https://github.com/WordPress/WordPress-Coding-Standards)

## 📞 Support

For issues or questions:
1. Check existing [GitHub Issues](https://github.com/harsha-ht-code/ht-packages/issues)
2. Create new issue with detailed description
3. Contact team lead for urgent matters