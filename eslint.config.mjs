// ESLint flat config — warnings-first, legacy-safe
import js from '@eslint/js';
import react from 'eslint-plugin-react';
import globals from 'globals';

export default [
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    ignores: ['dist/**', 'build/**', 'review-bundle/**', '.lighthouseci/**'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: { ecmaFeatures: { jsx: true } },
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest,
      },
    },
    plugins: { react },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      'no-unused-vars': 'warn',
      'no-undef': 'warn',
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/no-string-refs': 'off',
    },
    settings: { react: { version: 'detect' } },
  },

  {
    files: ['*.cjs', '*rc.js', '.lighthouserc.js'],
    languageOptions: { sourceType: 'commonjs', globals: { ...globals.node } },
  },
];
