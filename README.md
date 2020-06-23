# 目录
[toc]
本项目打算做一个私人的移动端web-app,主要功能： 
- 展示笔记
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
```
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