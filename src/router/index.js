import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from "@/components/MainPage";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: MainPage
  }
]

const router = new VueRouter({
  routes
})

export default router
