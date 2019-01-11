// jest.config.js
module.exports = {
  cache: false,
  verbose: true,
  testURL: "http://localhost/",
  setupFiles: ["<rootDir>/test-setup.js"],
  modulePaths: ["<rootDir>/node_modules", "<rootDir>/**/node_modules"],
  transform: {
    "^.+\\.(js|jsx)?$": "<rootDir>/node_modules/babel-jest"
  },
  moduleDirectories: ["node_modules", "<rootDir>/**/node_modules"]
};
