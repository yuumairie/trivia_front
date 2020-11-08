import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import RegisterUser from '../views/RegisterUser.vue'
import Login from '../views/Login.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/register',
    name: 'Register',
    component: RegisterUser
  },
  {
    path:'/login',
    name: 'Login',
    component: Login  
  }
]

export const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
export function useRouter() {
  return router;
}


// export default router
