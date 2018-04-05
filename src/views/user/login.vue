<template lang='pug'>
  Content
    div._form-wrapper(slot='sign-form')
      section._form-header
        label 用户登录
      section._form-body
        div._input-item
          label 账 号
          el-input(v-model='account' placeholder='请输入账号/邮箱/手机号')
        div._input-item
          label 密 码
          el-input(v-model='psw' placeholder='请输入密码')
        div._input-item(v-show='false')
          label 验证码
          el-input(v-model='psw' placeholder='请输入验证码')
          img(src='fsdf')
      section._form-btn
        el-button(type='primary' @click.stop='login') 登 录
      section._form-forget
        router-link(to='/register' tag='span') 快速注册
        router-link(to='/forget' tag='span') 忘记密码？
</template>
<script type="text/javascript">
  import './styles/form'
  import Content from './components/Content'
  export default {
    components: { Content },
    data() {
      return {
        account: '',
        psw: ''
      }
    },
    methods: {
      async login() {
        // input check
        const emailReg = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/
        if(!this.account) return this.$message('请输入账号')
        if(!emailReg.test(this.account)) return this.$message('请输入正确的账号')
        if(!this.psw) return this.$message('请输入密码')

        let res = await this.$api.user.login({
          sigin_input: this.account || '科',                 // [string]  用户名
          pass_word: this.psw || '123456',               // [string]  密码
        })

        // error
        if(res.errNo) return this.$message({
          message:res.msg
        })

        // ok
        this.$router.push('/overview')
      }
    }
  }
</script>
