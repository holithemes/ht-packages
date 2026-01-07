# @holithemes/phpcs-config

> 🏢 **HoliThemes** - We build cutting-edge web technologies that bring your digital presence into the future

Internal PHP CodeSniffer configuration for HoliThemes projects with coding standards,security rules and quality enforcement.

## Installation

```bash
npm install --save-dev @holithemes/phpcs-config
```

## Setup

### 1. Install PHP Dependencies
```bash
composer require --dev squizlabs/php_codesniffer
# For WordPress projects need to install wp-coding-standards
composer require --dev wp-coding-standards/wpcs
```

### 2. Create Configuration
Create `phpcs.xml` in your project root:
```xml
<?xml version="1.0"?>
<ruleset name="My Project">
  <rule ref="./node_modules/@holithemes/phpcs-config/phpcs.xml"/>
  <file>./src</file>
  <file>./includes</file>
</ruleset>
```

### Custom Exclusions
```xml
<?xml version="1.0"?>
<ruleset name="My Project">
  <rule ref="./node_modules/@holithemes/phpcs-config/phpcs.xml"/>
  
  <!-- Add your exclusions -->
  <exclude-pattern>*/tests/*</exclude-pattern>
  <exclude-pattern>*/build/*</exclude-pattern>
  
  <!-- Disable specific rules -->
  <rule ref="WordPress.Files.FileName">
    <severity>0</severity>
  </rule>
</ruleset>
```

### 📞 **Contact Us**
- 🌐 **Website**: [holithemes.com](https://holithemes.com)
- 📧 **Email**: [support@holithemes.com](mailto:support@holithemes.com)