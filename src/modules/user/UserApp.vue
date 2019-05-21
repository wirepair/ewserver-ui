<template>
    <div id="userapp">
    <app-nav :user='user'></app-nav>
    <router-view></router-view>
    <app-footer :last_address='user.last_address'></app-footer>
  </div>
</template>

<script>
import AppNav from '@/components/AppNav.vue'
import AppFooter from '@/components/AppFooter.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'userapp',
  components: {AppNav, AppFooter},
  computed: mapGetters({user: 'User'}),
  data () {
    return {
    }
  },
  created: function () {
    this.$store.dispatch('populateUser')
  }
}
</script>

<style>
#userapp {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
