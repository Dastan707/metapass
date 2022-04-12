<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App'
})
</script>

<style lang="scss" scoped>
#app{
  background: linear-gradient(180deg, #1A1C1D 0%, #11151D 100%) !important;
}
</style>
