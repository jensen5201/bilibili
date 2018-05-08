<template>
  <div>
    <h1>首页界面</h1>
    <h3>获取到的信息：</h3>
    <ul>
      <li v-for="(item, key, idx) of userInfo">
        <span>{{`${idx+1}、${key}:${item}`}}</span>
      </li>
    </ul>
    <!-- 为 ECharts 准备一个具备大小（宽高）的 DOM -->
    <div id="main" style="width: 600px;height:400px;"></div>
  </div>
</template>
<script>
import echarts from 'echarts'
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
  },
  mounted(){
    // 基于准备好的dom，初始化echarts实例
    let myChart = echarts.init(document.getElementById('main'));

    // 指定图表的配置项和数据
    let option = {
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
            smooth: true
        }]
    }

    // 使用刚指定的配置项和数据显示图表。
    this.$nextTick(()=>{
        myChart.setOption(option)
    })
  }
}
</script>
