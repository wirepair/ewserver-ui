<template>
<b-card-group deck class='mt-3 mb-3'>
  <b-card border-variant='dark'
            header='Add Permissions'>
    <p class='card-text'>
      <b-form @submit="onSubmit" @reset="onReset">
        <b-container fluid>
          <b-row>
            <b-col md='3'>
              <b-input-group prepend='Subject'>
                <b-form-input id='subject'
                              prepend='Subject'
                              type='text'
                              v-model='permission.subject'
                              required
                              placeholder='user'>
                </b-form-input>
              </b-input-group>
              </b-col>
              <b-col md='3'>
                <b-input-group prepend='Resource'>
                  <b-form-input id='resource'
                                type='text'
                                v-model='permission.resource'
                                required
                                placeholder='/'>
                  </b-form-input>
                </b-input-group>
              </b-col>
              <b-col md='3'>
                <multiselect v-model='permission.actions'
                              :multiple='true'
                              placeholder='Select allowed actions...'
                              :options='actions'>
                </multiselect>
              </b-col>
              <b-col md='2'>
                <b-button class='ml-1 px-2' type="submit" variant='primary'>Add Permission</b-button>
                <b-button class='ml-1 px-2' variant='mr-1'>Clear</b-button>
              </b-col>
          </b-row>
        </b-container>
      </b-form>
    </p>
  </b-card>
</b-card-group>
</template>

<script>
import Multiselect from 'vue-multiselect'

export default {
  components: { Multiselect },
  data () {
    return {
      permission: { subject: '', resource: '', actions: [] },
      actions: [
        'ALL',
        'GET',
        'HEAD',
        'OPTIONS',
        'PATCH',
        'POST',
        'PUT',
        'DELETE'
      ]
    }
  },
  methods: {
    onSubmit (evt) {
      console.log('addPermission' + JSON.stringify(this.permission))
      evt.preventDefault()
      this.$store.dispatch('addPermission', this.permission)
    },
    onReset (evt) {
      evt.preventDefault()
      /* Reset our form values */
      this.permission.subject = ''
      this.permission.resource = ''
      this.permission.actions = []
    }
  }
}
</script>

<style src='vue-multiselect/dist/vue-multiselect.min.css'></style>
