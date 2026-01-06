import js from "@eslint/js";
import globals from "globals";
import security from "eslint-plugin-security"; // General JS security rules
import noUnsanitized from "eslint-plugin-no-unsanitized"; // DOM XSS guards (wp security)

// eslint.config.mjs

export default [
  // Ignore files
  {
  },

  // Base JS rules
  js.configs.recommended,

  // // WordPress plugin defaults (ENABLE IF NEEDED )
  // wordpressPlugin.configs.recommended,

  {
    files: ["**/*.js", "**/*.jsx"],

    languageOptions: {
      // ecmaVersion: "latest",// Use the latest ECMAScript version
      ecmaVersion: 2020, //ES COMPATIBILITY UP TO ES11 (2020)

      sourceType: "module", // Use 'module' for ES modules
      globals: {
        ...globals.browser,
        ...globals.node,
        // Allow Backbone globally(JavaScript MVC (Model-View-Controller) framework.)
        Backbone: "readonly",

        // Allow Underscore.js globally (JavaScript library that provides utility functions for common programming tasks.)
        _: "readonly",

        // Allow jQuery globally
        jQuery: "readonly",

        // Allow console methods
        console: "readonly",

        // Allow window object in browser environments
        window: "readonly",

        // Allow document object in browser environments
        document: "readonly",
        // Allow $ for jQuery (use only inside (function($){ ... })(jQuery); )
        $: "readonly",

        // Allow setTimeout globally
        setTimeout: "readonly",

        // Allow ht_commons_var globally (custom global variable, likely defined elsewhere in the project)
        ht_commons_var: "readonly",

        // Allow htCommonsAutoload globally (custom global variable, likely defined elsewhere in the project)
        htCommonsAutoload: "readonly",
        // Allow WordPress global object (used in WordPress development)
        wp: "writable",

        // Allow passwordStrength globally (used in WordPress for password strength validation)
        passwordStrength: "readonly",
      },
    },
    plugins: {
      security,
      "no-unsanitized": noUnsanitized,
    },
    rules: {
      /* ────────────── Spacing ────────────── */

      indent: ["error", "tab", { SwitchCase: 1 }], //   [WPCS FOR JS]

      "no-trailing-spaces": "error", //  [WPCS FOR JS]

      "max-len": [
        "warn",
        {
          code: 100,
          tabWidth: 4,
          ignoreUrls: true,
          ignoreStrings: true,
          ignoreComments: true,
        },
      ], // [NOT WPCS  EXACTLY BUT   BEST PRACTICE]

      curly: ["error", "all"], //  [WPCS FOR JS]

      "comma-spacing": ["error", { before: false, after: true }], //  [WPCS FOR JS]

      "semi-spacing": ["error", { before: false, after: true }], //  [WPCS FOR JS]

      "semi-style": ["error", "last"], //  [WPCS FOR JS]

      "key-spacing": ["error", { beforeColon: false, afterColon: true }], //  [WPCS FOR JS]

      "space-infix-ops": "error", //  [WPCS FOR JS]

      "array-bracket-spacing": ["error", "always"], // WordPress style

      "object-curly-spacing": ["error", "always"], // [NOT WPCS  EXACTLY BUT   BEST PRACTICE]

      "eol-last": ["error", "always"], //  [WPCS FOR JS]

      "space-unary-ops": [
        "error",
        { words: true, nonwords: false, overrides: { "!": true } },
      ], //  [WPCS FOR JS]

      "keyword-spacing": ["error", { before: true, after: true }], //  [WPCS FOR JS]

      "space-before-blocks": ["error", "always"], //  [WPCS FOR JS]

      "block-spacing": ["error", "always"], //  [WPCS FOR JS]

      "space-before-function-paren": ["error", "always"], // [NOT WPCS listed EXACTLY, BUT   BEST PRACTICE(only for wp adding it)]

      "no-multiple-empty-lines": ["error", { max: 1 }], //  [WPCS FOR JS]

      "space-in-parens": ["error", "always"], // [NOT WPCS listed EXACTLY, BUT   BEST PRACTICE(only for wp adding it)]

      "computed-property-spacing": ["error", "always"], // [NOT WPCS listed EXACTLY, BUT   BEST PRACTICE(only for wp adding it)]

      //   "catch-spacing": ["error", { before: true, after: true }],   // not supported in ESLint v9.33

      /* ────────────── Objects & Arrays ────────────── */

      "object-property-newline": [
        "error",
        { allowAllPropertiesOnSameLine: true },
      ], // [WPCS FOR JS]

      "comma-dangle": ["error", "always-multiline"], //[NOT WPCS  EXACTLY BUT   BEST PRACTICE]
      "array-bracket-newline": ["error", { multiline: true }], //[NOT WPCS  EXACTLY BUT   BEST PRACTICE]
      "array-element-newline": ["error", "consistent"], //[NOT WPCS  EXACTLY BUT   BEST PRACTICE]
      "comma-style": ["error", "last"], // [WPCS FOR JS]
      "func-call-spacing": ["error", "never"], // [WPCS FOR JS]

      /* ────────────── Semicolons ────────────── */

      semi: ["error", "always"], // [WPCS FOR JS]

      /* ────────────── Line Breaks ────────────── */

      "function-paren-newline": ["error", "multiline"], //[NOT WPCS  EXACTLY BUT   BEST PRACTICE]
      "object-curly-newline": ["error", { multiline: true, consistent: true }], //[NOT WPCS EXACTLY  BUT  BEST PRACTICE]
      "operator-linebreak": ["error", "after"], //[NOT WPCS EXACTLY  BUT  BEST PRACTICE]
      "multiline-ternary": ["error", "always-multiline"], //[NOT WPCS BUT EXACTLY   BEST PRACTICE]
      "newline-per-chained-call": ["error", { ignoreChainWithDepth: 1 }], //[NOT WPCS EXACTLY BUT  BEST PRACTICE]

      /* ────────────── Naming ────────────── */
      //  camelcase: ["error", { properties: "always" }], // enforce camelCase  according to WPCS
      camelcase: [
        "error",
        {
          properties: "never",
          // Allow common WordPress/PHP-style naming patterns
        },
      ], // enforce camelCase  according to HT-Commons customizations. - [CUSTOM RULE FOR HT-COMMONS]

      "func-names": ["error", "always"], // enforce function names -  [WPCS FOR JS]

      "id-length": ["error", { min: 2, exceptions: ["$", "i"] }], // allow short names like $, i. ($ we added out of wpcs)
      // "id-length": ["error", { min: 2, exceptions: ["$", "i", "e"] }], // allow short names like $, i. ($ we added out of wpcs)

      // "id-match":
      // [
      //     "error",

      //     // "^([a-z][a-zA-Z0-9]*|DOM[A-Z][a-zA-Z0-9]*|Id[A-Z][a-zA-Z0-9]*)$",
      //     "^[a-z][a-zA-Z0-9]*$",

      //     { onlyDeclarations: true, properties: true }

      // ],// enforce specific naming pattern for identifiers,(camelCase , DOMId , ID)-[WPCS FOR JS]

      "new-cap": ["error", { newIsCap: true, capIsNew: false }],

      /* ────────────── Switch & Blocks ────────────── */

      "brace-style": ["error", "1tbs", { allowSingleLine: true }], // [WPCS FOR JS]
      "default-case": "error", //[ESLint BEST PRACTICE]
      "no-fallthrough": "error", //[ESLint BEST PRACTICE]

      /* ────────────── Best Practices ────────────── */
      // ✅ Arrays
      "no-array-constructor": "error",

      // ✅ Objects
      "dot-notation": "error", // Use dot notation unless dynamic key or invalid string identifier. - []
      "no-new-object": "error", // // Use {} instead of new Object()- [WPCS FOR JS]
      // ✅ Iteration
      "no-unused-vars": ["error", { args: "none" }],

      "no-constant-condition": "error", // [WPCS FOR JS]
      "no-unmodified-loop-condition": "error", // [WPCS FOR JS]
      "no-await-in-loop": "warn", // [WPCS FOR JS]
      "no-iterator": "error", // [WPCS FOR JS]
      "no-proto": "error", // [WPCS FOR JS]
      "no-labels": "error", // [WPCS FOR JS]
      "no-extra-bind": "error", // [WPCS FOR JS]
      "no-new-wrappers": "error", // [WPCS FOR JS]
      "no-return-assign": ["error", "always"], // [WPCS FOR JS]

      "prefer-const": "error", // [WPCS FOR JS]
      "prefer-rest-params": "error", // [WPCS FOR JS]
      "prefer-spread": "error", // [WPCS ]

      /* ────────────── Equality & Types ────────────── */
      eqeqeq: ["error", "always", { null: "ignore" }], // [WPCS FOR JS]

      // "valid-typeof": "error",//[ESLINT DEFAULT]

      /* ────────────── Strings ────────────── */

      quotes: ["error", "single", { avoidEscape: true }], // [WPCS FOR JS]

      /* ────────────── Comments ────────────── */

      "spaced-comment": ["error", "always", { exceptions: ["-"] }], // [WPCS FOR JS]

      // "valid-jsdoc": "warn",
      // "require-jsdoc": [
      //   "warn",
      //   {
      //     require: {
      //       FunctionDeclaration: true,
      //       ClassDeclaration: true,
      //       MethodDefinition: true
      //     }
      //   }
      // ],  // not supported in ESLint v9.33

      "lines-around-comment": [
        "error",
        {
          beforeBlockComment: true,
          beforeLineComment: true,
          allowBlockStart: true,
          allowObjectStart: true,
          allowArrayStart: true,
        },
      ], //[ESLINT RULE FOR SPACES IN START OF COMMENTS]

      /* ────────────── Restricted Globals ────────────── */
      // Prefer explicit `window` and validate input; keep $ limited to jQuery wrapper.
      "no-restricted-globals": [
        "error",
        {
          name: "$",
          message: "Use $ only inside (function($){ ... })(jQuery);",
        },
        {
          name: "location",
          message:
            "Direct access to location object can be dangerous. Use window.location and validate inputs.",
        },
        {
          name: "history",
          message:
            "Direct access to history object can be dangerous. Use window.history and validate inputs.",
        },
      ], //[WPCS FOR JS BUT INDIRECTLY]

      /* ───────── Security (General + WP) ───────── */
      // Core ESLint security-sensitive patterns
      "no-eval": "error",
      "no-implied-eval": "error",
      "no-new-func": "error",
      "no-script-url": "error",
      "no-prototype-builtins": "error",
      "no-extend-native": "error",

      // plugin: eslint-plugin-no-unsanitized
      "no-unsanitized/method": "error",
      "no-unsanitized/property": "error",

      // plugin: eslint-plugin-security
      "security/detect-eval-with-expression": "error",
      "security/detect-non-literal-regexp": "warn",
      "security/detect-non-literal-require": "warn",
      "security/detect-object-injection": "error",
      "security/detect-new-buffer": "error",
      "security/detect-bidi-characters": "error",
      "security/detect-buffer-noassert": "warn",
      "security/detect-possible-timing-attacks": "warn",
      "security/detect-unsafe-regex": "error",
      "security/detect-child-process": "error",

      /* ────────────── Dangerous DOM properties (XSS prevention) ────────────── */
      "no-restricted-properties": [
        "error",
        {
          object: "document",
          property: "write",
          message: "document.write can lead to XSS. Use safe DOM methods.",
        },
        {
          object: "document",
          property: "writeln",
          message: "document.writeln can lead to XSS. Use safe DOM methods.",
        },
        {
          object: "window",
          property: "eval",
          message:
            "eval() can execute malicious code. Avoid dynamic code execution.",
        },
        {
          object: "location",
          property: "href",
          message:
            "Direct location.href assignment can lead to XSS. Validate and sanitize URLs.",
        },
        {
          object: "window",
          property: "location",
          message:
            "Direct window.location manipulation can lead to XSS. Validate URLs.",
        },
      ],

      /* ==================================================
       * DANGEROUS DOM APIS (TARGETED)
       * ================================================== */
      "no-restricted-properties": [
        "error",
        { object: "document", property: "write", message: "Avoid document.write()" },
        { object: "document", property: "writeln", message: "Avoid document.writeln()" },
      ],

      /* ────────────── XSS & Syntax Restrictions ────────────── */
      "no-restricted-syntax": [
        "error",
        // jQuery .html() with non-literal argument
        {
          selector:
            "CallExpression[callee.property.name='html']:not([arguments.0.type='Literal'])",
          message:
            "jQuery .html() with dynamic content can cause XSS. Sanitize input or use .text().",
        },
        // innerHTML / outerHTML assignments
        {
          selector: "AssignmentExpression[left.property.name='innerHTML']",
          message:
            "Direct innerHTML assignment can cause XSS. Use textContent or sanitize input.",
        },
        {
          selector: "AssignmentExpression[left.property.name='outerHTML']",
          message:
            "Direct outerHTML assignment can cause XSS. Use safe DOM methods.",
        },
        // insertAdjacentHTML
        {
          selector: "CallExpression[callee.property.name='insertAdjacentHTML']",
          message:
            "insertAdjacentHTML can cause XSS. Sanitize input or use insertAdjacentText.",
        },
        // setTimeout / setInterval with non-literal first arg
        {
          selector:
            "CallExpression[callee.name='setTimeout'][arguments.0.type='Literal']",
          message:
            "setTimeout with string argument can cause code injection. Use function references.",
        },
        {
          selector:
            "CallExpression[callee.name='setInterval'][arguments.0.type='Literal']",
          message:
            "setInterval with string argument can cause code injection. Use function references.",
        },
        // Function constructor
        {
          selector: "NewExpression[callee.name='Function']",
          message:
            "Function constructor can execute arbitrary code. Avoid dynamic function creation.",
        },
        // setAttribute onclick / /^on/ handlers
        {
          selector:
            "CallExpression[callee.property.name='setAttribute'][arguments.0.value='onclick']",
          message:
            "Setting onclick via setAttribute with dynamic content can cause XSS. Use addEventListener instead.",
        },
        {
          selector:
            "CallExpression[callee.property.name='setAttribute'][arguments.0.value=/^on/]",
          message:
            "Setting event handlers via setAttribute can cause XSS. Use addEventListener instead.",
        },
        // document.createElement with dynamic tag name
        {
          selector:
            "CallExpression[callee.object.name='document'][callee.property.name='createElement'][arguments.0.type!='Literal']",
          message:
            "Dynamic element creation can be dangerous. Use literal tag names only.",
        },
        // location.search / hash usage without sanitization
        {
          selector:
            "MemberExpression[object.name='location'][property.name='search']",
          message:
            "Using location.search without sanitization can lead to XSS. Validate and sanitize URL parameters.",
        },
        {
          selector:
            "MemberExpression[object.name='location'][property.name='hash']",
          message:
            "Using location.hash without sanitization can lead to XSS. Validate and sanitize hash values.",
        },
        // decodeURIComponent / decodeURI with non-literal arg
        {
          selector:
            "CallExpression[callee.name='decodeURIComponent']:not([arguments.0.type='Literal'])",
          message:
            "decodeURIComponent with user input can cause injection. Validate input first.",
        },
        {
          selector:
            "CallExpression[callee.name='decodeURI']:not([arguments.0.type='Literal'])",
          message:
            "decodeURI with user input can cause injection. Validate input first.",
        },
        // attr href/src dynamic assignments
        {
          selector:
            // "CallExpression[callee.property.name='attr'][arguments.0.value='href']:not([arguments.1.type='Literal'])",
            "CallExpression[callee.property.name='attr'][arguments.0.value='href'][arguments.length=2]",
          message:
            "Setting href attribute with dynamic content can cause XSS. Validate and sanitize URLs.",
        },
        {
          selector:
            "CallExpression[callee.property.name='attr'][arguments.0.value='src']:not([arguments.1.type='Literal'])",
          message:
            "Setting src attribute with dynamic content can cause XSS. Validate and sanitize URLs.",
        },
        // dynamic css injection
        {
          selector:
            "CallExpression[callee.property.name='css']:not([arguments.0.type='Literal']):not([arguments.1.type='Literal'])",
          message:
            "Dynamic CSS injection can cause XSS. Sanitize CSS properties and values.",
        },
        // Template literals with HTML + variables
        {
          selector:
            "TemplateLiteral:has(TemplateElement[value.raw*='<']):has(Identifier)",
          message:
            "Template literals containing HTML with variables can cause XSS. Sanitize variables.",
        },
        // String concatenation building HTML
        {
          selector:
            "BinaryExpression[operator='+']:has(Literal[value*='<']):has(Identifier)",
          message:
            "String concatenation with HTML and variables can cause XSS. Sanitize variables.",
        },
        // window.open with dynamic URL
        {
          selector:
            "CallExpression[callee.object.name='window'][callee.property.name='open'][arguments.0.type!='Literal']",
          message:
            "XSS Risk: window.open() with dynamic URL can cause XSS and redirect attacks. Validate URLs.",
        },
        // adding dynamic class names
        {
          selector:
            "CallExpression[callee.property.name='add'][arguments.1.type!='Literal']",
          message:
            "XSS Risk: Adding dynamic class names can cause XSS via CSS injection. Sanitize class names.",
        },
        // JSON.parse without try-catch
        {
          selector:
            "CallExpression[callee.name='JSON'][callee.property.name='parse']:not(:has(TryStatement))",
          message:
            "Error Handling: JSON.parse can throw SyntaxError. Wrap in try-catch block.",
        },
        // Empty catch clauses
        {
          selector: "CatchClause[param=null]",
          message:
            "Error Handling: Empty catch block silently ignores errors. Add error logging.",
        },
        {
          selector: "CatchClause > BlockStatement[body.length=0]",
          message:
            "Error Handling: Empty catch block silently ignores errors. Add error logging.",
        },
        // Magic numbers
        // {
        //   selector:
        //     "Literal[value=/^\\d+$/]:not([parent.type='ArrayExpression'])",
        //   message:
        //     "Maintainability: Magic numbers should be defined as named constants.",
        // },
        {
          selector: "BlockComment[value*='TODO']",
          message:
            "Maintainability: Large commented code blocks should be removed or implemented.",
        },
        // preventDefault usage guidance
        {
          selector:
            "CallExpression[callee.property.name='preventDefault']:not([parent.type='IfStatement'])",
          message:
            "Readability: preventDefault should be called before main action for consistent behavior.",
        },
        // parseInt without radix
        {
          selector: "CallExpression[callee.name='parseInt']:not([arguments.1])",
          message:
            "Error Handling: parseInt without radix can return NaN. Add radix parameter or validation.",
        },
        // querySelector usage guidance
        {
          selector:
            "CallExpression[callee.property.name='querySelector']:not([parent.type='VariableDeclarator'])",
          message:
            "Performance: Cache DOM queries in variables to avoid redundant traversal.",
        },
        // addEventListener placement guidance
        {
          selector:
            "CallExpression[callee.property.name='addEventListener']:not([parent.parent.type='Program'])",
          message:
            "Performance: Multiple event listeners may cause memory leaks. Check for cleanup.",
        },
      ],

      "no-restricted-syntax": [
        "error",

        // ❌ for...in causes prototype issues
        {
          "selector": "ForInStatement",
          "message": "Use Object.keys(), Object.values(), or Object.entries() instead of for...in."
        },

        // ❌ with breaks scope & optimizations
        {
          "selector": "WithStatement",
          "message": "`with` is not allowed."
        },

        // ❌ eval is unsafe
        {
          "selector": "CallExpression[callee.name='eval']",
          "message": "eval is not allowed."
        },

        // ❌ string-based timers (security)
        {
          "selector": "CallExpression[callee.name='setTimeout'][arguments.0.type='Literal']",
          "message": "setTimeout with string argument is unsafe. Use a function."
        },
        {
          "selector": "CallExpression[callee.name='setInterval'][arguments.0.type='Literal']",
          "message": "setInterval with string argument is unsafe. Use a function."
        }
      ],

      /* ────────────── Error handling, console, performance ────────────── */
      "no-empty": "error",
      "no-empty-function": "warn",
      // Performance
      "no-console": "off", // Allow console statements in development files
      "no-debugger": "error",
    },
  },

  // Special configuration for minified/compiled files - only check specific rules
  {
    files: [
      "**/*.min.js",
      "new/inc/assets/js/app.js",
      "new/inc/assets/js/woo.js",
      "new/inc/assets/js/group.js",
      "new/inc/assets/js/share.js",
      "new/admin/admin_assets/js/admin.js",
      "new/admin/admin_assets/js/greetings.js",
      "new/admin/admin_demo/admin-demo.js",
    ],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
        console: "readonly",
        window: "readonly",
        document: "readonly",
      },
    },
    rules: {
      // Disable ALL rules first, then enable only the ones we want
      "@typescript-eslint/no-unused-vars": "off",
      indent: "off",
      quotes: "off",
      semi: "off",
      "space-in-parens": "off",
      "func-names": "off",
      "id-length": "off",
      "no-restricted-syntax": "off",
      "space-before-function-paren": "off",
      "newline-per-chained-call": "off",
      "no-unused-vars": "off",
      "no-empty": "off",
      "no-empty-function": "off",
      "computed-property-spacing": "off",
      "array-bracket-spacing": "off",
      "prefer-rest-params": "off",
      "operator-linebreak": "off",
      "space-unary-ops": "off",
      "comma-dangle": "off",
      camelcase: "off",
      eqeqeq: "off",
      "space-infix-ops": "off",
      "keyword-spacing": "off",
      "space-before-blocks": "off",
      "block-spacing": "off",
      "no-multiple-empty-lines": "off",
      "object-curly-spacing": "off",
      "key-spacing": "off",
      "semi-spacing": "off",
      "comma-spacing": "off",
      "brace-style": "off",
      "max-len": "off",
      "no-trailing-spaces": "off",
      "eol-last": "off",
      "spaced-comment": "off",
      "lines-around-comment": "off",
      curly: "off",
      "no-undef": "off",
      "security/detect-object-injection": "off",
      "function-paren-newline": "off",
      "no-unsanitized/method": "off",
      "no-unsanitized/property": "off",
      "security/detect-eval-with-expression": "off",
      "security/detect-non-literal-regexp": "off",
      "security/detect-non-literal-require": "off",
      "security/detect-new-buffer": "off",
      "security/detect-bidi-characters": "off",
      "security/detect-buffer-noassert": "off",
      "security/detect-possible-timing-attacks": "off",
      "security/detect-unsafe-regex": "off",
      "security/detect-child-process": "off",
      "no-restricted-properties": "off",

      // Only enable these 5 critical rules
      "no-console": "error",
      "no-debugger": "error",
      "no-eval": "error",
      "no-implied-eval": "error",
      "no-new-func": "error",
    },
  },
];
