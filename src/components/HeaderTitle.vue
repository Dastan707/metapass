<template>
  <div class="header">
      <div class="header-title">
          <h4>meta<span>pass</span></h4>
      </div>
      <div class="header-exit">
        <q-icon name="remove_circle_outline" color="red" size="40px" />
      </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderTitle'
}
</script>

<style lang="scss" scoped>
.header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 30px;
  &-title{
      h4{
        color: #FFFFFF;
        font-family: $aven-font-family;
        font-style: normal;
        font-weight: 700;
        span{
          font-weight: 100;
        }
      }
  }
}
</style>
