import Vue from 'vue'
import VueRouter from 'vue-router'
import RouteClient from './client'
import RouteServer from './server'

Vue.use(VueRouter)

import Home from '../views/client/home.vue'

const routes = [...RouteClient, ...RouteServer]

// RouteClient.forEach(item => {
//   routes.push(item)
// });
// RouteServer.forEach(item => {
//   routes.push(item)
// });

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
