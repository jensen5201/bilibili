# bilibili

> AAAAbilibili基于轻量级MVVM框架Vue进行开发，目的在于积累迭代构建一个完整的vue生态架构，---that is，不断完善抽调优化

## Server

- 后台接口`serve by`@上铺乐神，基于`go`语言开发，喜欢或者想了解的尽情去`star`蹂躏吧！
- Link:https://github.com/627886474/aibibi

## Description and Environment

- 基于vue-cli脚手架构建
- 采用`vue2.0 + axios + vuex + vue-router`全家桶开发
- 选用`element-ui`组件
- 开发工具:`Sublime Text 3`
- node版本@8.9.3   webpack版本@3.6.0    yarn版本@0.24.5

## Build Setup

``` bash
# install dependencies
- yarn install 或者 npm install
(ps:如果报错node-sass相关问题,sudo: SASS_BINARY_SITE=http://npm.taobao.org/mirrors/node-sass npm rebuild node-sass)


# serve with hot reload at localhost:8989
- yarn start 或者 npm run start


# build for production with minification
- yarn build 或者 npm run build

```

## Structure

- ./build/webpack.base.js -Webpack 配置文件（基础配置文件）
- ./build/webpack.dev.js - Webpack 配置文件 (开发环境)
- ./build/webpack.prod.js - Webpack 配置文件 (生产环境)
- ./dist/ - 打包后的代码
- ./docs/ - 相关文档
- ./src - 项目源码
- ./src/index.html - Webpack 打包用模板
- ./src/assets/ - 资源文件
- ./src/assets/styles - 全局的 CSS 文件
- ./src/assets/images - 全局的图片资源
- ./src/main.js - 应用入口
- ./src/App.vue - 根组件
- ./src/views/ - 视图
- ./src/router/ - 路由
- ./src/vendors/ - 依赖库入口
- ./src/store/ - 状态管理
- ./src/utils/ - 抽象工具
- ./src/api/ - API请求
- ./src/components/ - 自定义公共组件
- ./docker-compose.yml -用于ubuntu部署到阿里云，可忽略


 ——人生实苦，但请足够相信大前端！If u like, just to give me a star~~~
 test 这是dev第4次
