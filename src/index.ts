/*
 * @Description: 入口文件
 * @Author: Navi
 * @Email: 1592193221@qq.com
 * @Date: 2020-04-23 21:15:00
 * @LastEditTime: 2020-04-23 21:59:03
 * @LastEditors: Navi
 */

import '../index.scss'  // 全局样式
import Vue from 'vue';
import App from './App.vue'
new Vue({
  el: '#app',
  render: h => h(App),
})