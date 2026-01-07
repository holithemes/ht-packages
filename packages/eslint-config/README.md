# @holithemes/eslint-config

> 🏢 **HoliThemes** - We build cutting-edge web technologies that bring your digital presence into the future

Internal ESLint configuration for HoliThemes projects with standardized coding and practice comprehensive security rules.

## Installation

```bash
npm install --save-dev @holithemes/eslint-config
```

## Usage

### Basic Setup
Create `eslint.config.js` in your project root:
```javascript
import config from '@holithemes/eslint-config';
export default config;
```

### Advanced Setup
```javascript
import htConfig from '@holithemes/eslint-config';

export default [
  ...htConfig,
  {
    // Your custom rules
    rules: {
      'no-console': 'warn'
    }
  }
];
```

### 📞 **Contact Us**
- 🌐 **Website**: [holithemes.com](https://holithemes.com)
- 📧 **Email**: [support@holithemes.com](mailto:support@holithemes.com)