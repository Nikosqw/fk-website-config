import Vue from 'vue'
Vue.config.devtools = true
require('../public/index.css')
import Home from './pages/Home'
import CreateConfigTeam from './pages/CreateConfigTeam'
import CreateConfigGame from './pages/CreateConfigGame'

import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { path: '/home', component: Home },
  { path: '/create/teams', component: CreateConfigTeam },
  { path: '/create/config', component: CreateConfigGame }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

const app = new Vue({
  router
}).$mount('#app')