module.exports = {
  extends: [
    "../../../packages/dev-configs/react.eslintrc.json",
    "plugin:react/jsx-runtime"
  ],
  rules: {
    "no-restricted-imports": [
      "error",
      {
        "patterns": [
          "../../*",
          "../assets",
          "../apis",
          "../components",
          "../data",
          "../hooks",
          "../models",
          "../services",
          "../utils",
          "../types",
          "../styles"
        ]
      }
    ],
    "import-helpers/order-imports": [
      "error",
      {
        newlinesBetween: "always",
        groups: [
          "module",
          "/^@app/components/",
          "/^@app/hooks/",
          "/^@app/types/",
          "/^@app/data/",
          "/^@app/apis/",
          "/^@app/services/",
          "/^@app/models/",
          "/^@app/utils/",
          "/^@app/styles/",
          "/^@app/assets/"    
        ],
        alphabetize: { order: "asc", ignoreCase: true }
      }
    ]
  },
  parserOptions: {
    project: "./tsconfig.json"
  },
  settings: {
    "import/resolver": {
      typescript: {
        project: "./tsconfig.json"
      }
    },
    "react": {
      "version": "detect"
    }
  }
}
