import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {username: 'Unknown', last_address: '0.0.0.0', first_name: 'unknown', last_name: 'unknown'}
  },
  mutations: {
    addUser (state, user) {
      state.user = user
    },
    clearUser (state) {
      state.user = {username: 'Unknown', last_address: '0.0.0.0', first_name: 'unknown', last_name: 'unknown'}
    }
  },
  actions: {
    populateUser (context) {
      axios.get('/api/v1/user/profile')
      .then((response) => {
        if (response.data.status === 'OK') {
          context.commit('addUser', response.data.user)
        }
      })
      .catch((error) => {
        console.log(error)
      })
    }
  },
  getters: {
    User: state => {
      return state.user
    }
  }
})
