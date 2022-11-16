import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import ReserveView from '../views/ReserveView.vue'
import AccountView from '../views/AccountView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    
    path: '/reserve',
    name: 'ReserveView',
    component: ReserveView
  },

  {
    path: '/login',
    name: 'LoginView',
    component: LoginView
  },

  {
    path: '/register',
    name: 'RegisterView',
    component: RegisterView
  },

  {
    path: '/account',
    name: 'AccountView',
    component: AccountView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
