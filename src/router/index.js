import Vue from 'vue'
import VueRouter from 'vue-router'
import { ROUTES } from "@/shared/constants";
import Home from '@/views/Home.vue'
import BreathListView from '@/views/BreathListView.vue'
import BreathDonutView from '@/views/BreathDonutView.vue'
import CycleListView from '@/views/CycleListView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: ROUTES.Home,
    component: Home
  },
  {
    path: '/BreathListView',
    name: ROUTES.BreathListView,
    component: BreathListView
  },
  {
    path: '/BreathDonutView',
    name: ROUTES.BreathDonutView,
    component: BreathDonutView
  },
  {
    path: '/CycleListView',
    name: ROUTES.CycleListView,
    component: CycleListView
  },
  {
    path: '/About',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
