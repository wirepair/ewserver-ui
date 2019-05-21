<template>
<b-container>
    <b-alert class="mt-2"
             :show="errors.length > 0"
             dismissible
             fade
             variant="danger"
             v-for='(error, index) in errors' :key='index'>
      <p> {{error}} </p>
    </b-alert>

  <div class="wrapper">
    <b-tabs>
    <b-tab title="Users" active>
      <a-users :roles="roles.roleNames"></a-users>
    </b-tab>
    <b-tab title="APIUsers">
      <a-apiusers :roles="roles.roleNames"></a-apiusers>
    </b-tab>
    <b-tab title="Permissions &amp; Roles" >
      <a-roles :roles="roles"></a-roles>
    </b-tab>
    </b-tabs>
  </div>
</b-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters({roles: 'Roles', errors: 'Errors'}),
  data () {
    return {
    }
  },
  created: function () {
    this.$store.dispatch('populateRoles')
  },
  methods: {
  }
}
</script>

<style scoped>
.wrapper {	
  margin-top: 10px;
}
</style>