export default {
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+.tsx?$": "ts-jest"
  },
  moduleNameMapper: {
    "^@app/(.*)$": "<rootDir>/src/$1"
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"]
};
