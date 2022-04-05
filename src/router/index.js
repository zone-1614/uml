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
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/my',
    name: 'my',
    component: () => import('../views/My.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/post',
    name: 'post',
    component: () => import('../components/Post.vue')
  },
  {
    path: '/message',
    name: 'message',
    component: () => import('../views/Message.vue')
  },
  {
    path: '/create',
    name: 'create',
    component: () => import('../views/CreatePost.vue')
  },
  {
    path: '/resource',
    name: 'resource',
    component: () => import('../views/Resource.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
