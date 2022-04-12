<template>
  <div class="main">
    <div class="main-icons">
        <img src="../assets/games-icon.svg" alt="icon">
        <img src="../assets/coin-icon.svg" alt="icon">
        <img src="../assets/message-icon.svg" alt="icon">
    </div>
    <div class="main-user">
      <UserInfo />
    </div>
    <div class="main-right_bar">
    <div class="main-carousel">
      <CarouselBar />
    </div>
    <div class="main-select">
      <h4>Game</h4>
      <h4>Portfolio</h4>
      <div class="main-select_arrows">
        <img @click="leftArrow" src="../assets/arrow-left.svg" alt="arrowLeft">
        <img src="../assets/arrow-right.svg" alt="arrowRight">
      </div>
    </div>
    <div class="main-cards">
      <GameCard />
    </div>
    </div>
  </div>
</template>

<script>
import CarouselBar from 'src/components/CarouselBar.vue'
import GameCard from 'src/components/GameCard.vue'
import UserInfo from 'src/components/UserInfo.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
    UserInfo,
    CarouselBar,
    GameCard
  },
  name: 'IndexPage',
  methods: {
    leftArrow () {
      console.log('hello')
    }
  },
  async mounted () {
    await this.$store.dispatch('getUserInfo')
    await this.$store.dispatch('getGamesInfo')
  }
})
</script>
<style lang="scss" scoped>
.main{
  display: flex;
  padding: 0px 0px 20px 30px;
  &-icons{
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin: 0px 20px 0px 0px;
    img{
      margin: 10px 10px 10px 0px;
      width: 40px;
      height: 40px;
      border: 1px solid #fff;
      border-radius: 5px;
      padding: 5px;
    }
  }
  &-right_bar{
    margin-left: 30px;
  }
  &-carousel{
    width: 850px;
  }
  &-select{
    color: #ffff;
    display: flex;
    align-items: center;
    margin-top: 10px;
    h4{
      margin: 0px 0px 0px 10px;
      font-family: $aven-font-family;
      font-style: normal;
      font-weight: 700;
    }
    h4:nth-child(2){
      color: #BC1F6F;
      filter: drop-shadow(0 0 0.75rem #BC1F6F);
    }
    &_arrows{
      margin-left: 20px;
      display: flex;
      align-items: center;
      img{
        width: 25px;
        margin-left: 10px;
      }
    }
  }
}
</style>
