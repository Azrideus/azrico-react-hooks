module.exports = {
    env: {
        jest: true,
        browser: true,
        node: true,
    },
    parser: "@babel/eslint-parser",
    extends: ["eslint:recommended"],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: "module",
    },
    rules: {
        "no-console": "off",
        "no-const-assign": "warn",
        "no-this-before-super": "warn",
        "no-undef": "error",
        "no-continue": "off",
        "no-unreachable": "off",
        "no-extra-semi": "off",
        "no-empty": "off",
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": "off",
        "constructor-super": "warn",
        "valid-typeof": "warn",
        quotes: ["off", "double"],
        semi: ["error", "always"],
    },
};
