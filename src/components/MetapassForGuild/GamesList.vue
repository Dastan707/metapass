<template>
  <div class="games-list">
      <div class="games-list_item" v-for="game in games" :key="game.id">
          <img src="../../assets/gamesImg.svg" alt="img">
      </div>
  </div>
</template>

<script>
export default {
  name: 'GamesList',
  props: ['games']
}
</script>

<style lang="scss" scoped>
.games-list{
  display: flex;
}
</style>
