module.exports = {
  env: {
    browser: true,
    es2021: true,

  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:import/react',
  ],
  rules: {
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "never",
        "jsx": "never",
      },
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    'import',
  ],
  overrides: [
    {
      files: ['*.jsx', '*.js'],
    },
  ],
};
