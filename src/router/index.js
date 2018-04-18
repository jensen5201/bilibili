import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'

// master 更改
Vue.use(Router)

export default new Router({
	mode: 'hash',
  routes
})
