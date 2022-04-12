<template>
    <q-carousel
      animated
      v-model="slide"
      infinite
      :autoplay="autoplay"
      class="carousel"
    >
      <q-carousel-slide :name="1" img-src="../assets/carousel.jpg" />
      <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg" />
      <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/mountains.jpg" />

    </q-carousel>
    <div class="carousel-arrows">
        <p class="carousel-arrows_item"></p>
        <p class="carousel-arrows_item"></p>
        <p class="carousel-arrows_item"></p>
    </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'CarouselBar',
  setup () {
    return {
      slide: ref(1),
      autoplay: ref(true)
    }
  }
}
</script>

<style lang="scss" scoped>
.carousel{
    width: 100%;
    height: 270px;
    border-radius: 10px;
    &-arrows{
        display: flex;
        justify-content: flex-end;
        margin-top: 10px;
        &_item{
            width: 50px;
            height: 5px;
            background-color: #878B90;
            border-radius: 10px;
            margin-right: 10px;
            display: flex;
            align-items: flex-end;
        }
        &_item:first-child{
            width: 90px;
            height: 5px;
            background-color: #249BB6;
            border-radius: 10px;
        }
    }
}

</style>
