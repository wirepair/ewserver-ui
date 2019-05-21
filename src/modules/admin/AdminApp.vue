<template>
  <div id="adminapp">
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'adminapp',
  computed: mapGetters({users: 'Users', apiUsers: 'APIUsers', roles: 'Roles'}),
  created: function () {
    this.$store.dispatch('populateUsers')
    this.$store.dispatch('populateAPIUsers')
    this.$store.dispatch('populateRoles')
  }
}
</script>

<style>
#adminapp {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
