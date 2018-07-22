module.exports = {
    "env": {
        "browser": true,
        "node": true,
        "jest": true
    },
    "extends": ["airbnb", "prettier"],
    "rules": {
        "import/newline-after-import": ["error", { "count": 0 }],
        "react/jsx-filename-extension": 0,
        "react/jsx-indent": ["error", 4],
        "react/jsx-one-expression-per-line":0,
        "arrow-body-style": ["error", "as-needed"]
    }
};