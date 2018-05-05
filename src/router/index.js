import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'

// 注册理由 远端更新
Vue.use(Router)

const router = new Router({
	mode: 'hash',
	linkActiveClass: 'active',
  routes
})

// 前端路由鉴权
let token = localStorage.getItem('token')
router.beforeEach((to, from, next) => {
	if( !token && to.name !== 'login') {
		return next("/login")
	}
	next()
})

export default router
