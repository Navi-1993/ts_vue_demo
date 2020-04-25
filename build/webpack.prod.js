/*
 * @Description: 存放 prod 配置
 * @Author: Navi
 * @Email: 1592193221@qq.com
 * @Date: 2020-04-20 20:43:53
 * @LastEditTime: 2020-04-23 21:31:04
 * @LastEditors: Navi
 */
const path = require('path');
// 合并配置文件
const merge = require('webpack-merge');
const common = require('./webpack.base.js');

module.exports = merge(common, {
  module: {},
  plugins: [],
  mode: 'production',
  output: {
    filename: 'js/[name].[contenthash:8].js', //contenthash 若文件内容无变化，则contenthash 名称不变
    path: path.resolve(__dirname, '../dist')
  },
});
