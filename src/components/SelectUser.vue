<template>
<div id="app">
  <h2> Select the user </h2>

  <!-- Shows a selector of users names from the API list of users-->
  <select name="category_id" @change="onChange ($event)" class="form-control">
    <option v-for="user in usersList" :value="user.id" v-bind:key="user.user_id">{{ user.name }}</option>
  </select>

</div>
</template>

<script>
import {
  mapGetters,
  mapActions
} from 'vuex'

export default {
  name: 'SelectUser',
  data () {
    return {
      name: '',
      email: '',
      user_id: ''
    }
  },
  methods: {
    onChange (event) {
      console.log(event.target.value) // shows the id of the user selected
    },
    ...mapActions(['getUsers'])
  },
  computed: mapGetters(['usersList']),
  created () {
    this.getUsers()
  }
}

</script>
