// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import router from './router'
import store from './store'
import api from './api'
import './plugins'
import './utils'
import './directive'
import './filter'
import './venders'
import './assets/styles'

/* 阻止 vue 在启动时生成生产提示 */
Vue.config.productionTip = false

/* 挂载 event bus */
Vue.$e = Vue.prototype.$e = new Vue()


/* 全局注册 */
Vue.use(api)

/* eslint-disable no-new */
let $VM = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

/* 全局挂载 仅方便调试 */
Object.assign(window, {VM: $VM})            // 挂载当前vue实例到 window
window.Vue = Vue
Vue.$axios = Vue.prototype.$axios = axios


