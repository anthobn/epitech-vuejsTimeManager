<template>
  <div>
  </div>
</template>

<script>
import {
  mapGetters,
  mapActions
} from 'vuex'

export default {
  name: 'WorkingTime',
  methods: {
    ...mapActions(['createWorkingTime', 'updateWorkingTime', 'deleteUser'])
  },
  computed: mapGetters(['workingTimeList']),
  created () {

  }
}
</script>

<style>
</style>
