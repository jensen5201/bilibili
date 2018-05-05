/*
* @Author: jensen
* @Date:   2018-03-30 10:09:51
* @Last Modified by:   jensen
* @Last Modified time: 2018-04-05 20:52:22
*/

import './config'
import user from './user'
import cat from './cat'
import theme from './theme'

export default {
	install(Vue) {
		Vue.prototype.$api = {
			user,
      		cat,
      		theme,
		}
	}
}
