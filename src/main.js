import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'
import VueAxios from 'vue-axios'
import api from "./http/api";
import http from "./http/http";
import "./http/axios";
 
import { Button,
  NavBar ,
  Swipe, SwipeItem,
  Tabbar,TabbarItem,
  Lazyload,
  List,
  Cell, CellGroup,
  Col, Row,
  Empty,
  Card,
  Search,
  Icon,
  Popup,
  Tag,AddressEdit,Form,Field,
  Calendar,Picker,Toast,
  ShareSheet,Uploader,Step, Steps,Skeleton 
} from 'vant';
import'vant/lib/index.css'
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
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Lazyload);
Vue.use(List);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Col);
Vue.use(Row);
Vue.use(Empty);
Vue.use(Card);
Vue.use(Search);
Vue.use(Tag);
Vue.use(Icon);
Vue.use(Popup);
Vue.use(AddressEdit);
Vue.use(Form);
Vue.use(Field);
Vue.use(Calendar);
Vue.use(Picker);
Vue.use(Toast);
Vue.use(ShareSheet);
Vue.use(Uploader);
Vue.use(Step);
Vue.use(Steps);
Vue.use(Skeleton);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
