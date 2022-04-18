<template>
  <div class="features">
    <div class="features-card" v-for="feature in features" :key="feature.id">
      <img v-if="feature.type == 'Market place'" src="../../assets/cart.svg" alt="">
      <img v-else-if="feature.type == 'Launchpad'" src="../../assets/rocket.svg" alt="">
      <img v-else-if="feature.type == 'Platform'" src="../../assets/layers.svg" alt="">
      <p class="features-card_type">{{feature.type}}</p>
      <p v-if="feature.type == 'Launchpad'" class="button red">Learn more</p>
      <p v-else class="button">Learn more</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UniqueFeatures',
  props: ['features']
}
</script>

<style lang="scss" scoped>
.features{
  display: flex;
    &-card{
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 160px;
      height: 160px;
      background: #1E2026;
      box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.15);
      border-radius: 12px;
      margin: 0px 5px 0px 5px;
      padding: 25px 0px 0px 5px;
      img{
        width: 50px;
        height: 50px;
        margin-bottom: 5px;
      }
      &_type{
        font-family: $stellar-font-family;
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        text-align: center;
        color: #fff;
        text-transform: uppercase;
        margin: 5px 0px 2px 0px;
      }
      .button{
        width: 110px;
        height: 30px;
        background: #1E2026;
        border: 1px solid #249BB6;
        font-family: $stellar-font-family;
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        text-transform: uppercase;
        text-align: center;
        border-radius: 6px;
        padding: 5px;
        color: #249BB6;
      }
      .red{
        border: 1px solid #BC1F6F;
        color: #BC1F6F;
      }
    }
}

</style>
