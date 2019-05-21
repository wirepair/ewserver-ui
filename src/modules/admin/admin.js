// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import AdminApp from './AdminApp'
import store from './store'
import Users from '@/components/admin/Users'
import APIUsers from '@/components/admin/APIUsers'
import Roles from '@/components/admin/Roles'
import AddUserModal from '@/components/admin/AddUserModal'
import AddPermission from '@/components/admin/AddPermission'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
Vue.use(BootstrapVue)

Vue.component('a-users', Users)
Vue.component('a-apiusers', APIUsers)
Vue.component('a-roles', Roles)
Vue.component('a-adduser', AddUserModal)
Vue.component('a-permission', AddPermission)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#adminapp',
  router,
  store,
  template: '<AdminApp/>',
  components: { AdminApp }
})
