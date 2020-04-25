/*
 * @Description: 存放 dev 和 prod 通用配置
 * @Author: Navi
 * @Email: 1592193221@qq.com
 * @Date: 2020-04-20 20:36:14
 * @LastEditTime: 2020-04-23 22:39:06
 * @LastEditors: Navi
 */
const webpack = require('webpack');
const path = require("path");
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.ts', //入口
  resolve:{
    extensions:['.js','.json','.tsx','.ts','.vue'],    
    alias:{        
        'vue$':'vue/dist/vue.esm.js'    
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ]
      },
      {
        test:/\.(ts|tsx)?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          appendTsSuffixTo:[/\.vue$/],  //为script有lang='ts'标识的脚本文件添加ts后缀
        }
      },
    ]
  },
  plugins: [
    // 解决vender后面的hash每次都改变
    new webpack.HashedModuleIdsPlugin(),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../index.html'),
    }),
  ],// 插件
};

