module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  env: {
    jest: true,
    browser: true,
  },
  plugins: ['react-hooks'],
  settings: {
    'import/resolver': {
      webpack: {
        config: {
          resolve: {
            modules: ['node_modules', 'src'],
            extensions: ['.js', '.json', '.jsx'],
          },
        },
      },
    },
  },
  globals: {
    "cy": true
  },
  rules: {
    'react/jsx-filename-extension': [
      2, { extensions: ['.js'] },
    ],
    'import/prefer-default-export': 0,
    'jsx-a11y/label-has-for': 0,
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  },
};
