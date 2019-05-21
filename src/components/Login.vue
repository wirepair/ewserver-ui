<template>
  <div class="wrapped">
    <b-form class="form-signin" @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group id="usernameGroup"
                    label="Username:"
                    label-for="username">
        <b-form-input id="username"
                      type="text"
                      :state="validLogin"
                      v-model="form.username"
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
                      v-model="form.password"
                      required
                      placeholder="Enter password">
        </b-form-input>
        <b-button type="submit" variant="primary">Submit</b-button>
        <b-form-invalid-feedback>Invalid Login</b-form-invalid-feedback>
      </b-form-group>
      
      
    </b-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        username: '',
        password: ''
      },
      validLogin: null,
      show: true
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      console.log(this.form.username + ' ' + this.form.password)
      this.axios.post('/login', {username: this.form.username, password: this.form.password})
      .then((response) => {
        console.log(response.data)
        if (response.data.status !== 'OK') {
          this.validLogin = false
          return
        }
        window.location = '/user/index.html'
      })
      .catch((error) => {
        if (error) {
          this.validLogin = false
        }
      })
    },
    onReset (evt) {
      evt.preventDefault()
      /* Reset our form values */
      this.form.username = ''
      this.form.password = ''
      /* Trick to reset/clear native browser form validation state */
      this.show = false
      this.$nextTick(() => { this.show = true })
    }
  }
}
</script>

<style scoped>
.wrapper {	
  margin-top: 80px;
  margin-bottom: 80px;
}

.invalid-feedback {
    font-size: 16px;
    text-align: left;
}

.form-signin {
  max-width: 380px;
  padding: 15px 35px 45px;
  margin: 0 auto;
  background-color: #fff;
  border: 1px solid rgba(0,0,0,0.1);  
}

input[type="text"] {
  margin-bottom: -1px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

input[type="password"] {
  margin-bottom: 20px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>