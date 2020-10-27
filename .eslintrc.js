module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    es2020: true,
  },
  extends: ['airbnb', 'plugin:prettier/recommended', 'prettier/react'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
    parser: 'babel-eslint',
  },
  plugins: ['react'],
  rules: {
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'import/no-named-as-default': 0,
    'react/jsx-props-no-spreading': 'off',
    'react/destructuring-assignment': [
      'error',
      'always',
      {
        ignoreClassFields: true,
      },
    ],
    'import/prefer-default-export': 'off',
    'react/prop-types': 'off',
  },
};
