import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/main',
    name: 'main',
    component: () => import(/* webpackChunkName: "main", webpackPrefetch:true */ '../views/MainView.vue')
  },
  {
    path: '/signup_master',
    name: 'master',
    component: () => import(/* webpackChunkName: "signup", webpackPrefetch:true */ '../views/SignUpMasterView.vue')
  },
  {
    path: '/signup_member',
    name: 'member',
    component: () => import(/* webpackChunkName: "signup", webpackPrefetch:true */ '../views/SignUpMemberView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
