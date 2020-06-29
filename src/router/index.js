import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Address from '../views/Address.vue'

Vue.use(VueRouter)

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
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
