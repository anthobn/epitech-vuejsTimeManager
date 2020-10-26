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
  name: 'WorkingTimes',
  methods: {
    ...mapActions(['getWorkingTimes'])
  },
  computed: mapGetters(['workingTimesList']),
  created () {
    this.getWorkingTimes()
  }
}
</script>

<style>
</style>
