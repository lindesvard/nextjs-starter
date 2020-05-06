module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'prettier',
    'plugin:react/recommended',
    'airbnb',
    'prettier/react',
    'prettier/standard',
    'plugin:import/errors',
    'plugin:prettier/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'import', 'prettier', 'react-hooks', 'babel'],
  rules: {
    'import/resolver': {
      'babel-module': {},
    },
    'no-unused-expressions': 'off',
    'babel/no-unused-expressions': 'error',
    'import/default': 2,
    'import/no-named-default': 'off',
    camelcase: 'off',
    'max-len': [
      'off',
      {
        code: 100,
        ignoreUrls: true,
        ignoreRegExpLiterals: true,
      },
    ],
    'prettier/prettier': 'error',
    'standard/no-callback-literal': 'off',
    'no-unexpected-multiline': 'off',
    'no-return-await': 'off',
    'new-cap': 'off',
    'lines-between-class-members': 'off',
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
    'react/jsx-filename-extension': 0,
    'react/jsx-props-no-spreading': 0,
  },
}
