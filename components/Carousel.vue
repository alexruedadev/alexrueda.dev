<template>
  <div class="max-w-5xl mx-auto my-16">
    <VueSlickCarousel v-bind="settings">
      <div v-for="item in $config.fullstack.languages">
      <div class="flex justify-center">
          <img :src="item.img" class="w-14" alt="">
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
            "arrows": false,
            "centerMode": true,
            "centerPadding": "20px",
            "focusOnSelect": true,
            "infinite": true,
            "slidesToShow": 3,
            "speed": 500,
            "autoplay": true,
            "autoplaySpeed": 5000,
        },
      }
    },

  }
</script>