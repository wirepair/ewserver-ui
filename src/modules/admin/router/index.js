import Vue from 'vue'
import Router from 'vue-router'
import AdminMenu from '@/components/admin/AdminMenu'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AdminMenu',
      component: AdminMenu
    }
  ]
})
