/*
 * @Author: your name
 * @Date: 2021-12-08 09:35:31
 * @LastEditTime: 2021-12-14 11:45:22
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \edcTreeselect\.eslintrc.js
 */
module.exports = {
  root: true,
  extends: [ 'riophae/vue' ],
  globals: {
    PKG_VERSION: true,
  },
  "parser": "vue-eslint-parser",
  "parserOptions": {
      "parser": "babel-eslint",
      "ecmaVersion": 2017,
      "sourceType": "module"
  },
  "plugins": ["flowtype", "html", "vue"],
  settings: {
    'import/resolver': {
      node: null,
      webpack: {
        config: 'build/webpack-configs/base.js',
      },
    },
  },
  rules:{
    // "linebreak-style": [2 ,"error", "windows"],
    // 'accessor-pairs': 2,
    // 'arrow-spacing': [2, {
    //     'before': true,
    //     'after': true
    // }],
    // 'block-spacing': [2, 'always'],
    // 'brace-style': [2, '1tbs', {
    //     'allowSingleLine': true
    // }],
    // 'camelcase': [0, {
    //     'properties': 'always'
    // }],
    // 'comma-dangle': [2, 'never'],
    // 'comma-spacing': [2, {
    //     'before': false,
    //     'after': true
    // }],
    // 'comma-style': [2, 'last'],
    // 'constructor-super': 2,
    // 'curly': [2, 'multi-line'],
    // 'dot-location': [2, 'property'],
    // 'eol-last': 0,
    // 'eqeqeq': [2, 'allow-null'],
    // 'generator-star-spacing': [2, {
    //     'before': true,
    //     'after': true
    // }],
    // 'handle-callback-err': [2, '^(err|error)$'],
    // // 'indent': [2, 3],
    // "indent": ["error", "tab"],
    // 'jsx-quotes': [2, 'prefer-single'],
    // 'key-spacing': [2, {
    //     'beforeColon': false,
    //     'afterColon': true
    // }],
    // 'keyword-spacing': [2, {
    //     'before': true,
    //     'after': true
    // }],
    // 'new-cap': [2, {
    //     'newIsCap': true,
    //     'capIsNew': false
    // }],
    // 'new-parens': 2,
    // 'no-array-constructor': 2,
    // 'no-caller': 2,
    // 'no-console': 'off',
    // 'no-class-assign': 2,
    // 'no-cond-assign': 2,
    // 'no-const-assign': 2,
    // 'no-control-regex': 0,
    // 'no-delete-var': 2,
    // 'no-dupe-args': 2,
    // 'no-dupe-class-members': 2,
    // 'no-dupe-keys': 2,
    // 'no-duplicate-case': 2,
    // 'no-empty-character-class': 2,
    // 'no-empty-pattern': 2,
    // 'no-eval': 2,
    // 'no-ex-assign': 2,
    // 'no-extend-native': 2,
    // 'no-extra-bind': 2,
    // 'no-extra-boolean-cast': 2,
    // 'no-extra-parens': [2, 'functions'],
    // 'no-fallthrough': 2,
    // 'no-floating-decimal': 2,
    // 'no-func-assign': 2,
    // 'no-implied-eval': 2,
    // 'no-inner-declarations': [2, 'functions'],
    // 'no-invalid-regexp': 2,
    // 'no-irregular-whitespace': 2,
    // 'no-iterator': 2,
    // 'no-label-var': 2,
    // 'no-labels': [2, {
    //     'allowLoop': false,
    //     'allowSwitch': false
    // }],
    // 'no-lone-blocks': 2,
    // 'no-mixed-spaces-and-tabs': 2,
    // 'no-multi-spaces': 2,
    // 'no-multi-str': 2,
    // 'no-multiple-empty-lines': [1, {
    //     'max': 0
    // }],
    // 'no-native-reassign': 2,
    // 'no-negated-in-lhs': 2,
    // 'no-new-object': 2,
    // 'no-new-require': 2,
    // 'no-new-symbol': 2,
    // 'no-new-wrappers': 2,
    // 'no-obj-calls': 2,
    // 'no-octal': 2,
    // 'no-octal-escape': 2,
    // 'no-path-concat': 2,
    // 'no-proto': 2,
    // 'no-redeclare': 2,
    // 'no-regex-spaces': 2,
    // 'no-return-assign': [2, 'except-parens'],
    // 'no-self-assign': 2,
    // 'no-self-compare': 2,
    // 'no-sequences': 2,
    // 'no-shadow-restricted-names': 2,
    // 'no-spaced-func': 2,
    // 'no-sparse-arrays': 2,
    // 'no-this-before-super': 2,
    // 'no-throw-literal': 2,
    // 'no-trailing-spaces': 2,
    // "no-tabs": "off",
    // 'no-undef': 2,
    // 'no-undef-init': 2,
    // 'no-unexpected-multiline': 2,
    // 'no-unmodified-loop-condition': 2,
    // 'no-unneeded-ternary': [2, {
    //     'defaultAssignment': false
    // }],
    // 'no-unreachable': 2,
    // 'no-unsafe-finally': 2,
    // 'no-unused-vars': [2, {
    //     'vars': 'all',
    //     'args': 'none'
    // }],
    // 'no-useless-call': 2,
    // 'no-useless-computed-key': 2,
    // 'no-useless-constructor': 2,
    // 'no-useless-escape': 0,
    // 'no-whitespace-before-property': 2,
    // 'no-with': 2,
    // 'one-var': [2, {
    //     'initialized': 'never'
    // }],
    // 'operator-linebreak': [2, 'after', {
    //     'overrides': {
    //         '?': 'before',
    //         ':': 'before'
    //     }
    // }],
    // 'quotes': [2, 'single', {
    //     'avoidEscape': true,
    //     'allowTemplateLiterals': true
    // }],
    // 'semi': [2, 'never'],
    // 'semi-spacing': [2, {
    //     'before': false,
    //     'after': true
    // }],
    // 'space-before-blocks': [2, 'always'],
    // 'space-before-function-paren': [2, 'never'],
    // 'space-in-parens': [2, 'never'],
    // 'space-infix-ops': 2,
    // 'space-unary-ops': [2, {
    //     'words': true,
    //     'nonwords': false
    // }],
    // 'spaced-comment': [2, 'always', {
    //     'markers': ['global', 'globals', 'eslint', 'eslint-disable', '*package', '!', ',']
    // }],
    // 'template-curly-spacing': [2, 'never'],
    // 'use-isnan': 2,
    // 'valid-typeof': 2,
    // 'wrap-iife': [2, 'any'],
    // 'yield-star-spacing': [2, 'both'],
    // 'yoda': [2, 'never'],
    // 'prefer-const': 2,
    // 'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    // 'object-curly-spacing': [2, 'always', {
    //     objectsInObjects: false
    // }],
    // 'array-bracket-spacing': [2, 'never'],

    // // 禁止重复的二级键名
    // // @off 没必要限制
    // 'vue/no-dupe-keys': 'off',
    // // 禁止出现语法错误
    // 'vue/no-parsing-error': 'error',
    // // 禁止覆盖保留字
    // //         'vue/no-reservered-keys': 'error',
    // // 组件的 data 属性的值必须是一个函数
    // // @off 没必要限制
    // 'vue/no-shared-component-data': 'off',
    // // 禁止 <template> 使用 key 属性
    // // @off 太严格了
    // 'vue/no-template-key': 'off',
    // // render 函数必须有返回值
    // 'vue/require-render-return': 'error',
    // // prop 的默认值必须匹配它的类型
    // // @off 太严格了
    // 'vue/require-valid-default-prop': 'off',
    // // 计算属性必须有返回值
    // 'vue/return-in-computed-property': 'error',
    // // template 的根节点必须合法
    // 'vue/valid-template-root': 'error',
    // // v-bind 指令必须合法
    // 'vue/valid-v-bind': 'error',
    // // v-cloak 指令必须合法
    // 'vue/valid-v-cloak': 'error',
    // // v-else-if 指令必须合法
    // 'vue/valid-v-else-if': 'error',
    // // v-else 指令必须合法
    // 'vue/valid-v-else': 'error',
    // // v-for 指令必须合法
    // 'vue/valid-v-for': 'error',
    // // v-if 指令必须合法
    // 'vue/valid-v-if': 'error',
    // // v-model 指令必须合法
    // 'vue/valid-v-model': 'error',
    // // v-on 指令必须合法
    // 'vue/valid-v-on': 'error',
    // // v-once 指令必须合法
    // 'vue/valid-v-once': 'error',
    // // v-pre 指令必须合法
    // 'vue/valid-v-pre': 'error',
    // // v-show 指令必须合法
    // 'vue/valid-v-show': 'error',
    // // v-text 指令必须合法
    // 'vue/valid-v-text': 'error',
    // // v-html指令关闭
    // 'vue/no-v-html': 'off',
    // // @fixable html 的结束标签必须符合规定
    // // @off 有的标签不必严格符合规定，如 <br> 或 <br/> 都应该是合法的
    // 'vue/html-end-tags': 'off',
    // // 计算属性禁止包含异步方法
    // 'vue/no-async-in-computed-properties': 'error',
    // // 禁止出现难以理解的 v-if 和 v-for
    // 'vue/no-confusing-v-for-v-if': 'error',
    // // 禁止出现重复的属性
    // 'vue/no-duplicate-attributes': 'error',
    // // 禁止在计算属性中对属性修改
    // // @off 太严格了
    // 'vue/no-side-effects-in-computed-properties': 'off',
    // // 禁止在 <textarea> 中出现 {{message}}
    // 'vue/no-textarea-mustache': 'error',
    // // 组件的属性必须为一定的顺序
    // 'vue/order-in-components': 'error',
    // // <component> 必须有 v-bind:is
    // 'vue/require-component-is': 'error',
    // // prop 必须有类型限制
    // // @off 没必要限制
    // 'vue/require-prop-types': 'off',
    // // v-for 指令的元素必须有 v-bind:key
    // 'vue/require-v-for-key': 'error',
    // //
    // //
    // // 风格问题
    // //
    // // @fixable 限制自定义组件的属性风格
    // // @off 没必要限制
    // 'vue/attribute-hyphenation': 'off',
    // // html 属性值必须用双引号括起来
    // 'vue/html-quotes': 'error',
    // // @fixable 没有内容时，组件必须自闭和
    // // @off 没必要限制
    // 'vue/html-self-closing': 'off',
    // // 限制每行允许的最多属性数量
    // // @off 没必要限制
    // 'vue/max-attributes-per-line': 'off',
    // // @fixable 限制组件的 name 属性的值的风格
    // // @off 没必要限制
    // 'vue/name-property-casing': 'off',
    // // @fixable 禁止出现连续空格
    // // TODO: 李德广   触发 新版本 typeerror：get 'range' of undefined
    // // 'vue/no-multi-spaces': 'error',
    // // @fixable 限制 v-bind 的风格
    // // @off 没必要限制
    // 'vue/v-bind-style': 'off',
    // // @fixable 限制 v-on 的风格
    // // @off 没必要限制
    // 'vue/v-on-style': 'off',
    // // 定义了的 jsx element 必须使用
    // 'vue/jsx-uses-vars': 'error'
},
  overrides: [ {
    files: [ 'src/**' ],
    rules: {
      'unicorn/no-for-loop': 0,
      'unicorn/prefer-includes': 0,
      'unicorn/prefer-node-append': 0,
    },
  } ],
}
