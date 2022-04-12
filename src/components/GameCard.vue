<template>
  <div class="cards-list">
    <q-card class="card" v-for="game in games" :key="game.id">
      <img src="../assets/card-img.svg">
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
            <p
              class="card-info_stats"
              v-if="item.status == 'positive'"
              v-bind:class="'positive'"
            >
              {{item.num}}
            </p>
            <p
              class="card-info_stats"
              v-else-if="item.status == 'negative'"
              v-bind:class="'negative'"
            >
              {{item.num}}
            </p>
        </div>
      </q-card-section>

    </q-card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'GameCard',
  computed: {
    ...mapGetters({
      games: 'games'
    })
  }
}
</script>

<style lang="scss" scoped>
.cards-list{
    display: flex;
}
.card{
    margin: 20px 15px 0px 15px;
    background-color: #1E2026;
    width: 280px;
    height: 430px;
    border-radius: 10px;
    color: #ffff;

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
        padding: 3px;
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
            padding: 2px 4px 2px 0px;
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
