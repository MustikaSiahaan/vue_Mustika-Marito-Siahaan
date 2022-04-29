import Vue from 'vue'
import VueRouter from 'vue-router'
import Section2 from '../views/Section2.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Section2',
    component: Section2
  },
  {
    path: '/section3',
    name: 'Section3',
  
  },
  {
    path: '/section4',
    name: 'Section4',
  },
  {
    path: '/section5',
    name: 'Section5',
  },
  {
    path: '/section6',
    name: 'Section6',
  },
  {
    path: '/section7',
    name: 'Section7',
  },
  {
    path: '/section8',
    name: 'Section8',
  },
  {
    path: '/section9',
    name: 'Section9',
  },
  {
    path: '/section10',
    name: 'Section10',
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
