<template lang='pug'>
  Content
    div._form-wrapper(slot='sign-form')
      section._form-header
        label 用户登录
      section._form-body
          el-form(:model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm")
            el-form-item(label="用户名" prop="username")
              el-input(v-model="ruleForm.username")
            el-form-item(label="密码" prop="psw")
              el-input(v-model="ruleForm.psw")
      section._form-btn
        el-button(type='primary' @click.stop='login') 登 录
      section._form-forget
        router-link(to='/register' tag='span') 快速注册
        router-link(to='/forgetPsw' tag='span') 忘记密码？
</template>
<script type="text/javascript">
  import './styles/form'
  import Content from './components/Content'
  export default {
    components: { Content },
    data() {
      return {
        ruleForm: {
          name: '',
          psw: '',
        },
        rules: {
          username: [
            { message: '请输入账号', trigger: 'blur' }
          ],
          psw: [
            { message: '请输入密码', trigger: 'change' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ]
        }
      }
    },
    computed : {

    },
    methods: {
      async login() {
        // input check
        // if(!this.account) return this.$message('请输入账号')
        // if(!this.psw) return this.$message('请输入密码')
        const emailReg = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/
        // if(!emailReg.test(this.account)) return this.$message('请输入正确的账号')

        let ret = await this.$api.user.login({
          sigin_input: this.account || '123456@qq.com',                 // [string]  用户名
          password: this.psw || '123456',               // [string]  密码
        })

        // error
        if(ret.errNo) return this.$message({
          message:ret.msg
        })

        // ok
        localStorage.setItem('token', ret.data.token)
        document.cookie = 'token='+ localStorage.getItem('token')
        this.$router.push('/overview')
      },
    },
    created(){

    }
  }
</script>
