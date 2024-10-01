module.exports = {
    env: {
      node: true,
      es2021: true, // ou a versão do ES que você está usando
    },
    extends: [
      'eslint:recommended',
      // outros extends que você pode estar usando
    ],
    parserOptions: {
      ecmaVersion: 12, // ou a versão do ES que você está usando
      sourceType: 'module',
    },
    rules: {
        "no-unused-vars": "warn",
        "no-undef": "warn",
        "no-console": "off",
        "class-methods-use-this": "off",
    }
  };