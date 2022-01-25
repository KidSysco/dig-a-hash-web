import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import DegenShindig from './views/DegenShindig.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/degenshindigs',
      name: 'degen shindigs',
      component: DegenShindig
    }
  ]
})
