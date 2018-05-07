<template>
  <div id="app">
    <el-row type='flex' class='app-wrapper'>
      <div  style='max-width:200px' class='app-slider-tab' v-show='!$route.meta.hideSliderTab'>
        <header class='app-logo _center' @click="isCollapse=!isCollapse">
          <el-button>展开/收起</el-button>
        </header>
        <app-menu :isCollapse='isCollapse'></app-menu>
      </div>
      <el-col class='app-main-content _flex _flex-column'>
        <header class="app-header _flex" v-show='!$route.meta.hideMainHeader'>
          <div class="app-logo">Logo</div>
          <nav class="app-nav _flex-item">
            <ul class="_flex">
              <li><router-link to='/overview'>首页</router-link></li>
              <li><router-link to='/overview'>社区</router-link></li>
              <li><router-link to='/overview'>合作</router-link></li>
              <li><router-link to='/overview'>关于我们</router-link></li>
            </ul>
          </nav>
        </header>
        <router-view class="_flex-item"/>
        <footer class="app-footer _center" v-show='!$route.meta.hideMainFooter'>版权所有</footer>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import appMenu from '@/components/menu'
export default {
  name: 'App',
  components: {
    [appMenu.name]: appMenu,
  },
  data(){
    return{
      isCollapse: true
    }
  }
}
</script>

<style lang='scss'>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  width: 100vw;
  .app-wrapper{
    height: 100%;
    .app-slider-tab{
      background-color: #545c64;
      .app-logo{
        color: #fff;
        height: 80px;
        line-height: 80px;
      }
      .el-menu{
        border-right: none;
      }
      .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
      }
    }
  }
  .app-header {
    height: 80px;
    line-height: 80px;
    background-color: #336666;
    color: #999;
    .app-logo{
      width: 30vw;
      text-align: center;
    }
    .app-nav {
      margin-left: 60px;
      li{
        position: relative;
        z-index: 1;
        a{
          padding: 0 30px;
        }
        &:before{
          position: absolute;
          transform: skewX(-30deg)  scaleY(0);
          transition: 0.3s;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          content: '';
          z-index: -1;
          background-color: #fff;
        }
        &:after {
          position: absolute;
          bottom: 0;
          left: 100%;
          content: '';
          height: 1px;
          display: inline-block;
          background-color: #fff;
          width: 0;
          z-index: 1;
          transform: translateX(-23px);
        }
        &:hover {
          color: #fff;
          &:before{
            background-color: rgba(0,0,0,0.3);
            transform: skewX(-30deg) scaleY(1);
          }
          &:after {
            width: 100%;
            left: 0;
            transition: all 0.3s linear;
          }
        }
        &:hover ~ li::after{
           left: 0;
        }
      }
    }
  }
  .app-footer {
    height: 40px;
    line-height: 40px;
    font-size: 13px;
    border-top: 1px solid #e5e5e5;
  }
}
</style>
