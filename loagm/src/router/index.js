import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import MainView from '../views/MainView.vue'
import SignUpMasterView from '../views/SignUpMasterView.vue'
import SignUpMemberView from '../views/SignUpMemberView.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/main',
    name: 'main',
    component: MainView
  },
  {
    path: '/signup_master',
    name: 'master',
    component: SignUpMasterView
  },
  {
    path: '/signup_member',
    name: 'member',
    component: SignUpMemberView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
