<template>
  <div>
    <b-table :sort-by.sync="sortBy"
             :sort-desc.sync="sortDesc"
             :items="users"
             :fields="fields">
      <template slot="actions" slot-scope="row">
        <!-- We use @click.stop here to prevent a 'row-clicked' event from also happening -->
        <b-button size="sm" @click.stop="editUser(row.item, row.index, $event.target)" class="mr-1">
          Edit
        </b-button>
        <b-button size="sm" @click.stop="changePassword(row.item, $event.target)">
          Change Password
        </b-button>
        <b-button size="sm" @click.stop="deleteUser(row.item, $event.target)" variant="danger">
          Delete
        </b-button>
      </template>
    </b-table>
    <hr>
    <b-button class="right" @click="addUser($event.target)" >Add User</b-button>
  

    <!-- Edit modal -->
    <b-modal id="editModal" @hide="resetEditModal" :title="modalInfo.title">
      <p class="my-4">Hello from modal!</p>
    </b-modal>

    <!-- Delete modal -->
    <b-modal id="deleteModal" @hide="resetDeleteModal" :title="modalInfo.title">
      <p class="my-4">Hello from modal!</p>
    </b-modal>

    <!-- Change Password modal -->
    <b-modal id="changePasswordModal" @hide="resetChangePasswordModal" :title="modalInfo.title">
      <p class="my-4">Hello from modal!</p>
    </b-modal>

    <!-- Add User modal -->
    <a-adduser :roles="roles"></a-adduser>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters({users: 'Users'}),
  created: function () {
    this.$store.dispatch('populateUsers')
  },
  props: ['roles'],
  data () {
    return {
      sortBy: 'username',
      sortDesc: false,
      fields: [
        { key: 'username', sortable: true },
        { key: 'first_name', sortable: true },
        { key: 'last_name', sortable: true },
        { key: 'last_address', sortable: true },
        { key: 'actions', label: 'Actions' }
      ],
      items: this.users,
      modalInfo: { title: '', content: '' }
    }
  },
  methods: {
    editUser (item, index, button) {
      this.modalInfo.title = `Row index: ${index}`
      this.modalInfo.content = JSON.stringify(item, null, 2)
      this.$root.$emit('bv::show::modal', 'editModal', button)
    },
    changePassword (item, button) {
      this.$root.$emit('bv::show::modal', 'changePasswordModal', button)
    },
    deleteUser (item, button) {
      this.$root.$emit('bv::show::modal', 'deleteModal', button)
    },
    addUser (button) {
      this.$root.$emit('bv::show::modal', 'addUserModal', button)
    },
    resetEditModal () {

    },
    resetDeleteModal () {

    },
    resetChangePasswordModal () {

    }
  }
}
</script>

<style scoped>
.right {
  position: absolute;
  right: 0px;
  text-align: left;
}
</style>