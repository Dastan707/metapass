<template>
<div class="experience">
  <div class="experience-title">
    <h4>Game</h4>
    <h4>Portfolio</h4>
  </div>
  <div class="experience-block">
    <span class="experience-block_title">P2e experience</span>
    <div class="experience-card" v-for="exp in p2e_experience" :key="exp.id">
        <img src="../../assets/expImg.svg" alt="img">
        <p class="experience-card_time">{{exp.playing_time}}</p>
    </div>
  </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'UserExperience',
  computed: {
    ...mapGetters({
      p2e_experience: 'p2e_experience'
    })
  }
}
</script>

<style lang="scss" scoped>
.experience{
    &-title{
        display: flex;
        margin-top: 10px;
    }
    h4{
        color: #fff;
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
    &-block{
        width: 380px;
        height: 240px;
        background: #1E2026;
        box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.1);
        border-radius: 14px;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 35px;
        &_title{
            display: flex;
            align-self: start;
            margin: 15px 0px 10px 30px;
            font-size: 15px;
            font-family: $aven-font-family;
            font-style: normal;
            font-weight: 400;
            color: #fff;
            text-transform: uppercase;
        }
    }
    &-card{
        width: 320px;
        height: 45px;
        background: #272A2E;
        border-radius: 5px;
        margin-top: 7px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 4px 5px 4px 5px;
        p{
            width: 125px;
            height: 30px;
            background: #249BB6;
            border-radius: 5px;
            font-size: 13px;
            font-family: $aven-font-family;
            font-style: normal;
            font-weight: 500;
            color: #fff;
            text-transform: uppercase;
            text-align: center;
            padding-top: 4px;
            margin: 0px;
        }
    }
}
</style>
