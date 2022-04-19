<template>
  <q-layout>
    <q-page-container>
      <q-page padding>
      <router-view />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MainLayout'
})
</script>
