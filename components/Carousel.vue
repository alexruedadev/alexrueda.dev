<template>
  <div class="max-w-5xl mx-auto my-16">
    <VueSlickCarousel v-bind="settings">
      <div v-for="item in $config.fullstack.languages">
      <div class="flex justify-center">
          <img :src="item.img" class="w-20" alt="">
      </div>
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

  export default {
    name: 'MyComponent',
    components: { VueSlickCarousel },
    data() {
      return {
        settings: {
            "dots": false,
            "arrows": false,
            "infinite": true,
            "initialSlide": 2,
            "speed": 500,
            "slidesToShow": 3,
            "slidesToScroll": 1,
            "swipeToSlide": true
        },
      }
    },

  }
</script>