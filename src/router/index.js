import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/usertype',
    name: 'UserType',
    component: () => import('../views/UserType.vue')
  },
  {
    path: '/main',
    name: 'Main',
    component: () => import('../views/Main.vue')
  },
  {
    path: '/student',
    name: 'Student',
    component: () => import('../views/Student.vue')
  },
  {
    path: '/main_alcv',
    name: 'Main-AlCV',
    component: () => import('../views/Main_alcv.vue')
  },
  {
    path: '/main_cdi',
    name: 'Main-CDI',
    component: () => import('../views/Main_cdi.vue')
  },
  {
    path: '/main_pc',
    name: 'Main-PC',
    component: () => import('../views/Main_pc.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
