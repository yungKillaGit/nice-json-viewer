import { includeIgnoreFile } from '@eslint/compat';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import prettier from 'eslint-config-prettier/flat';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import { defineConfig } from 'eslint/config';
import { fileURLToPath } from 'node:url';

const prettierIgnorePath = fileURLToPath(new URL('.prettierignore', import.meta.url));

const eslintConfig = defineConfig([
  includeIgnoreFile(prettierIgnorePath),
  ...nextVitals,
  ...nextTs,
  eslintPluginUnicorn.configs.recommended,
  prettier,
  {
    plugins: {
      prettier: eslintPluginPrettier,
    },
    rules: {
      'prettier/prettier': [
        'warn',
        {
          endOfLine: 'auto',
        },
      ],
      'unicorn/prevent-abbreviations': 'off',
      'unicorn/no-null': 'off',
      'unicorn/no-useless-undefined': 'off',
      'react/self-closing-comp': 'warn',
      curly: ['error', 'all'],
    },
  },
]);

export default eslintConfig;
