import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Edit from '../views/Edit.vue'
import Page404 from '../views/Page404.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/edit',
    name: 'Edit',
    component: Edit
  },

  {
    path: '/edit/:id',
    name: 'Edit',
    component: Edit
  },

  {
    path: '/404',
    name: '404',
    component: Page404
  },

  {
    path: '*',
    redirect: '/404'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
