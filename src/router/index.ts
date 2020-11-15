import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import RegisterUser from '../views/RegisterUser.vue'
import Login from '../views/Login.vue'
import Post from '../views/Post.vue'
import {useStore} from '../store'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterUser
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/post',
    name: 'Post',
    component: Post,
    beforeEnter:((to,from,next)=>{
      if(useStore().getters.getToken){
        next()
      }else{
        next('login')
      }
    })
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
