module.exports = {
  extends : ["../../../packages/dev-configs/base.eslintrc.json"],
  parserOptions : {
    project : "./tsconfig.json"
  },
  settings : {
    "import/resolver" : {
      typescript : {
        project : "./tsconfig.json"
      }
    }
  }
};
