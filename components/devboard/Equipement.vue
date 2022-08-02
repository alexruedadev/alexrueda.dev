<template>
<div class="max-w-5xl mx-auto">
                                <!-- info btn -->
                <div class="flex justify-between bg-gray-800 border-b-2 border-gray-600"> <!-- -->
                    <h2 class="pl-3 pt-2 text-md">EQUIPEMENT</h2>
                    <div id="info-btn" class="w-4 h-4 mr-2 self-center">
                        <svg id="info" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                            viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                            <g>
                                <path id="infosvg" d="M483.56,0H28.44C12.69,0,0,12.75,0,28.44v455.11C0,499.25,12.69,512,28.44,512h455.11c15.72,0,28.44-12.75,28.44-28.44
                                    V28.44C512,12.75,499.28,0,483.56,0z M455.11,455.11H56.89V56.89h398.22V455.11z"/>
                                <path id="infosvg" d="M227.56,113.78h56.89v56.89h-56.89V113.78z M227.56,227.56h56.89v170.67h-56.89V227.56z"/>
                            </g>
                        </svg>
                        <div class="hide bg-gray-800 rounded-sm p-5 bg-opacity-90 text-gray-300 mt-1.5">
                            <p v-html="$t('devboard.equipement.info')"></p>
                        </div>
                    </div>
                </div>

    <div>
        

        <VueSlickCarousel ref="carousel" v-bind="settings" class="max-w-5xl mx-auto font-playmegames text-center">
            <div v-for="(item, index) in equipement" class="dark:bg-gray-900 p-2 border-2 border-gray-800 dark:hover:bg-gray-700 cursor-grab">
                <div class="flex">
                    <img :src="item.img" class="md:w-12 w-14 mx-auto m-2" alt="">
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
            <button id="nav-btn" type="button" class="w-4" @click="showPrev">
                <img src="/images/pixelart/arrow-l.png" />
            </button>
        </div>
        <!-- next button -->
        <div class="arrow-r">
            <button id="nav-btn" type="button" class="w-4" @click="showNext">
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
            type: Array,
            required: true
        }
    },
    data(){
        return {
            settings: {
                "dots": false,
                "centerMode": false,
                "infinite": true,
                "slidesToShow": 3,
                "slidesToScroll": 1,
                "autoplay": true,
                "autoplaySpeed": 4000,
                "pauseOnDotsHover": true,
                "pauseOnFocus": true,
                "pauseOnHover": true,
                "arrows": false,
                "swipeToSlide": true
            }
        }
    },
    methods: {
        showNext() {
            this.$refs.carousel.next()
        },
        showPrev() {
            this.$refs.carousel.prev()
      },
    },
    mounted(){
        const arrows = document.getElementById('arrow')

/*         arrows.addEventListener('mouseover', (event) => {
            event.preventDefault();
            return arrows.setAttribute('fill','#0fcbe9')
        });

        arrows.addEventListener('mouseout', (event) => {
            event.preventDefault();
            return arrows.setAttribute('fill','#fefffe')
        });
 */
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

#nav-btn {
    outline:none;
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