module.exports = {
    env: {
        es6: true,
        node: true,
    },
    parserOptions: {
        ecmaVersion: 2018,
    },
    extends: [
        "eslint:recommended",
        "google",
    ],
    rules: {
        "no-restricted-globals": ["error", "name", "length"],
        "prefer-arrow-callback": "error",
        "quotes": ["error", "double", { allowTemplateLiterals: true }],
        "max-len": ["warn", { code: 120 }],
        "indent": ["error", 4],
        "object-curly-spacing": ["error", "always"],
        "padded-blocks": "off",
    },
    overrides: [
        {
            files: ["**/*.spec.*"],
            env: {
                mocha: true,
            },
            rules: {},
        },
    ],
    globals: {},
    ignorePatterns: [".eslintrc.js"],
};
