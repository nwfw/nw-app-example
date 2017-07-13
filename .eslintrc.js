module.exports = {
    "env": {
        "browser": true,
        "node": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "arrowFunctions": true,
            "classes": true,
        },
        "sourceType": "module",
        "allowImportExportEverywhere": false,
        "codeFrame": false
    },
    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "no-console": 0
    },
    "globals": {
        "appState": true,
        "nw": true,
        "Vue": true,
        "chrome": true
    }
};