module.exports = {
  'env': {
    'browser': true,
    'node': true,
    'es6': true
  },
  'extends': ['airbnb', 'airbnb/hooks'],
  'parser': 'babel-eslint',
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly'
  },
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 2018,
    'sourceType': 'module'
  },
  'plugins': [
    'react',
  ],
  'rules': {
    'react/prop-types': 0,
    'import/no-unresolved': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-props-no-spreading': 0,
    'no-return-await': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'jsx-a11y/control-has-associated-label': 0,
    'global-require': 0,
  }
};
