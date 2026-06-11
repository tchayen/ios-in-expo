import reactHooks from "eslint-plugin-react-hooks";
import perfectionist from "eslint-plugin-perfectionist";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import tseslint from "typescript-eslint";
import localPlugin from "./lint-rules/index.mjs";

export default tseslint.config(
  {
    ignores: [
      ".expo/**",
      "android/**",
      "build/**",
      "coverage/**",
      "dist/**",
      "ios/**",
      "node_modules/**",
    ],
  },
  ...tseslint.configs.recommended,
  reactHooks.configs.flat.recommended,
  {
    files: ["src/**/*.ts", "src/**/*.tsx"],
    plugins: {
      local: localPlugin,
      perfectionist,
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      "local/jsdoc-only-on-declarations": "error",
      "local/no-abbreviated-names": "error",
      "local/no-ascii-separators": "error",
      "local/no-classname-concatenation": "error",
      "local/no-em-dash": "error",
      "local/no-text-on-jsdoc-line": "error",

      "simple-import-sort/exports": "error",
      "simple-import-sort/imports": "error",

      "perfectionist/sort-classes": [
        "error",
        {
          groups: [
            ["property", "accessor-property"],
            ["private-property", "private-accessor-property"],
            "constructor",
            ["method", "get-method", "set-method", "function-property"],
            [
              "private-method",
              "private-get-method",
              "private-set-method",
              "private-function-property",
            ],
          ],
        },
      ],
      "perfectionist/sort-enums": "error",
      "perfectionist/sort-interfaces": "error",
      "perfectionist/sort-intersection-types": "error",
      "perfectionist/sort-named-exports": "error",
      "perfectionist/sort-named-imports": "error",
      "perfectionist/sort-object-types": "error",
      "perfectionist/sort-objects": "error",
      "perfectionist/sort-union-types": [
        "error",
        { groups: ["named", "literal", "keyword", "function", "object", "nullish"] },
      ],
    },
  },
);
