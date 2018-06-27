<template>
  <div id="app">
    <el-row type='flex' class='app-wrapper'>
      <div class='app-slider-tab' v-show='!$route.meta.hideSliderTab'>
        <header class='app-logo _center' >
          <span>LOGO</span>
        </header>
        <app-menu :isCollapse='isCollapse'></app-menu>
      </div>
      <el-col class='app-main-container _flex _flex-column'>
        <header class="app-header _flex _flex-vc _flex-h-space-between" v-show='!$route.meta.hideMainHeader'>
          <span class='header-collapse _flex _flex-vhc'>
            <svg class="icon" @click="isCollapse=!isCollapse"><use :xlink:href="isCollapse?'#icon-caidan':'#icon-caidan'"></use></svg>
          </span>
          <el-dropdown>
            <span class="el-dropdown-link">
               <svg class="icon"><use xlink:href="#icon-76"></use></svg>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>个人中心</el-dropdown-item>
              <el-dropdown-item>关于我们</el-dropdown-item>
              <el-dropdown-item>退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </header>
        <transition name="fade">
          <keep-alive>
            <router-view class="_flex-item app-content" />
          </keep-alive>
        </transition>
        <footer class="app-footer _center" v-show='!$route.meta.hideMainFooter'>版权所有</footer>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import appMenu from "@/components/menu";
export default {
  name: "App",
  components: {
    [appMenu.name]: appMenu
  },
  data() {
    return {
      isCollapse: true,
      transitionName: "slide-left"
    };
  },
  watch: {
    $route(to, from) {
      //    console.log('现在路由:',to.path.split('/')[1],'来自路由:',from.path.split('/')[1],'现在的动画:',this.transitionName)
      const toDepth = to.path.split("/").length;
      const fromDepth = from.path.split("/").length;
      this.transitionName = toDepth < fromDepth ? "slide-right" : "slide-left";
    }
  }
};
</script>

<style lang='scss'>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  width: 100vw;
  .app-wrapper {
    height: 100%;
    .app-slider-tab {
      background-color: #545c64;
      .app-logo {
        color: #fff;
        height: 50px;
        line-height: 50px;
        border-bottom: 1px solid #555;
      }
      .el-menu {
        border-right: none;
      }
      .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
      }
    }
    .app-main-container {
      .app-header {
        height: 50px;
        background-color: #545455;
        border-bottom: 1px solid #e5e5e5;
        .header-collapse {
          background-color: #444;
          padding: 8px;
        }
        .el-dropdown-link {
          padding: 10px;
          &:hover {
            cursor: pointer;
          }
          svg {
            font-size: 30px;
          }
        }
        svg {
          font-size: 24px;
          color: #ccc;
        }
      }
      .app-content {
        overflow: auto;
        transition: all 0.05s ease-in-out;
      }
      .app-footer {
        height: 40px;
        line-height: 40px;
        font-size: 13px;
        border-top: 1px solid #e5e5e5;
      }
    }
  }
}
.fade-enter,.fade-leave-active{
  transform: translateX(100%)
}
</style>
