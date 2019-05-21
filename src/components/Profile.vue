<template>
  <div>
    <b-card class="profile">
        <h4 slot="header">User Profile</h4>
        <b-list-group flush>
            <b-list-group-item>Username: {{ user.username }}</b-list-group-item>
            <b-list-group-item>First Name: {{ user.first_name }}</b-list-group-item>
            <b-list-group-item>Last Name: {{ user.last_name }}</b-list-group-item>
            <b-list-group-item>Last Address: {{ user.last_address }}</b-list-group-item>
        </b-list-group>
        <b-card-body>
            <a href="#"
               class="card-link">Edit</a>
            <a href="#"
               class="card-link">Change Password</a>
        </b-card-body>
    </b-card>
  </div>     
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters({user: 'User'})
}
</script>

<style scoped>
.profile {
  margin: auto;
  border: 1px solid rgb(78, 99, 110);
  max-width: 20rem;
  margin-top: 20px;
  
}
</style>