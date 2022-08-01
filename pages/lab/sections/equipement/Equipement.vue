<template>
<div class="max-w-5xl mx-auto">
    <h2 class="px-2 py-1 text-md text-gray-300 font-playmegames border-b-2 border-gray-600">EQUIPEMENT</h2>

    <div>
        

        <VueSlickCarousel v-bind="settings" class="max-w-5xl mx-auto font-playmegames text-center">
            <div v-for="(item, index) in $config.devboard.meta" class="dark:bg-gray-900 p-2 border-2 border-gray-800 hover:border-blue-light cursor-grab">
                <div class="flex">
                    <img :src="item.img" class="w-10 mx-auto m-2" alt="">
                </div>
                    <div class="font-medium text-gray-500">
                        {{ item.title }}
                    </div>
                    <div class="mt-1 text-gray-400 sm:mt-0 sm:col-span-2">
                        {{ item.value }}
                    </div>
            </div>
        </VueSlickCarousel>
        <div class="flex justify-between">
            <!-- prev button -->
        <div class="arrow-l">
            <button type="button" class="w-4">
                <img src="/images/pixelart/arrow-l.png" />
            </button>
        </div>
        <!-- next button -->
        <div class="arrow-r">
            <button type="button" class="w-4">
                <img src="/images/pixelart/arrow-r.png" />
            </button>
        </div>
        </div>
        

    </div>

    
</div>
    
</template>

<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
    name: 'Equipement',
    props: {
        equipement: {
            type: Object,
            required: true
        }
    },
    data(){
        return {
            settings: {
                "dots": false,
                "centerMode": false,
                "infinite": true,
                "slidesToShow": 4,
                "slidesToScroll": 1,
                "autoplay": true,
                "autoplaySpeed": 4000,
                "pauseOnDotsHover": true,
                "pauseOnFocus": true,
                "pauseOnHover": true,
                "arrows": false
            }
        }
    },
    mounted(){
        window.onresize = () => {
                if(window.innerWidth < 768){
                    this.settings.slidesToShow = 1;
                }else{
                    this.settings.slidesToShow = 3;
                }
            }
    },
    components: {
        VueSlickCarousel
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

.arrow-l {
    position:relative;
    top: -60px;
    left: -40px;
}

.arrow-r{
    position:relative;
    top: -60px;
    left: 40px;
}

@media only screen and (max-width: 1150px) {
    .arrow-l {
        position:relative;
        top: -65px;
        left: 15px;
    }
    .arrow-r{
    position:relative;
    top: -65px;
    left: -15px;
}
}
</style>