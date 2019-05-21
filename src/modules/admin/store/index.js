import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    errors: [],
    users: [],
    roles: {},
    apiUsers: []
  },
  mutations: {
    addUsers (state, users) {
      state.users = users
    },
    clearUsers (state) {
      state.users = []
    },
    addAPIUsers (state, apiUsers) {
      state.apiUsers = apiUsers
    },
    clearAPIUsers (state) {
      state.apiUsers = []
    },
    addRoles (state, roles) {
      state.roles = roles
    },
    clearRoles (state) {
      state.roles = []
    },
    addError (state, error) {
      if (error === undefined || error === '') {
        error = 'Unknown error occurred.'
      }
      state.errors.push(error)
    },
    popError (state) {
      state.errors.pop()
    }
  },
  actions: {
    populateUsers (context) {
      axios.get('/api/v1/admin/users/list')
      .then((response) => {
        if (response.data.status === 'OK') {
          context.commit('addUsers', response.data.users)
        }
      })
      .catch((error) => {
        context.commit('addError', error)
        setTimeout(() => context.commit('popError'), 10000)
      })
    },
    populateAPIUsers (context) {
      axios.get('/api/v1/admin/api_users/list')
      .then((response) => {
        if (response.data.status === 'OK') {
          context.commit('addAPIUsers', response.data.api_users)
        }
      })
      .catch((error) => {
        context.commit('addError', error.message)
        setTimeout(() => context.commit('popError'), 10000)
      })
    },
    populateRoles (context) {
      axios.get('/api/v1/admin/roles/list')
      .then((response) => {
        if (response.data.status === 'OK') {
          let permissions = []
          for (var entry of response.data.permissions) {
            let permission = {subject: entry[0], resource: entry[1], action: entry[2]}
            permissions.push(permission)
          }
          let roles = {roleNames: response.data.role_names, roleMap: response.data.role_map, permissions: permissions}
          context.commit('addRoles', roles)
          console.log(JSON.stringify(roles))
        }
      })
      .catch((error) => {
        context.commit('addError', error.message)
        setTimeout(() => context.commit('popError'), 3000)
      })
    },
    populateErrors (context, error) {
      context.commit('addError', error.message)
    },
    addPermission (context, permission) {
      axios.put('/api/v1/admin/roles/permissions', permission)
      .then((response) => {
        if (response.data.status === 'OK') {
          context.dispatch('populateRoles')
        } else if (response.data.error !== '') {
          context.commit('addError', response.data.error)
          setTimeout(() => context.commit('popError'), 3000)
        }
      })
      .catch((error) => {
        let msg = error.message
        if (error.response !== undefined && error.response.data !== undefined) {
          msg += ': ' + error.response.data.error
        }
        context.commit('addError', msg)
        console.log(JSON.stringify(error))
        setTimeout(() => context.commit('popError'), 3000)
      })
    },
    deletePermission (context, permission) {
      console.log('deleting permission')
      axios.delete('/api/v1/admin/roles/permissions', permission)
      .then((response) => {
        if (response.data.status === 'OK') {
          context.dispatch('populateRoles')
        } else if (response.data.error !== '') {
          context.commit('addError', response.data.error)
        }
      })
      .catch((error) => {
        let msg = error.message
        if (error.response !== undefined && error.response.data !== undefined) {
          msg += ': ' + error.response.data.error
        }
        context.commit('addError', msg)
        console.log(JSON.stringify(error))
        setTimeout(() => context.commit('popError'), 3000)
      })
    }
  },
  getters: {
    Users: state => {
      return state.users
    },
    APIUsers: state => {
      return state.apiUsers
    },
    Roles: state => {
      return state.roles
    },
    Errors: state => {
      return state.errors
    }
  }
})
