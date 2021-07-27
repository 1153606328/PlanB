import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index.vue'
import Case from '../views/case/Case.vue'
import Logs from '../views/Logs.vue'
import Message from '../views/Message.vue'
import CaseInfo from '../views/case/Case_info.vue'
import Login from '../views/Login.vue'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Index',
    meta: { title: '首页', isleftarrow:false  },
    component: Index
  },
  {
    path: '/case',
    name: 'Case',
    meta: { title: '作品', isleftarrow:true },
    component: Case,
  },
  {
    path: '/logs',
    name: 'Logs',
    meta: { title: '日志', isleftarrow:true  },
    component: Logs
  },
  {
    path: '/message',
    name: 'Message',
    meta: { title: '留言', isleftarrow:true  },
    component: Message
  },
  {
    path: '/case_info',
    name: 'CaseInfo',
    meta: { title: '作品详情', isleftarrow:true },
    component: CaseInfo,
  },
  {
    path: '/login',
    name: 'Login',
    meta: { title: '登录注册', isleftarrow:true  },
    component: Login
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
