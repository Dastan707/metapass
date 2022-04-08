<template>
  <div class="header">
      <div class="header-title">
          <h4><b>meta</b>pass</h4>
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
    h4{
      color: #FFFFFF;
    }
}
</style>
