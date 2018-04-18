import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'

// 注册理由
Vue.use(Router)

export default new Router({
	mode: 'hash',
	linkActiveClass: 'active',
  routes
})
