<template>
  <div class="guild">
   <div>
     <HeaderTitle />
   </div>
   <div class="main">
     <div class="main-carousel">
      <CarouselBanner />
     </div>
     <div class="main-stats">
       <div class="main-stats_item">
         <p class="item_number">500+</p>
         <p class="item_title">Active scholars</p>
       </div>
        <div class="main-stats_item">
         <p class="item_number">$300</p>
         <p class="item_title">Scholar av. monthly earning</p>
       </div>
        <div class="main-stats_item">
         <p class="item_number">70/30</p>
         <p class="item_title">Profit sharing</p>
       </div>
     </div>
     <div class="main-games">
       <div class="main-games_title">
         <h4>Games</h4>
         <h4>Played</h4>
       </div>
       <div class="arrows">
          <img @click="leftArrow" src="../assets/arrow-left.svg" alt="arrowLeft">
          <img @click="rightArrow" src="../assets/arrow-right.svg" alt="arrowRight">
       </div>
     </div>
     <div class="main-games_list">
      <GamesList :games="guild.games" />
     </div>
     <div class="main-features">
       <div class="main-features_title">
        <h4>Unique</h4>
        <h4>Features</h4>
       </div>
       <div class="arrows">
          <img @click="leftArrow" src="../assets/arrow-left.svg" alt="arrowLeft">
          <img @click="rightArrow" src="../assets/arrow-right.svg" alt="arrowRight">
       </div>
     </div>
     <div class="main-features_list">
       <UniqueFeatures :features="guild.unique_features" />
     </div>
     <div class="main-blockchain">
       <h4>Block<span>chain</span></h4>
       <div class="main-blockchain_list"></div>
     </div>
   </div>
  </div>
</template>

<script>
import HeaderTitle from 'src/components/HeaderTitle.vue'
import CarouselBanner from 'src/components/MetapassForGuild/CarouselBanner.vue'
import { mapGetters } from 'vuex'
import GamesList from 'src/components/MetapassForGuild/GamesList.vue'
import UniqueFeatures from 'src/components/MetapassForGuild/UniqueFeatures.vue'
export default {
  name: 'MetaPassGuild',
  components: {
    HeaderTitle,
    CarouselBanner,
    GamesList,
    UniqueFeatures
  },
  computed: {
    ...mapGetters({
      guild: 'guild'
    })
  }
}
</script>

<style lang="scss" scoped>
.guild{
  background: linear-gradient(180deg, #1A1C1D 0%, #11151D 100%);
}
.main{
    &-carousel{
      width: 850px;
    }
    &-stats{
      width: 850px;
      margin-top: 20px;
      display: flex;
      justify-content: space-between;
      &_item{
        color: #fff;
        width: 250px;
        height: 65px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        background: linear-gradient(99.71deg, #249BB6 42.7%, #026880 100%);
        box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.1);
        border-radius: 12px;
        padding-top: 12px;
        .item_number{
          font-family: $aven-font-family;
          font-style: normal;
          font-weight: 700;
          font-size: 28px;
        }
        .item_title{
          width: 120px;
          font-family: $stellar-font-family;
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          text-transform: uppercase;
          margin-top: 7px;
          text-align: center;
        }
      }
      &_item:nth-child(2){
        background: linear-gradient(99.8deg, #BC1F6F 42.64%, #91023E 100%);
      }
      &_item:nth-child(3){
        background: linear-gradient(99.71deg, #9300FE 42.7%, #6504AB 100%);
        .item_title{
          width: 80px;
        }
      }
    }
    &-games{
      width: 850px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #fff;
      margin-top: 30px;
      &_title{
        display: flex;
      }
    }
    .arrows{
        img{
          width: 20px;
        }
        img:first-child{
          margin-right: 12px;
        }
      }
    h4{
      font-family: $aven-font-family;
      font-style: normal;
      font-weight: 700;
      font-size: 28px;
      margin: 0px;
    }
    h4:nth-child(2){
      color: #BC1F6F;
      filter: drop-shadow(0 0 0.75rem #BC1F6F);
      margin-left: 7px;
    }
    &-features{
      width: 300px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 20px;
      &_title{
        display: flex;
        color: #fff;
      }
      img{
        margin-top: 10px;
      }
    }
    &-blockchain{
      h4{
        color: #fff;
      }
      span{
        color: #BC1F6F;
        filter: drop-shadow(0 0 0.45rem #BC1F6F);
        font-weight: 100;
      }
    }
}
</style>
