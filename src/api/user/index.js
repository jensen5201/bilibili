/*
* @Author: jensen
* @Date:   2018-03-30 11:26:00
* @Last Modified by:   jensen
* @Last Modified time: 2018-04-05 20:50:05
*/

import axios from 'axios'


export default {
	register( args = {
		// name: '科',                        // [string]  用户名
    // pass_word: '123456',               // [string]  密码
    // mobile: '13712340004',             // [string]  手机号
	}){
		return axios.post( '/user/register', args)
	},
	login( args = {
		// sigin_input: '123456@qq.com',                 // [string]  用户名
    // password: '123456',               // [string]  密码
	}){
		return axios.post( '/user/login', args)
  },
  userInfo( args = {

	}){
		return axios.get( '/user/info', args)
	},
  editInfo( args = {
    // "sex":1,                           // [string]  用户名
  }){
    return axios.post( '/user/update/sex', args)
  },
  changePsw( args = {
    // pass: '12345678',                 // [string]  旧密码
    // new_pwd: '123456',                // [string]  新密码
  }){
    return axios.post( '/user/password/update', args)
  }
}
