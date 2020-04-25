/*
 * @Description: 存放 dev 配置
 * @Author: Navi
 * @Email: 1592193221@qq.com
 * @Date: 2020-04-20 20:42:41
 * @LastEditTime: 2020-04-23 21:29:15
 * @LastEditors: Navi
 */
const merge = require('webpack-merge');
const common = require('./webpack.base.js');
const path = require('path');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: { // 开发服务器
    contentBase: '../dist'
  },
  output: { // 输出
    filename: 'js/[name].[hash:8].js', // 每次保存 hash 都变化
    path: path.resolve(__dirname, '../dist')
  },
  module: {},
  mode: 'development',
});
