<template>
  <ul class="userlist" v-if="apiUsers.length">
    <li v-for="user in apiUsers"
      v-bind:key="user.username"
      v-bind:title="user.username">{{ user.username}}
    </li>
  </ul>
  <p v-else>No users</p>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters({apiUsers: 'APIUsers'}),
  created: function () {
    this.$store.dispatch('populateAPIUsers')
  }
}
</script>

<style scoped>
.userlist {
  text-align: left;
}
</style>