module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    quotes: [2, 'single'],
    'quote-props': [2, 'as-needed'],
    'linebreak-style': [2, 'unix'],
    'react/prop-types': [0],
    'max-len': [0],
    'jsx-a11y/label-has-associated-control': [0],
    'react/jsx-no-duplicate-props': [2, { ignoreCase: false }],
    'react/jsx-props-no-spreading': [0],
    'react/function-component-definition': [2, {
      namedComponents: 'arrow-function',
      unnamedComponents: 'arrow-function',
    }],
    'no-restricted-exports': [0],
    'react/require-default-props': [0],
  },
};
