import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue")
  }
]

const router = createRouter({
  // vite在开发阶段是直接运行在浏览器中，所以没有process对象，自然不能使用process.env.NODE_ENV

  // 可知，createWebHistory()可以接收一个参数，作为基础路由
  // history: createWebHistory(process.env.BASE_URL),
  // vite中通过import.meta.env从环境文件中读取变量
  // history: createWebHistory(import.meta.env.VITE_BASE_URL),
  history: createWebHistory(),
  routes
})

export default router
