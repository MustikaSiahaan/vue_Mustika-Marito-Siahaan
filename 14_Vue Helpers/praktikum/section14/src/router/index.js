import Vue from 'vue'
import VueRouter from 'vue-router'
import ListView from '../views/ListView.vue'
import DetailView from '../views/Detail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'List',
    component: ListView
  },
  {
    path: 'detail',
    name: 'detail',
    component: DetailView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router