<template>
<div>
  <p>
    <router-link to="/player">
      MetaPass for player
    </router-link>
  </p>
  <p>
    <router-link to="/guild">
      MetaPass for guild
    </router-link>
  </p>
</div>
</template>

<script>
export default {
  // name: 'PageName',
  async mounted () {
    await this.$store.dispatch('getUserInfo')
    await this.$store.dispatch('getGamesInfo')
    await this.$store.dispatch('getGuildInfo')
    await this.$store.dispatch('getExperienceInfo')
  }
}
</script>
