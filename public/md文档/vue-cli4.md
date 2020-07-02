# vue cli4 使用笔记
使用vue-cli4构建项目
## 一、安装
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

## 目录结构
vue-cli4生成项目的结构：
- public //静态文件
- src
    - assets  静态文件
    - components  组件
    - router  路由
    - stoe  状态
    - views  视图
    - App.vue 
    - <font color="#cccc">main.js</font>

## 二、运行
默认情况下
```
npm run sever  //启动
npm run build  //打包
```