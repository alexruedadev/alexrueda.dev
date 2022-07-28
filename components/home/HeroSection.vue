<template>
  <div id="liner" class="max-w-7xl mx-auto border-l border-r">
    <div data-aos="zoom-in" class="lg:grid lg:grid-cols-12 max-w-5xl mx-auto py-10">
      <!-- avatar -->
      <div id="liner" class="grid justify-center lg:col-span-6 py-10 text-center">
        <img class="sm:h-52 h-52" :src="$config.image" :alt="$config.name"/>
        <!-- <span class="font-playmegames text-3xl opacity-50 text-gray-100">@alexruedadev</span> -->
        
      </div>
      <!-- title & description -->
      <div class="lg:col-span-6 text-center lg:text-left pb-10">
          <!-- title -->
          <h1 class="text-4xl md:text-2x1 lg:text-3x1 xl:text-2x1 font-playmegames tracking-wide sm:m-0 m-5">
            <span class="text-gray-200">{{ $t('hero.friendlyNeighborhood') }}</span>
            <div class="pt-2">
              <vue-typer :text="$t('hero.words')"></vue-typer>
            </div>
          </h1>
          <!-- buttons -->
          <div class="flex mx-auto my-14 font-playmegames tracking-wider text-md justify-center md:text-left">
            <button class="relative px-6 py-2 group mr-5 items-center justify-center">
                <span class="absolute inset-0 w-full h-full transition transform translate-x-1.5 translate-y-1.5 bg-blue-medium group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span id="btn-pixel" class="absolute inset-0 w-full h-full bg-blue-first border-2 border-gray-200 group-hover:bg-blue-medium"></span>
                <div class="flex">
                  <span class="relative text-white group-hover:text-white self-center ">Github</span>
                  <img src="images/pixelart/github.png" class="w-7 h-7 z-0 ml-4" alt="">
                </div>
            </button>
            
            <button class="relative px-6 py-2 group">
                <span class="absolute inset-0 w-full h-full transition transform translate-x-1.5 translate-y-1.5 bg-blue-medium group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span id="btn-pixel" class="absolute inset-0 w-full h-full bg-blue-first border-2 border-gray-200"></span>
                <span class="relative text-white group-hover:text-white">Curriculum</span>
            </button>
          </div>
          <!-- description -->
          <p 
          v-html="$t('hero.description')" 
          class="text-gray-400 dark:text-gray-300 text-lg text-left font-playmegames p-10 md:p-14 lg:p-0">
          </p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
    }
  },
}
</script>

<style scoped>

#btn-pixel {
  @apply bg-gradient-to-r from-blue-medium to-blue-first
}

>>> .vue-typer .custom.char {
  @apply text-blue-light;
}
>>> .vue-typer .custom.char.selected {
  @apply bg-blue-medium text-white;
}

>>> .vue-typer .custom.caret {
  width: 4px;
  @apply bg-blue-medium;
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(-5%);
    animationTimingFunction: cubic-bezier(0.4, 0, 1, 1);
  }
  50% {
    transform: translateY(0);
    animationTimingFunction: cubic-bezier(0, 0, 0.2, 1);
  }
}
</style>
