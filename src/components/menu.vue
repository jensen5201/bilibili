<template>
    <el-menu
      :collapse="!isCollapse"
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      router
      active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1" :route="{path:'/test1'}">选项1</el-menu-item>
          <el-menu-item index="1-2" :route="{path:'/test2'}">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3" :route="{path:'/test3'}">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1" :route="{path:'/test4'}">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2" :route="{path:'/test2'}">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3" :route="{path:'/test3'}">
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4" :route="{path:'/test4'}">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
</template>

<script>
  export default {
    name:'app-menu',
    props:{
        isCollapse: {
            type: Boolean,
            default: true
        }
    },
    methods: {
      handleOpen(key, keyPath) {
        // 展开菜单时触发
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        // 收拢菜单时触发
        console.log(key, keyPath);
      }
    }
  }
</script>
