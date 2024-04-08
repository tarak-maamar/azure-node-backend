const path = require("path")
module.exports = {
    rootDir: "src",
    coverageDirectory: "../coverage",
    setupFilesAfterEnv: [
        "@testing-library/jest-dom",
        // path.join(__dirname, "setup/jest-api.setup.js"),
        "<rootDir>/__test__/setupFile.ts"
    ],
    //#region  //*=========== Jest Express  ==========  
    preset: 'ts-jest',
    testEnvironment: 'node',
    collectCoverage: true,
    coveragePathIgnorePatterns: ["__fixtures__", "__mocks__", "templates"],
    collectCoverageFrom: ["<rootDir>/**/*.{js,ts}"],
    moduleFileExtensions: ["js", "json", "ts"],
    transform: {
      "^.+\\.ts$": "ts-jest",
    },
    coverageThreshold: null,
    moduleDirectories: ["node_modules", "<rootDir>"],
    //#endregion  //*======== Jest Express ===========
    //#region  //*=========== Jest Common  ===========
    resetMocks: true,
    moduleDirectories: ["node_modules"],
    //#endregion  //*======== Jest Common  ===========
  };
  