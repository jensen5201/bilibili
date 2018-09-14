<template>
  <Content>
    <div class='_form-wrapper' slot='sign-form'>
      <section class='_form-header'>
        <label> 用户登录 </label>
      </section>
      <section class='_form-body'>
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="用户名" prop="username">
              <el-input v-model="ruleForm.username" type='text'></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="psw">
              <el-input v-model="ruleForm.psw" type='password'></el-input>
            </el-form-item>
          </el-form>
      </section>
      <section class='_form-btn'>
        <el-button type='primary' @click.stop='login'> 登 录 </el-button>
      </section>
      <section class='_form-forget'>
        <router-link to='/register' tag='span'> 快速注册abc </router-link>
        <router-link to='/forgetPsw' tag='span'> 忘记密码？</router-link>
      </section>
    </div>
  </Content>
</template>
<script type="text/javascript">
import Content from "./components/Content";
export default {
  components: { Content },
  data() {
    return {
      ruleForm: {
        username: "123456@qq.com",
        psw: "123456"
      },
      rules: {
        username: [
          { required:false, message: "请输入账号", trigger: "blur" }
        ],
        psw: [
          { message: "请输入密码", trigger: "change" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ]
      }
    };
  },
  computed: {},
  methods: {
    async login() {
      // input check
      // if(!this.account) return this.$message('请输入账号')
      // if(!this.psw) return this.$message('请输入密码')
      const emailReg = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
      // if(!emailReg.test(this.account)) return this.$message('请输入正确的账号')

      let ret = await this.$api.user.login({
        sigin_input: this.ruleForm.username, // [string]  用户名
        password: this.ruleForm.psw          // [string]  密码
      });

      // error
      if (ret.errNo)
        return this.$message({
          message: ret.msg
        });

      // ok
      // 本地存储token用于路由鉴权及cookie
      localStorage.setItem("token", ret.data.token);
      // 生成cookie
      document.cookie = `token=${localStorage.getItem("token")}`;
      this.$router.push("/overview");
    }
  },
  created() {}
};
</script>
<style lang='scss'>
@import "./styles/form";
</style>

