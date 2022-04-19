<template>
<div class="nft">
  <div class="nft-title">
    <h4>NFTs</h4>
    <h4>Owned</h4>
    <div class="nft-arrows">
      <img @click="leftArrow" src="../../assets/arrow-left.svg" alt="arrowLeft">
      <img @click="rightArrow" src="../../assets/arrow-right.svg" alt="arrowRight">
    </div>
  </div>
  <div class="nft-list" :style="{ 'margin-left': '-' + (150 * currentSlideIndex) + 'px'}">
      <div class="nft-list_item" v-for="nft in userNft" :key="nft.id">
        <img src="../../assets/nft.svg" alt="nft">
      </div>
  </div>
</div>

</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'UserNFT',
  data () {
    return {
      currentSlideIndex: 0
    }
  },
  methods: {
    leftArrow () {
      if (this.currentSlideIndex > 0) {
        this.currentSlideIndex--
      }
    },
    rightArrow () {
      if (this.currentSlideIndex >= this.userNft.length - 1) {
        console.log(this.currentSlideIndex)
      } else {
        this.currentSlideIndex++
      }
    }
  },
  computed: {
    ...mapGetters({
      userNft: 'userNft'
    })
  }
}
</script>

<style lang="scss" scoped>
.nft{
    display: flex;
    flex-direction: column;
    &-title{
        display: flex;
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
    }
    &-arrows{
        margin-left: 20px;
        display: flex;
        align-items: center;
        img{
            width: 20px;
            margin-left: 10px;
        }
    }
    &-list{
        margin-top: 20px;
        width: 245px;
        display: flex;
        align-self: center;
        transition: all ease .5s;
        &_item{
            margin-right: 20px;
        }
    }
}

</style>
