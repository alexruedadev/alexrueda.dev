<template>
  <div data-aos="zoom-in" class="max-w-5xl lg:mx-auto mb-16 mt-5 mx-10">
    <!-- section title  -->
    <div data-aos="zoom-in" id="liner" class="max-w-5xl p-3 font-playmegames flex border-b-2 border-gray-400">
        <h2 class="text-3xl mx-auto md:mx-10 tracking-wide flex">
            <p class="text-gray-200">Full</p>
            <span class="text-blue-light">Stack</span>
        </h2>
    </div>

    <!-- stack navigation -->
    <VueSlickCarousel class="max-w-xs mx-auto text-center my-5"
      @afterChange = "afterChange"
      :focusOnSelect="true">
      <div id="stack" v-for="(item, name, index) in stack">
        <h3 id="currentStack" class="font-playmegames text-xl tracking-wider font-extralight">{{name}}</h3>
      </div>
    </VueSlickCarousel>

    <!-- techs carousel -->
    <VueSlickCarousel 
      v-bind="settings"
      @init="init"
      @afterChange = "afterChange"
      class="flex cursor-grab justify-items-center "><!-- border-t-2 border-gray-600 -->

      <div id="tech" v-for="(tech, name, index) in $config.stack[currentStack]" class="px-2">
      <div class="flex justify-center bg-gray-900 py-5">
          <img :src="tech.img" class="w-11" alt="">
      </div>
      <div class="flex justify-center bg-gray-700 ">
        <span class="text-lg text-center text-gray-300 font-playmegames">{{name}}</span>
      </div>
      </div>
    </VueSlickCarousel>
    <!-- tech info -->
    <!-- <div class="w-full grid grid-cols-3 px-1">
      <div class="col-start-2 bg-gray-900 h-32 p-5">
        <p id="tech-info" class="text-gray-300 text-md font-playmegames">
          {{currentTechInfo}}
        </p>
      </div>
    </div> -->

  </div>
</template>

<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

  console.log('Se ha ejecutado script')

  export default {
    name: 'MyComponent',
    components: { VueSlickCarousel },
    data() {
      return {
        settings: {
            "arrows": false,
            "centerMode": true,
            "centerPadding": "0px",
            "focusOnSelect": true,
            "infinite": true,
            "slidesToShow": 3,
            "speed": 500,
            "autoplay": true,
            "autoplaySpeed": 5000,
            /* "fade": true, */
        },
        stack: this.$config.stack,
        currentTechInfo: '',
        currentStack: 'languages',
        currentTech: 'JavaScript'
      }
    },
    mounted() {
      console.log('mounted')
      const carouselArrows = document.getElementsByClassName('slick-arrow')
      console.log(carouselArrows)
      carouselArrows.forEach(arrow => {
        arrow.addEventListener('click', () => {
          this.currentStack = document.getElementsByClassName('slick-current')[0]["outerText"]
         /*  this.currentTechInfo = this.$config.stack[this.currentStack][this.currentTech]['info'] */
        })
      })
      /* next_btn.addEventListener('click', () => {
        console.log("Click!")
        this.currentStack = document.getElementsByClassName('slick-current')[0]["outerText"] */
        /* this.currentTechInfo = this.$config.stack[this.currentStack].info 
      })*/
    },
    methods: {

      init() {
        /* const currentTech = document.getElementsByClassName('slick-current')[1]

        console.log(currentTech) */
      console.log('inited!!')
      },
      
      afterChange() {
        this.currentTech = document.getElementsByClassName('slick-current')[1]["outerText"]
        const currentStack = document.getElementsByClassName('slick-current')[0]["outerText"]
        const techInfoElement = document.getElementById('tech-info')

        /* const techInfo = this.$config.stack[currentStack][this.currentTech]['info']
        console.log('ahora es ' + this.currentTech + '!! // Stack: ' + currentStack)
        console.log(techInfo)

        techInfoElement.innerHTML = techInfo */
      }
    }
  }
</script>

<style>

.cursor-grab {
  cursor: move; /* fallback if grab cursor is unsupported */
    cursor: grab;
    cursor: -moz-grab;
    cursor: -webkit-grab
}

.slick-arrow {
  background-color: transparent !important;
}

.slick-current {
  /* transform: scale(1.1); */
  box-shadow: darkcyan 0px 0px 10px;
  transition-duration: 800ms;
}

</style>