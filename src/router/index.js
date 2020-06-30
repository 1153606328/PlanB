import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Address from '../views/Address.vue'
import Addplan from '../views/Addplan.vue'
import City from '../views/City.vue'

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
  {
    path: '/addplan',
    name: 'Addplan',
    meta: { title: '添加计划', isleftarrow:true  },
    component: Addplan
  },
  {
    path: '/city',
    name: 'City',
    meta: { title: '城市', isleftarrow:true  },
    component: City
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
