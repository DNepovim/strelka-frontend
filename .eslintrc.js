module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "next/core-web-vitals",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    project: ["tsconfig.json"],
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["react-hooks", "emotion", "unused-imports"],
  rules: {
    indent: "off",
    "@typescript-eslint/indent": "off", // indentation is handled by prettier
    "@typescript-eslint/member-delimiter-style": [
      "error",
      {
        multiline: {
          delimiter: "none",
        },
        singleline: {
          delimiter: "semi",
        },
      },
    ],
    "@typescript-eslint/no-unused-vars": "off",
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "warn",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "default",
        format: ["PascalCase", "camelCase"],
      },
      {
        selector: ["default", "variable", "function"],
        modifiers: ["unused"],
        format: ["camelCase"],
        leadingUnderscore: "allow",
      },
      {
        selector: [
          "function",
          "variable",
          "enumMember",
          "objectLiteralProperty",
          "objectLiteralMethod",
        ],
        format: ["camelCase", "PascalCase"],
      },
      {
        selector: "typeLike",
        format: ["PascalCase", "UPPER_CASE"],
      },
    ],
    "@typescript-eslint/no-parameter-properties": "error",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-member-accessibility": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "react/display-name": "off",
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/no-unsafe-member-access": "off",
    "@typescript-eslint/restrict-template-expressions": "off",
    "@typescript-eslint/no-unsafe-return": "off",
    "@typescript-eslint/no-unsafe-call": "off",
    "@typescript-eslint/no-unsafe-argument": "off",

    "@typescript-eslint/no-parameter-properties": "error",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "no-console": "error",
    "react/prop-types": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",
    "@typescript-eslint/unbound-method": [
      "error",
      {
        ignoreStatic: true,
      },
    ],
    "@typescript-eslint/prefer-optional-chain": "error",
    "emotion/jsx-import": "off",
    "emotion/no-vanilla": "error",
    "emotion/import-from-emotion": "error",
    "emotion/styled-import": "error",
    "emotion/syntax-preference": [2, "string"],
    "arrow-body-style": ["error", "as-needed"],
    "padding-line-between-statements": [
      "error",
      { blankLine: "always", prev: "import", next: "*" },
      { blankLine: "always", prev: "*", next: "import" },
      { blankLine: "any", prev: "import", next: "import" },
      { blankLine: "always", prev: "export", next: "*" },
      { blankLine: "always", prev: "*", next: "export" },
      { blankLine: "any", prev: "export", next: "export" },
      { blankLine: "always", prev: "block-like", next: "export" },
      { blankLine: "always", prev: "export", next: "block-like" },
    ],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
}
