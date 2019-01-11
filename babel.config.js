// babel.config.js
"use strict";
module.exports = {
  presets: ["@babel/preset-env", "@babel/preset-react"],
  plugins: [
    "@babel/plugin-syntax-dynamic-import",
    "@babel/plugin-syntax-import-meta"
  ],
  env: {
    test: {
      plugins: ["require-context-hook"]
    }
  }
};
