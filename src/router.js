import Vue from 'vue'
import Router from 'vue-router'
import Admin from './views/Admin.vue'
import Clients from './views/Clients.vue'
import Forms from './views/Forms.vue'
import Dashboard from './views/Dashboard.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'clients',
      component: Clients
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin
    },
    {
      path: '/clients',
      name: 'clients',
      component: Clients
    },
    {
      path: '/forms',
      name: 'forms',
      component: Forms
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    }
  ]
})
