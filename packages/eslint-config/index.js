import js from '@eslint/js';
import security from 'eslint-plugin-security';
import noUnsanitized from 'eslint-plugin-no-unsanitized';
import globals from 'globals';

export default [
  js.configs.recommended,
  {
    files: ['**/*.js', '**/*.jsx'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        Backbone: 'readonly',
        _: 'readonly',
        jQuery: 'readonly',
        console: 'readonly',
        window: 'readonly',
        document: 'readonly',
        $: 'readonly',
        setTimeout: 'readonly',
        ht_commons_var: 'readonly',
        htCommonsAutoload: 'readonly',
        wp: 'writable',
        passwordStrength: 'readonly'
      }
    },
    plugins: {
      security,
      'no-unsanitized': noUnsanitized
    },
    rules: {
      // Spacing
      indent: ['error', 'tab', { SwitchCase: 1 }],
      'no-trailing-spaces': 'error',
      'max-len': ['warn', { code: 150, tabWidth: 4, ignoreUrls: true, ignoreStrings: true, ignoreComments: true }],
      curly: ['error', 'all'],
      'comma-spacing': ['error', { before: false, after: true }],
      'semi-spacing': ['error', { before: false, after: true }],
      'semi-style': ['error', 'last'],
      'key-spacing': ['error', { beforeColon: false, afterColon: true }],
      'space-infix-ops': 'error',
      'array-bracket-spacing': ['error', 'always'],
      'object-curly-spacing': ['error', 'always'],
      'eol-last': ['error', 'always'],
      'space-unary-ops': ['error', { words: true, nonwords: false, overrides: { '!': true } }],
      'keyword-spacing': ['error', { before: true, after: true }],
      'space-before-blocks': ['error', 'always'],
      'block-spacing': ['error', 'always'],
      'space-before-function-paren': ['error', 'always'],
      'no-multiple-empty-lines': ['error', { max: 1 }],
      'space-in-parens': ['error', 'always'],
      'computed-property-spacing': ['error', 'always'],
      
      // Objects & Arrays
      'object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
      'comma-dangle': ['error', 'always-multiline'],
      'array-bracket-newline': ['error', { multiline: true }],
      'array-element-newline': ['error', 'consistent'],
      'comma-style': ['error', 'last'],
      'func-call-spacing': ['error', 'never'],
      
      // Semicolons
      semi: ['error', 'always'],
      
      // Line Breaks
      'function-paren-newline': ['error', 'multiline'],
      'object-curly-newline': ['error', { multiline: true, consistent: true }],
      'operator-linebreak': ['error', 'after'],
      'multiline-ternary': ['error', 'always-multiline'],
      'newline-per-chained-call': ['error', { ignoreChainWithDepth: 1 }],
      
      // Naming
      camelcase: ['error', { properties: 'never' }],
      'func-names': ['error', 'always'],
      'id-length': ['error', { min: 2, exceptions: ['$', 'i'] }],
      'new-cap': ['error', { newIsCap: true, capIsNew: false }],
      
      // Switch & Blocks
      'brace-style': ['error', '1tbs', { allowSingleLine: true }],
      'default-case': 'error',
      'no-fallthrough': 'error',
      
      // Best Practices
      'no-array-constructor': 'error',
      'dot-notation': 'error',
      'no-new-object': 'error',
      'no-unused-vars': ['error', { args: 'none' }],
      'no-constant-condition': 'error',
      'no-unmodified-loop-condition': 'error',
      'no-await-in-loop': 'warn',
      'no-iterator': 'error',
      'no-proto': 'error',
      'no-labels': 'error',
      'no-extra-bind': 'error',
      'no-new-wrappers': 'error',
      'no-return-assign': ['error', 'always'],
      'prefer-const': 'error',
      'prefer-rest-params': 'error',
      'prefer-spread': 'error',
      
      // Equality & Types
      eqeqeq: ['error', 'always', { null: 'ignore' }],
      
      // Strings
      quotes: ['error', 'single', { avoidEscape: true }],
      
      // Comments
      'spaced-comment': ['error', 'always', { exceptions: ['-'] }],
      'lines-around-comment': ['error', {
        beforeBlockComment: true,
        beforeLineComment: true,
        allowBlockStart: true,
        allowObjectStart: true,
        allowArrayStart: true
      }],
      
      // Restricted Globals
      'no-restricted-globals': [
        'error',
        { name: '$', message: 'Use $ only inside (function($){ ... })(jQuery);' },
        { name: 'location', message: 'Direct access to location object can be dangerous. Use window.location and validate inputs.' },
        { name: 'history', message: 'Direct access to history object can be dangerous. Use window.history and validate inputs.' }
      ],
      
      // Security
      'no-eval': 'error',
      'no-implied-eval': 'error',
      'no-new-func': 'error',
      'no-script-url': 'error',
      'no-prototype-builtins': 'error',
      'no-extend-native': 'error',
      'no-unsanitized/method': 'error',
      'no-unsanitized/property': 'error',
      'security/detect-eval-with-expression': 'error',
      'security/detect-non-literal-regexp': 'warn',
      'security/detect-non-literal-require': 'warn',
      'security/detect-object-injection': 'error',
      'security/detect-new-buffer': 'error',
      'security/detect-bidi-characters': 'error',
      'security/detect-buffer-noassert': 'warn',
      'security/detect-possible-timing-attacks': 'warn',
      'security/detect-unsafe-regex': 'error',
      'security/detect-child-process': 'error',
      
      // Restricted Properties
      'no-restricted-properties': [
        'error',
        { object: 'document', property: 'write', message: 'document.write can lead to XSS. Use safe DOM methods.' },
        { object: 'document', property: 'writeln', message: 'document.writeln can lead to XSS. Use safe DOM methods.' },
        { object: 'window', property: 'eval', message: 'eval() can execute malicious code. Avoid dynamic code execution.' },
        { object: 'location', property: 'href', message: 'Direct location.href assignment can lead to XSS. Validate and sanitize URLs.' },
        { object: 'window', property: 'location', message: 'Direct window.location manipulation can lead to XSS. Validate URLs.' }
      ],
      
      // Restricted Syntax
      'no-restricted-syntax': [
        'error',
        { selector: 'ForInStatement', message: 'Use Object.keys(), Object.values(), or Object.entries() instead of for...in.' },
        { selector: 'WithStatement', message: '`with` is not allowed.' },
        { selector: "CallExpression[callee.name='eval']", message: 'eval is not allowed.' },
        { selector: "CallExpression[callee.name='setTimeout'][arguments.0.type='Literal']", message: 'setTimeout with string argument is unsafe. Use a function.' },
        { selector: "CallExpression[callee.name='setInterval'][arguments.0.type='Literal']", message: 'setInterval with string argument is unsafe. Use a function.' },
        { selector: "CallExpression[callee.property.name='html']:not([arguments.0.type='Literal'])", message: 'jQuery .html() with dynamic content can cause XSS. Sanitize input or use .text().' },
        { selector: "AssignmentExpression[left.property.name='innerHTML']", message: 'Direct innerHTML assignment can cause XSS. Use textContent or sanitize input.' },
        { selector: "AssignmentExpression[left.property.name='outerHTML']", message: 'Direct outerHTML assignment can cause XSS. Use safe DOM methods.' },
        { selector: "CallExpression[callee.property.name='insertAdjacentHTML']", message: 'insertAdjacentHTML can cause XSS. Sanitize input or use insertAdjacentText.' },
        { selector: "NewExpression[callee.name='Function']", message: 'Function constructor can execute arbitrary code. Avoid dynamic function creation.' },
        { selector: "CallExpression[callee.property.name='setAttribute'][arguments.0.value='onclick']", message: 'Setting onclick via setAttribute with dynamic content can cause XSS. Use addEventListener instead.' },
        { selector: "CallExpression[callee.property.name='setAttribute'][arguments.0.value=/^on/]", message: 'Setting event handlers via setAttribute can cause XSS. Use addEventListener instead.' },
        { selector: "CallExpression[callee.object.name='document'][callee.property.name='createElement'][arguments.0.type!='Literal']", message: 'Dynamic element creation can be dangerous. Use literal tag names only.' },
        { selector: "MemberExpression[object.name='location'][property.name='search']", message: 'Using location.search without sanitization can lead to XSS. Validate and sanitize URL parameters.' },
        { selector: "MemberExpression[object.name='location'][property.name='hash']", message: 'Using location.hash without sanitization can lead to XSS. Validate and sanitize hash values.' },
        { selector: "CallExpression[callee.name='decodeURIComponent']:not([arguments.0.type='Literal'])", message: 'decodeURIComponent with user input can cause injection. Validate input first.' },
        { selector: "CallExpression[callee.name='decodeURI']:not([arguments.0.type='Literal'])", message: 'decodeURI with user input can cause injection. Validate input first.' },
        { selector: "CallExpression[callee.property.name='attr'][arguments.0.value='href'][arguments.length=2]", message: 'Setting href attribute with dynamic content can cause XSS. Validate and sanitize URLs.' },
        { selector: "CallExpression[callee.property.name='attr'][arguments.0.value='src']:not([arguments.1.type='Literal'])", message: 'Setting src attribute with dynamic content can cause XSS. Validate and sanitize URLs.' },
        { selector: "CallExpression[callee.property.name='css']:not([arguments.0.type='Literal']):not([arguments.1.type='Literal'])", message: 'Dynamic CSS injection can cause XSS. Sanitize CSS properties and values.' },
        { selector: "TemplateLiteral:has(TemplateElement[value.raw*='<']):has(Identifier)", message: 'Template literals containing HTML with variables can cause XSS. Sanitize variables.' },
        { selector: "BinaryExpression[operator='+']:has(Literal[value*='<']):has(Identifier)", message: 'String concatenation with HTML and variables can cause XSS. Sanitize variables.' },
        { selector: "CallExpression[callee.object.name='window'][callee.property.name='open'][arguments.0.type!='Literal']", message: 'XSS Risk: window.open() with dynamic URL can cause XSS and redirect attacks. Validate URLs.' },
        { selector: "CallExpression[callee.property.name='add'][arguments.1.type!='Literal']", message: 'XSS Risk: Adding dynamic class names can cause XSS via CSS injection. Sanitize class names.' },
        { selector: "CallExpression[callee.name='JSON'][callee.property.name='parse']:not(:has(TryStatement))", message: 'Error Handling: JSON.parse can throw SyntaxError. Wrap in try-catch block.' },
        { selector: "CatchClause[param=null]", message: 'Error Handling: Empty catch block silently ignores errors. Add error logging.' },
        { selector: "CatchClause > BlockStatement[body.length=0]", message: 'Error Handling: Empty catch block silently ignores errors. Add error logging.' },
        { selector: "BlockComment[value*='TODO']", message: 'Maintainability: Large commented code blocks should be removed or implemented.' },
        { selector: "CallExpression[callee.property.name='preventDefault']:not([parent.type='IfStatement'])", message: 'Readability: preventDefault should be called before main action for consistent behavior.' },
        { selector: "CallExpression[callee.name='parseInt']:not([arguments.1])", message: 'Error Handling: parseInt without radix can return NaN. Add radix parameter or validation.' },
        { selector: "CallExpression[callee.property.name='querySelector']:not([parent.type='VariableDeclarator'])", message: 'Performance: Cache DOM queries in variables to avoid redundant traversal.' },
        { selector: "CallExpression[callee.property.name='addEventListener']:not([parent.parent.type='Program'])", message: 'Performance: Multiple event listeners may cause memory leaks. Check for cleanup.' }
      ],
      
      // Error handling
      'no-empty': 'error',
      'no-empty-function': 'warn',
      'no-console': 'off',
      'no-debugger': 'error'
    }
  },
  
  // Special configuration for minified/compiled files
  {

    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        console: 'readonly',
        window: 'readonly',
        document: 'readonly'
      }
    },
    rules: {
      // Disable formatting rules for minified files
      indent: 'off',
      quotes: 'off',
      semi: 'off',
      'space-in-parens': 'off',
      'func-names': 'off',
      'id-length': 'off',
      'no-restricted-syntax': 'off',
      'space-before-function-paren': 'off',
      'newline-per-chained-call': 'off',
      'no-unused-vars': 'off',
      'no-empty': 'off',
      'no-empty-function': 'off',
      'computed-property-spacing': 'off',
      'array-bracket-spacing': 'off',
      'prefer-rest-params': 'off',
      'operator-linebreak': 'off',
      'space-unary-ops': 'off',
      'comma-dangle': 'off',
      camelcase: 'off',
      eqeqeq: 'off',
      'space-infix-ops': 'off',
      'keyword-spacing': 'off',
      'space-before-blocks': 'off',
      'block-spacing': 'off',
      'no-multiple-empty-lines': 'off',
      'object-curly-spacing': 'off',
      'key-spacing': 'off',
      'semi-spacing': 'off',
      'comma-spacing': 'off',
      'brace-style': 'off',
      'max-len': 'off',
      'no-trailing-spaces': 'off',
      'eol-last': 'off',
      'spaced-comment': 'off',
      'lines-around-comment': 'off',
      curly: 'off',
      'no-undef': 'off',
      'security/detect-object-injection': 'off',
      'function-paren-newline': 'off',
      'no-unsanitized/method': 'off',
      'no-unsanitized/property': 'off',
      'security/detect-eval-with-expression': 'off',
      'security/detect-non-literal-regexp': 'off',
      'security/detect-non-literal-require': 'off',
      'security/detect-new-buffer': 'off',
      'security/detect-bidi-characters': 'off',
      'security/detect-buffer-noassert': 'off',
      'security/detect-possible-timing-attacks': 'off',
      'security/detect-unsafe-regex': 'off',
      'security/detect-child-process': 'off',
      'no-restricted-properties': 'off',
      
      // Only enable critical security rules for minified files
      'no-console': 'error',
      'no-debugger': 'error',
      'no-eval': 'error',
      'no-implied-eval': 'error',
      'no-new-func': 'error'
    }
  }
];