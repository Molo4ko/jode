module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'import',
  ],
  rules: {
    // чтобы конфиги webpack'а не ругались
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    // чтобы можно было писать jsx компоненты с помощью typescript
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    // чтобы не буянил на import ts файлов
    'import/extensions': [2, 'ignorePackages', {
      js: 'never', jsx: 'never', ts: 'never', tsx: 'never',
    }],
    'max-len': [
      'error', { ignoreComments: true, ignoreTrailingComments: true, code: 150 },
    ],
  },
};
