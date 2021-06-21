import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Address from '../views/Address.vue'
import Addplan from '../views/Addplan.vue'
import City from '../views/City.vue'
import Case from '../views/Case.vue'
import Index from '../views/index.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Index',
    meta: { title: '新首页', isleftarrow:false  },
    component: Index
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
  {
    path: '/case',
    name: 'Case',
    meta: { title: '案例展示', isleftarrow:true  },
    component: Case
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
