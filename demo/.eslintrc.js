module.exports = {
  root: true,
  env: {
    // 让eslint识别该环境下的内置变量或者类型
    browser: true,
    node: true
  },
  settings: {
  },
  parserOptions: {
    parser: 'babel-eslint', // 可以让eslint校验所有的babel代码
    sourceType: 'module',
    ecmaVersion: 7
  },
  plugins: [
    'lodashs' 
  ],
  // add your custom rules here
  rules: {
    'lodashs/lodash-get': 'error',
  },
}
