<template>
  <div class="app">
    <SelectUser />
    <AddUser />
    <User />
  </div>
</template>

<script>
import AddUser from '../src/components/AddUser'
import User from '../src/components/User'
import SelectUser from '../src/components/SelectUser'

export default {
  name: 'App',
  components: {
    AddUser,
    User,
    SelectUser
  }
}
</script>

<style>
  .app {
    max-width: 100%;
    padding-top: 2em;
    text-align: left;
  }
</style>
