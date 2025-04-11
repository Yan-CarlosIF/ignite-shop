import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import SimpleImportSort from "eslint-plugin-simple-import-sort";
import Prettier from "eslint-config-prettier";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    files: ["**/*.ts", "**/*.tsx"],
    plugins: {
      "simple-import-sort": SimpleImportSort,
    },
    rules: {
      "simple-import-sort/imports": "warn",
    },
  },
  {
    files: ["**/*.{js,ts,jsx,tsx}"],
    plugins: {
      prettier: Prettier,
    },
    rules: {
      "prettier/prettier": "warn",
    },
  },
];

export default eslintConfig;
