<template>
    <Content>
      <div class='_form-wrapper' slot='sign-form'>
        <section class='_form-header'>
          <label> 注册账号 </label>
        </section>
        <section class='_form-body'>
          <div class='_input-item'>
            <label> 账 号 </label>
            <el-input v-model='account' placeholder='请输入账号/邮箱/手机号'></el-input>
          </div>
          <div class='_input-item'>
            <label> 密 码 </label>
            <el-input v-model='psw' type='password' placeholder='请输入密码'></el-input>
          </div>
          <div class='_input-item'>
            <label> 手机号 </label>
            <el-input v-model='phone' placeholder='请输入手机号'></el-input>
          </div>
          <div class='_input-item' v-show='false'>
            <label> 确认密码 </label>
            <el-input v-model='cpsw' placeholder='请确认密码'></el-input>
          </div>
          <div class='_input-item' v-show='false'>
            <label> 验证码 </label>
            <el-input v-model='code' placeholder='请输入验证码'></el-input>
            <img src='fsdf' />
          </div>
        </section>
        <section class='_form-btn'>
          <el-button type='primary' @click.stop='register'> 注 册 </el-button>
        </section>
        <section class='_form-forget'>
          <router-link to='/login' tag='span'> 已有账号，登录 </router-link>
        </section>
      </div>
    </Content>
</template>
<script type="text/javascript">
  import './styles/form'
  import Content from './components/Content'
  export default {
    components: { Content },
    data() {
      return {
        account: '',
        psw: '',
        phone: '',
        cpsw: '',
        code: ''
      }
    },
    methods: {
      async register() {
        // input check
        const emailReg = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/
          , phoneReg = /^1[34578]\d{9}$/
        if(!this.account) return this.$message('请输入账号')
        if(!emailReg.test(this.account)) return this.$message('请输入正确的账号')
        if(!this.psw) return this.$message('请输入密码')
        if(!this.phone) return this.$message('请输入手机号')
        if(!phoneReg.test(this.phone)) return this.$message('请输入正确的手机号')


        let res = await this.$api.user.register({
          name: this.account || '科',                 // [string]  用户名
          pass_word: this.psw || '123456',            // [string]  密码
          mobile: this.phone || '123456',               // [string]  手机号
        })

        // error
        if(res.errNo) return this.$message({
          message:res.msg
        })

        // ok
        this.$router.push('/login')
      }
    },
    mounted() {


    }
  }
</script>
