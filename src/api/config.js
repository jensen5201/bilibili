/*
* @Author: jensen
* @Date:   2018-03-30 10:09:51
* @Last Modified by:   jensen
* @Last Modified time: 2018-04-05 13:37:38
*/

import axios from 'axios'
// import Promise from 'es6-promise'
import { COMMON_HEADER }  from './default'

/* 配置http默认参数 config defaults */
const isPro = process.env.NODE_ENV == 'production'
const domain = {
  proUrl: '//47.104.195.175:8000/api/v1',
  localUrl: '//127.0.0.1:8000/api/v1',
}
axios.defaults.baseURL = isPro? domain.proUrl : domain.localUrl

axios.defaults.timeout = isPro? 3*1000 : 10*1000   // 超时配置
/* 本地代理解决跨域时使用 */
axios.defaults.baseURL = '/api/v1'				   // baseurl配置

/* cors或者nginx解决跨域时使用 */
// axios.defaults.withCredentials = true          //跨域时携带cookie鉴权

// 劫持 request headers
axios
	.interceptors
	.request
	.use( config => {
		Object.assign(config.headers, COMMON_HEADER())
		return config
	}, error => {
		return Promise.inject(error)
	})

// 劫持 response headers
axios
	.interceptors
	.response
	.use( response => {
    let res = response.data
    return Promise.resolve(res)
	}, error => {
		let errResult = {}

        // 网络问题
        if (error && ~error.message.indexOf("Network Error")) {  // 没有网络 离线
          errResult.code = -1
          errResult.message = i18n.t("axios_error_network_error")
          return Promise.resolve(errResult)
        }

        // 终止请求 请求超时
        if (error && error.code == "ECONNABORTED") {
          if (~error.message.indexOf("timeout")) {
            errResult.code = -2
            errResult.message = i18n.t("axios_error_timeout")
            return Promise.resolve(errResult)
          }
          // 其他原因
          else {
            errResult.code = -3
            errResult.message = i18n.t("axios_error_unknow")
            return Promise.resolve(errResult)
          }
        }
		return Promise.inject(error)
	})
