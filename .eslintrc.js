module.exports = {
  'env': {
    'commonjs': true,
    'es2021': true,
    'node': true,
  },
  'extends': 'google',
  'overrides': [
    {
      'env': {
        'node': true,
      },
      'files': [
        '.eslintrc.{js,cjs}',
      ],
      'parserOptions': {
        'sourceType': 'script',
      },
    },
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  'rules': {
    'indent': ['error', 2, {'SwitchCase': 1}],
    'max-len': [
      'error',
      {'code': 120, 'ignoreComments': true, 'ignoreUrls': true, 'ignoreStrings': true},
    ],
    'arrow-parens': 'off',
    'camelcase': 'off',
  },
};
