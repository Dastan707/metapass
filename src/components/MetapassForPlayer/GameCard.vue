<template>
<div>
<div class="select">
  <h4>Currently</h4>
  <h4>Playing</h4>
  <div class="select_arrows">
    <img @click="leftArrow" src="../../assets/arrow-left.svg" alt="arrowLeft">
    <img @click="rightArrow" src="../../assets/arrow-right.svg" alt="arrowRight">
  </div>
</div>
<div class="cards-list" :style="{ 'margin-left': '-' + (150 * currentSlideIndex) + 'px'}">
    <q-card class="card" v-for="game in games" :key="game.id">
      <img src="../../assets/card-img.svg">
      <q-card-section class="card-section">
        <div class="card-title">{{game.name}}</div>
        <div class="card-info" v-for="item in game.stats" :key="item.id">
            <div class="card-info_name">
            <q-icon
              v-if="item.status == 'positive'"
              name="arrow_circle_up"
              size="15px"
              class="icon-up"
            />
            <q-icon
              v-else-if="item.status == 'negative'"
              name="arrow_circle_down"
              size="15px"
              class="icon-down"
            />
            <p>{{item.title}}</p>
            </div>
            <div
              class="card-info_stats"
              v-if="item.status == 'positive'"
              v-bind:class="'positive'"
            >
              {{item.num}}
            </div>
            <div
              class="card-info_stats"
              v-else-if="item.status == 'negative'"
              v-bind:class="'negative'"
            >
              {{item.num}}
            </div>
        </div>
      </q-card-section>
    </q-card>
  </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'GameCard',
  data () {
    return {
      currentSlideIndex: 1
    }
  },
  methods: {
    leftArrow () {
      if (this.currentSlideIndex > 0) {
        this.currentSlideIndex--
      }
    },
    rightArrow () {
      if (this.currentSlideIndex > this.games.length) {
        console.log(this.currentSlideIndex)
      } else {
        this.currentSlideIndex++
      }
    }
  },
  computed: {
    ...mapGetters({
      games: 'games'
    })
  }
}
</script>

<style lang="scss" scoped>
.select{
    color: #ffff;
    display: flex;
    align-items: center;
    margin-top: 10px;
    h4{
      margin: 0px;
      font-family: $aven-font-family;
      font-style: normal;
      font-weight: 700;
    }
    h4:nth-child(2){
      color: #BC1F6F;
      filter: drop-shadow(0 0 0.75rem #BC1F6F);
      margin-left: 10px;
    }
    &_arrows{
      margin-left: 20px;
      display: flex;
      align-items: center;
      img{
        width: 20px;
        margin-left: 10px;
      }
    }
}
.cards-list{
    display: flex;
    transition: all ease .5s;
    overflow: hidden;
}
.card{
    margin: 35px 15px 0px 0px;
    background-color: #1E2026;
    width: 280px;
    height: 430px;
    border-radius: 10px;
    color: #ffff;
    position: relative;
    p{
       margin: 0;
    }
    &-section{
        display: flex;
        flex-direction: column;
        align-items: center;
        font-family: $stellar-font-family;
        font-style: normal;
    }
    &-title{
        width: 230px;
        height: 30px;
        background: #BC1F6F;
        border-radius: 5px;
        text-transform: uppercase;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 18px;
        font-weight: 400;
    }
    .icon-up{
        color: #249BB6;
        margin-right: 7px;
    }
    .icon-down{
        color: #BC1F6F;
        margin-right: 7px;
    }
    &-info{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 230px;
        margin-top: 10px;
        font-size: 14px;
        &_name{
            display: flex;
            align-items: center;
        }
        &_stats{
            width: 100px;
            height: 25px;
            background-color: #1E2026;
            border-radius: 5px;
            text-align: right;
            padding-right: 4px;
            display: flex;
            align-items: center;
            justify-content: flex-end;
        }
        .negative{
            border: 1px solid #BC1F6F;
        }
        .positive{
            border: 1px solid #249BB6
        }
    }
}
</style>
