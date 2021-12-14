/*
 * @Author: your name
 * @Date: 2021-12-08 09:35:31
 * @LastEditTime: 2021-12-08 15:50:05
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \edcTreeselect\build\webpack-configs\base.js
 */
const webpack = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')
const utils = require('./utils')

module.exports = {
  // resets the default mode
  mode: 'none',

  resolve: {
    extensions: [ '.js', '.json', '.vue' ],
    alias: {
      // use the full development build of Vue
      // see: https://vuejs.org/v2/guide/installation.html#Explanation-of-Different-Builds
      'vue$': 'vue/dist/vue',
      // for consistent docs
      '@riophae/vue-treeselect': utils.resolve('src'),
      // for shorter import path in tests
      '@src': utils.resolve('src'),
    },
  },

  module: {
    rules: [
      utils.withCacheLoader({
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          compilerOptions: {
            preserveWhitespace: false,
          },
        },
      }),
      utils.withCacheLoader({
        test: /\.js$/,
        loader: 'babel-loader',
        include: [ 'src', 'docs', 'test' ].map(utils.resolve),
      }),
      utils.withCacheLoader({
        test: /\.pug$/,
        loader: 'pug-loader',
        options: {
          pretty: true,
        },
      }),
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
        },
      },
      {
        test: /\.(png|jpg|gif|eot|woff|ttf|svg|webp|PNG)(\?\S*)?$/,
        use: ["file-loader"],
      },
    ],
  },

  optimization: {
    concatenateModules: true,
    noEmitOnErrors: true,
  },

  node: {
    process: false,
  },

  plugins: [
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      PKG_VERSION: JSON.stringify(require('../../package').version),
    }),
  ],
}
