<template>
  <b-modal id="addUserModal" @hide="resetAddUserModal" title="Add New User">
    <b-form>
      <b-form-group id="usernameGroup"
                    label="Username:"
                    label-for="username">
        <b-form-input id="username"
                      type="text"
                      :state="validLogin"
                      v-model="newUser.username"
                      required
                      placeholder="Enter username">
        </b-form-input>
      </b-form-group>

      <b-form-group id="passwordGroup"
                    label="Password:"
                    label-for="password">
        <b-form-input id="password"
                      type="password"
                      :state="validLogin"
                      v-model="newUser.password"
                      required
                      placeholder="Enter password">
        </b-form-input>
      </b-form-group>

      <b-form-group id="firstNameGroup"
                    label="First Name:"
                    label-for="first_name">
        <b-form-input id="first_name"
                      type="text"
                      v-model="newUser.first_name"
                      placeholder="Enter first name">
        </b-form-input>
      </b-form-group>

      <b-form-group id="lastNameGroup"
                    label="Last Name:"
                    label-for="last_name">
        <b-form-input id="last_name"
                      type="text"
                      v-model="newUser.last_name"
                      placeholder="Enter last name">
        </b-form-input>
        <b-form-group id="roleGroup"
                    label="Role:"
                    label-for="roles">
        <b-form-select v-model="selected" :options="roles" class="mb-3">
          <template slot="first">
            <option :value="null" disabled>-- Please select a role --</option>
          </template>
        </b-form-select>
        </b-form-group>
        <b-form-invalid-feedback>blah</b-form-invalid-feedback>
      </b-form-group>
    </b-form>
  </b-modal>
</template>

<script>
export default {
  props: ['roles'],
  data () {
    return {
      newUser: {username: '', password: '', first_name: '', last_name: '', role: ''},
      validLogin: null,
      selected: null,
      error: null
    }
  },
  methods: {
    resetAddUserModal () {
      this.newUser = {username: '', password: '', first_name: '', last_name: '', role: ''}
    }
  }
}
</script>