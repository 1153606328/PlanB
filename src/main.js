import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'
import VueAxios from 'vue-axios'
import api from "./http/api";
import http from "./http/http";
import "./http/axios";
 
import { Button,NavBar,Swipe, SwipeItem,Lazyload  } from 'vant';
import 'vant/lib/button/style';
import 'lib-flexible'

// 对后端接口 进行全局注册，将api挂载到vue的原型上
Vue.prototype.$api = api;
// 对请求方式 进行全局注册
Vue.prototype.$http = http;

Vue.config.productionTip = false
Vue.use(VueAxios,axios);
Vue.prototype.$axios = axios;

Vue.use(Button);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Lazyload);
Vue.use(NavBar); 
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
