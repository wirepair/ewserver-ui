<template>
<b-container fluid>
  <a-permission></a-permission>
  <b-card-group deck class="mb-3">
  <b-card border-variant="dark"
            header="Permission List"
            class="text-center">
     
  <b-table :sort-by.sync="sortBy"
           :items="roles.permissions"
           :fields="permissionFields">
    <template slot="actions" slot-scope="row">
      <!-- We use @click.stop here to prevent a 'row-clicked' event from also happening -->
      <b-button size="sm" @click.stop="deletePermission(row.item, row.index, $event.target)" variant="danger">
        Delete
      </b-button>
    </template>
  </b-table>
  <hr/>

  <!-- Delete modal -->
  <b-modal id="deletePermissionModal" @ok="handleDelete" @hide="resetDeleteModal" title="Delete Permission">
    <p class="my-4">Are you sure you wish to delete {{modalInfo.content}}?</p>
  </b-modal>
  </b-card>
  </b-card-group>
</b-container>
</template>

<script>
export default {
  props: ['roles'],
  data () {
    return {
      validGroup: null,
      modalInfo: {title: '', content: ''},
      newGroupName: '',
      sortBy: 'subject',
      permissionFields: [
        { key: 'subject', sortable: true },
        { key: 'resource', sortable: true },
        { key: 'action', sortable: true },
        { key: 'actions', label: 'Actions' }
      ],
      items: this.roles.permissions,
      selectedItem: null
    }
  },
  methods: {
    deletePermission (item, button) {
      this.selectedItem = item
      this.modalInfo.content = item.subject
      this.$root.$emit('bv::show::modal', 'deletePermissionModal', button)
    },
    handleDelete () {
      this.$store.dispatch('deletePermission', this.selectedItem)
    },
    resetDeleteModal () {
      this.modalInfo.content = ''
      this.selectedItem = null
    }
  }
}
</script>

<style scoped>
.newGroup {
  width: 50%;
  left: 50%;
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>