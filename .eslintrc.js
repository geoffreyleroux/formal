module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: [
    "@typescript-eslint",
    "react",
    "react-hooks",
    "deprecate",
    "import",
    "jsx-a11y",
  ],
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "prettier",
    "plugin:jest/recommended",
    "plugin:jest/style",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:jsx-a11y/recommended",
  ],
  parserOptions: {
    project: `${__dirname}/tsconfig.json`,
    ecmaVersion: 2019,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    "import/namespace": "error",
    "import/default": "off",
    "import/no-restricted-paths": [
      "warn",
      {
        zones: [
          {
            target: "./lib/!(page)/**",
            from: "./lib/page",
            message:
              "Importing from page modules can lead to circular imports. Please refactor the code you wish to reuse into a sensible directory.",
          },
        ],
      },
    ],
    "no-var": "error",
    "no-unused-vars": "error",
    "no-console": "error",
    "dot-notation": "error",
    "no-loop-func": "error",
    "no-mixed-spaces-and-tabs": "error",
    "no-throw-literal": "error",
    "prefer-const": "error",
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "default",
        format: ["camelCase"],
      },
      {
        selector: "variable",
        format: ["camelCase", "UPPER_CASE", "PascalCase"],
      },
      {
        selector: "function",
        format: ["camelCase", "PascalCase"],
      },
      {
        selector: "enumMember",
        format: ["PascalCase", "UPPER_CASE"],
      },
      {
        selector: "classMethod",
        modifiers: ["private"],
        format: ["camelCase"],
        leadingUnderscore: "allow",
      },
      {
        selector: "parameter",
        format: ["camelCase", "PascalCase"],
        leadingUnderscore: "allow",
      },
      {
        selector: "property",
        format: ["camelCase", "snake_case", "PascalCase", "UPPER_CASE"],
        leadingUnderscore: "allow",
      },
      {
        selector: "objectLiteralProperty",
        modifiers: ["requiresQuotes"],
        format: null,
        leadingUnderscore: "allow",
      },
      {
        selector: "memberLike",
        modifiers: ["private"],
        format: ["camelCase"],
        leadingUnderscore: "require",
      },
      {
        selector: "typeLike",
        format: ["PascalCase"],
      },
    ],
    "@typescript-eslint/no-use-before-define": [
      "error",
      {
        functions: false,
        classes: true,
      },
    ],
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/explicit-function-return-type": [
      "error",
      {
        allowTypedFunctionExpressions: true,
        allowExpressions: true,
      },
    ],
    "@typescript-eslint/no-parameter-properties": "off",
    "@typescript-eslint/no-unnecessary-condition": "warn",
    "react/forbid-component-props": [
      "error",
      {
        forbid: [
          {
            propName: "__css",
            message:
              "Use of __css prop is only allowed in Design System components.",
          },
        ],
      },
    ],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/prop-types": "off",
    "jsx-a11y/label-has-associated-control": [
      "error",
      {
        controlComponents: [
          "SubscriptionListPicker",
          "RadioGroup",
          "NumberInput",
        ],
      },
    ],
  },
  settings: {
    react: {
      version: "16",
    },
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      typescript: {
        project: `${__dirname}/tsconfig.build.json`,
      },
    },
  },
  overrides: [
    {
      files: ["*.js"],
      extends: ["eslint:recommended"],
      env: {
        es6: true,
        browser: true,
        node: true,
      },
      rules: { "@typescript-eslint/explicit-function-return-type": "off" },
    },
  ],
};
