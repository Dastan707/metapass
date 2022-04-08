<template>
  <div>
    <div>
      <HeaderTitle />
    </div>
    <router-view />
  </div>
</template>

<script>
import HeaderTitle from 'src/components/HeaderTitle.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  components: { HeaderTitle },
  name: 'MainLayout'
})
</script>
