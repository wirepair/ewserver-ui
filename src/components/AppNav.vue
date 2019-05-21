<template>
<b-navbar toggleable="md" class="navbar" type="dark">

  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

  <b-navbar-brand href="#">EWServer UI</b-navbar-brand>

  <b-collapse is-nav id="nav_collapse">

    <!-- Right aligned nav items -->
    <b-navbar-nav class="ml-auto">
      <b-nav-item-dropdown right>
        <!-- Using button-content slot -->
        <template slot="button-content">
          <em>{{ user.username }}</em>
        </template>
        <b-dropdown-item :user="user" href="#/Profile">Profile</b-dropdown-item>
        <b-dropdown-item href="#/Admin">Admin</b-dropdown-item>
        <b-dropdown-item href="/logout">Signout</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>

  </b-collapse>
</b-navbar>
</template>

<script>
export default {
  props: [
    'user'
  ]
}
</script>

<style scoped>
.navbar {
  background-color: rgb(78, 99, 110);
}
</style>