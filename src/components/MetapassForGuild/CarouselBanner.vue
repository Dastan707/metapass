<template>
  <q-carousel
      animated
      v-model="slide"
      infinite
      :autoplay="autoplay"
      class="carousel"
    >
      <q-carousel-slide :name="1" img-src="../../assets/novaBanner.svg" />
      <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg" />
      <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/mountains.jpg" />

    </q-carousel>
    <div class="carousel-arrows">
        <p class="carousel-arrows_item" id="one"></p>
        <p class="carousel-arrows_item" id="two"></p>
        <p class="carousel-arrows_item" id="three"></p>
    </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'CarouselBanner',
  setup () {
    return {
      slide: ref(1),
      autoplay: ref(true)
    }
  },
  mounted () {
    const elementOne = document.getElementById('one')
    if (this.slide === 1) {
      elementOne.classList.add('active')
    }
  },
  updated () {
    const elementOne = document.getElementById('one')
    const elementTwo = document.getElementById('two')
    const elementThree = document.getElementById('three')
    if (this.slide === 1) {
      elementThree.classList.remove('active')
      elementOne.classList.add('active')
    } else if (this.slide === 2) {
      elementOne.classList.remove('active')
      elementTwo.classList.add('active')
    } else if (this.slide === 3) {
      elementTwo.classList.remove('active')
      elementThree.classList.add('active')
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
        justify-content: center;
        margin-top: 10px;
        &_item{
            width: 50px;
            height: 5px;
            background-color: #878B90;
            border-radius: 10px;
            margin-right: 10px;
            display: flex;
            justify-content: center;
        }
    }
}
.active{
  width: 120px;
  height: 5px;
  background-color: #249BB6;
  border-radius: 10px;
  filter: drop-shadow(0 0 0.40rem #249BB6);
}
</style>
