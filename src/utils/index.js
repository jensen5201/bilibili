/*
* @Author: jensen
* @Date:   2018-03-30 10:40:41
* @Last Modified by:   jensen
* @Last Modified time: 2018-04-06 02:00:35
*/




import Vue from 'vue'
import global from  './global'
import Cookie from  './Cookie'

Vue.use(new global())
window.Cookie = Cookie

export default {
    install(vue){
        vue.$utils = vue.prototype.$utils = {
            Cookie
        }
    }
}
