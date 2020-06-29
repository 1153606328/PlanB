# 目录
本项目打算做一个私人的移动端web-app,主要功能： - 展示笔记

- [目录](#目录)
  - [技术栈](#技术栈)
  - [一、构建项目](#一构建项目)
    - [vue-cli4](#vue-cli4)
      - [安装](#安装)
      - [目录结构](#目录结构)
      - [运行](#运行)
  - [二、安装插件/库](#二安装插件库)
    - [vant](#vant)
  - [三、样式处理](#三样式处理)
    - [1、rem适配](#1rem适配)
    - [2、全局less变量](#2全局less变量)
    - [3、遍历生成类名](#3遍历生成类名)
  - [四、封装组件](#四封装组件)
      - [1、NavBar导航](#1navbar导航)

## 技术栈
- vue
  - vue-cli4
  - vue-router
  - vuex
- axios
- UI库：Vant
## 一、构建项目
### vue-cli4
#### 安装
1、安装node  
2、安装脚手架vue cli
```js
npm install -g @vue/cli
vue create hello-world //创建一个项目
```
3、选择配置
- 1、自定义配置  
    ```
    babel：javascript转译器
    typescript：使用 TypeScript 书写源码  
    PWA：渐进式WEB应用
    Router：使用vue-router
    Vuex：使用vuex
    CSS Pre-processors：css预处理器
    Linter / Formatter：代码规范标准
    Unit Testing：单元测试
    E2E Testing：e2e测试
    ```
- 2、css预编译
- 3、语法检测、检测方式
- 4、配置文件存放方式

#### 目录结构
vue-cli4生成项目的结构：
- public
    - data //本地json
- src
    - assets  静态文件
    - components  组件
    - http  请求设置
    - router  路由
    - stoe  状态
    - views  视图
    - App.vue 
    - <font color="#cccc">main.js</font>

#### 运行
默认情况下
```
  npm run sever  //启动
  npm run build  //打包
```
---
## 二、安装插件/库
### vant
1、安装
```
npm i vant -S
```
2、自动按需引入

babel-plugin-import 是一款 babel 插件，它会在编译过程中将 import 的写法自动转换为按需引入的方式

安装插件
```
npm i babel-plugin-import -D
```
```js
// 对于使用 babel7 的用户，可以在 babel.config.js 中配置
module.exports = {
  plugins: [
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true
    }, 'vant']
  ]
};
// 接着你可以在代码中直接引入 Vant 组件
// 插件会自动将代码转化为方式二中的按需引入形式
import { Button } from 'vant';
```
## 三、样式处理
### 1、rem适配

### 2、全局less变量
在src下创建style文件夹，base.less(公用)
``` less
@baseColor:#f95a5a;
@baseColor2:#FF976A;
@fuzhuColor:#FFFBE8;
@fuzhuClolr2:#FFF7E8;
@bgColor:#dedede;//背景色
//文字颜色
@fon:#323233;
```
### 3、遍历生成类名
在base.less中遍历生成类名-padding,magin等
``` less
.loop(@counter) when (@counter > 0) {
    .p@{counter} {
      padding: (1px * @counter);
    }
    .pt@{counter} {
      padding-top: (1px * @counter);
    }
    .pr@{counter} {
      padding-right: (1px * @counter);
    }
    .pb@{counter} {
      padding-bottom: (1px * @counter);
    }
    .pl@{counter} {
      padding-left: (1px * @counter);
    }
    .m@{counter} {
      margin: (1px * @counter);
    }
    .mt@{counter} {
      margin-top: (1px * @counter);
    }
    .mr@{counter} {
      margin-right: (1px * @counter);
    }
    .mb@{counter} {
      margin-bottom: (1px * @counter);
    }
    .ml@{counter} {
      margin-left: (1px * @counter);
    }
    .fs@{counter} {
      font-size: (1px * @counter);
    }
    .loop((@counter - 1));    // 递归调用自身
  }
   
  .loop(200);
```
## 四、封装组件
#### 1、NavBar导航
1.1 在components/common目录下创建NavBar文件
```vue
<template>
  <div class="Navbar">
     <van-nav-bar :fixed="true" :placeholder="true" :title="title"  :left-arrow="isleftarrow" @click-left="onClickLeft" />
  </div>
</template>
```
1.2 NavBar 通过props 传递title和是否显示icon
```js
export default {
  // title：用来显示导航栏的title，isleftarrow用来显示导航栏的左侧返回箭头
  props: ["title","isleftarrow"],
  methods: {
    onClickLeft() {
      // 点击回退的时候当做地址回退
      this.$router.go(-1);
    }
  }
};
```
1.3 修改router文件，添加mate
```js
const routes = [
  {
    path: '/',
    name: 'Home',
    meta: { title: '首页', isleftarrow:false  },
    component: Home
  },
  {
    path: '/address',
    name: 'Address',
    meta: { title: '编辑地址', isleftarrow:true  },
    component: Address
  },
```
1.4 父组件调用NavBar
```vue
<template>
  <div id="app">
    <NavBar v-show="navShow" :title="title" :isleftarrow="isleftarrow"></NavBar>
    <router-view/>
  </div>
</template>
<script>
import NavBar from "./components/common/NavBar.vue";
export default {
  components: {
    NavBar
  },
  data() {
    return {
      title:'',
      isleftarrow:'',
      transitionName: "fade",
      navShow: true
    };
  },
  mounted() {//渲染完成后赋值title
    this.title = this.$route.meta.title;
    this.isleftarrow = this.$route.meta.isleftarrow;       
  },
  watch: {//路由变化时动态更新
    $route(to, from) {
      this.title = to.meta.title;
      this.isleftarrow =  to.meta.isleftarrow;
     }
  }
}
</script>
```
