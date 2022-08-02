<template>
  <div class="max-w-5xl mx-auto lg:p-0 sm:p-10 p-5">
        <div data-aos="zoom-in" id="liner" class="p-3 font-playmegames flex border-b-2 border-gray-400">
        <h2 class="text-3xl mx-auto md:mx-10 tracking-wide flex">
            <p class="text-gray-200">Dev</p>
            <span class="text-blue-light">Projects</span>
        </h2>
      </div>
    <div data-aos="zoom-in" class="mt-5 gap-4 grid lg:grid-cols-2 md:px-0">
      <div v-for="(project, index) in projectsByTechs" :key="project.slug">
        <PixelProjectCard v-if="index < 4" data-aos="zoom-in" class="" :project="project" />
      </div>
    </div>
    <div class="mx-auto max-w-5xl flex justify-center my-10">
      
      <button class="relative px-6 py-2 group mr-5 items-center justify-center ">
        <span class="absolute inset-0 w-full h-full transition transform translate-x-1.5 translate-y-1.5 bg-blue-light group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
        <span id="btn-pixel" class="absolute inset-0 w-full h-full border-2 bg-gradient-to-r from-blue-first to-blue-medium border-gray-200 group-hover:bg-blue-medium"></span>
        <div class="flex">
          <span class="relative text-gray-100 group-hover:text-white self-center font-playmegames tracking-wide">All projects</span>
          <img src="images/pixelart/arrow-r.png" class="w-3 h-3 z-0 ml-2 self-center" alt="">
        </div>
      </button>
      
    </div>

  </div>
</template>

<script>
import PixelProjectCard from '~/pages/lab/components/pixelprojectcard/PixelProjectCard.vue'

export default {
    props: {
        projectsByTechs: {
            type: Array,
            required: true
        }
    },
    components: {
        PixelProjectCard
    }
}
</script>

<style scoped>

</style>
