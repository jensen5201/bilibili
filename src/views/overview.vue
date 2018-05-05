<template>
  <div>
    <h1>首页界面</h1>
    <h3>获取到的信息：</h3>
    <ul>
      <li v-for="(item, key, idx) of userInfo">
        <span>{{`${idx+1}、${key}:${item}`}}</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'overview',
  data(){
    return{
      userInfo: {}
    }
  },
  method:{

  },
  async created(){
    // 获取用户信息
    let ret = await this.$api.user.userInfo()
    if(ret.errNo) return this.$message('返回信息：', ret.msg)
    this.userInfo = ret.data.user
  }
}
</script>
