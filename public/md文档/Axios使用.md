# Axios使用笔记
Axios特性
- 可以在node.js中使用
- 提供并发请求的接口
- 支持 promise Api
### 1、安装
安装axios和vue-axios
```
npm install axios
npm install vue-axios
```
### 2、导入
在main.js中导入并全局使用axos和vue-axios
```js
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios,axios);
Vue.prototype.$axios = axios
```
### 3、使用
```js
this.axios.get('/api')
      .then(res=>{console.log(res)})
      .catch(err=>{console.log(err)})
```
### 4、封装Axios
在src目录下创建
- http
  - api.js  存放api接口
  - axios.js  请求拦截
  - http.js       封装GET和POST请求
在main.js文件中导入：
```js
import api from "./http/api";
import http from "./http/http";
import "./http/axios";
 
// 对后端接口 进行全局注册，将api挂载到vue的原型上
Vue.prototype.$api = api;
// 对请求方式 进行全局注册
Vue.prototype.$http = http;
```
api.js
```js
export default {
    // get请求，参数为 id
    getUsers: {
      url: "/user"
    },
    // post请求，参数为 userName, sex, age, phone, email
    addUser: {
      url: "/user/addUser"
    },
  }
```
axios.js
```js
import axios from "axios";
 
// 请求拦截
axios.interceptors.request.use(
  config => {
    // 1. 这个位置就请求前最后的配置
    // 2. 当然你也可以在这个位置 加入你的后端需要的用户授权信息
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);
 
// 响应拦截
axios.interceptors.response.use(
  response => {
    // 请求成功
    // 1. 根据自己项目需求定制自己的拦截
    // 2. 然后返回数据
    return response.data;
  },
  error => {
    // 请求失败
    if (error && error.response) {
      switch (error.response.status) {
        case 400:
          // 对400错误您的处理
          console.log("错误请求");
          break;
        case 403:
          // 对 403 错误进行处理
          console.log("拒绝访问");
          break;
        case 404:
          // 对 404 错误进行处理
          console.log("请求错误,未找到该资源");
          break;
        case 500:
          // 对 500 错误进行处理
          console.log("服务器端出错");
          break;
        case 502:
          // 对 502 错误进行处理
          console.log("网络错误");
          break;
        case 503:
          // 对 503 错误进行处理
          console.log("服务不可用");
          break;
        case 504:
          // 对 504 错误进行处理
          console.log("网络超时");
          break;
        default:
          // 如果以上都不是的处理
          return Promise.reject(error);
      }
    } else {
      console.log("连接到服务器失败");
    }
  }
);
```
http.js
```js

import axios from "axios";
axios.defaults.timeout = 5000; // 请求超时
// axios.defaults.baseURL = "/api"; // 增加请求默认路径前缀
 
export default {
  /**
   * get 请求
   * @param url 接口路由
   * @returns {AxiosPromise<any>}
   */
  get(url, params, headers) {
    let options = {};
 
    if (params) {
      options.params = params;
    }
    if (headers) {
      options.headers = headers;
    }
    return axios.get(url, options);
  },
 
  /**
   * post 请求
   *
   * @param url 接口路由
   * @param params 接口参数
   * @returns {AxiosPromise<any>}
   */
  post(url, headers, data) {
    let options = {};
 
    if (headers) {
      options.headers = headers;
    }
    return axios.post(url, data, options);
  }
};

```
### 5、代理设置

开发过程中一般会使用到代理，请求本地json或跨域：\
- 1、在根目录下创建vue.comfig.js文件
```js
module.exports = {
    devServer: {
      port: 8080,
      // open: true, //配置自动启动浏览器
      proxy: {
        "/api": {
          target: "http://localhost:8080", //后端ip地址及端口
          ws: true, //是否跨域
          changeOrigin: true,
          pathRewrite: {
            "^/api": "/data"//重定向的路径
          }
        }   
      }
    }
  };
  ```

