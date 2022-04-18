<template>
<div class="player">
<div>
  <HeaderTitle />
</div>
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
    <div class="main-cards">
      <GameCard />
    </div>
  <div class="content"></div>
  </div>
 </div>
 </div>
</template>

<script>
import CarouselBar from 'src/components/MetapassForPlayer/CarouselBar.vue'
import GameCard from 'src/components/MetapassForPlayer/GameCard.vue'
import HeaderTitle from 'src/components/HeaderTitle.vue'
import UserInfo from 'src/components/MetapassForPlayer/UserInfo.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MetaPassPlayer',
  components: {
    UserInfo,
    CarouselBar,
    GameCard,
    HeaderTitle
  }
})
</script>
<style lang="scss" scoped>
.player{
  background: linear-gradient(180deg, #1A1C1D 0%, #11151D 100%);
}
.content{
  background: linear-gradient(90deg, #12151D 0%, rgba(18, 21, 29, 0) 100%);
  position: absolute;
  width: 170px;
  height: 450px;
  z-index: 1;
  left: 372px;
  top: 510px;
}
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
  // &-cards{
  //   overflow: hidden;
  // }
}
</style>
