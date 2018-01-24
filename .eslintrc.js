module.exports = {
    "extends": "eslint:recommended",
    "rules": {
        "semi": ["error", "always"],
        "quotes": ["error", "single"],
        "no-console":"off",
        "indent" : [2, 2, {"SwitchCase": 1}]
    },
    "env": { "es6": true,
    "jest":true,
    "node":true,
             "browser":true }
};
