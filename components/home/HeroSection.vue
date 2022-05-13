<template>
  <div class="relative overflow-hidden">
    <div class="relative">
      <main class="">
        <div id="liner" class="mx-auto py-8 max-w-7xl border-l border-r border-dashed">
          <div data-aos="zoom-in" class="lg:grid lg:grid-cols-12">
            <!-- IMG Container -->
            <div id="liner" class="sm:mt-16 px-5 lg:mt-0 lg:col-span-6 lg:border-r lg:border-dashed">
              <div class="flex-shrink-0 w-full sm:mx-auto flex flex-1 items-center justify-center rounded-lg sm:overflow-hidden">
                <img id="hero-img" class="rounded-lg sm:h-60 h-60 mt-10" :src="$config.image" :alt="$config.name"> <!-- bg-gradient-to-r from-indigo-500 to-blue-500 -->
                <img id="hero-bg" class="sm:h-60 h-60 mt-10" src="/images/shape2-bg.png" alt="">
              </div>
            </div>
            <!-- INFO Container -->
            <div class="pt-8 px-4 sm:px-6 md:max-w-2xl md:mx-auto lg:col-span-6 lg:flex">
              <div class="text-center sm:text-left">
                <!-- to blog Button -->
                <nuxt-link v-if="$config.blog.enabled" :to="localePath('/blog')" class="my-5 lg:m-0 group inline-flex hover:bg-black items-center bg-gray-700 text-white dark:bg-gray-900 rounded-full p-0.5 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200">
                  <span id="button-slim" class="px-3 py-1 sm:py-0.5 leading-5 rounded-full">{{ $t('button.blog') }}</span>
                  <span class="ml-4 text-xs">{{$t('button.action')}}</span>
                  <svg class="transition duration-500 transform block group-hover:rotate-180 hover-arrow ml-2 w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                  </svg>
                </nuxt-link>
                <!-- hero title -->
                <h1 id= "hero-title" class="mt-4 text-2xl md:text-3x1 tracking-tight font-extrabold sm:mt-5 sm:leading-none lg:mt-6 lg:text-3xl xl:text-3xl">
                  <span class="leading-relaxed md:block">{{ $t('hero.friendlyNeighborhood') }}</span>
                  <div>
                    <vue-typer :text="$t('hero.words')"></vue-typer>
                  </div>
                </h1>
                <p v-html="$t('hero.description')" id="section-desc" class="my-5 text-base sm:mt-5 text-left">
                  
                </p>
                <p id="hero-title" class=" px-1  text-sm tracking-wide font-semibold text-left py-3">
                  {{ $t('hero.working.title') }}
                </p>

                <div class="w-full sm:mx-auto lg:ml-0">
                  <div class="flex flex-wrap space-x-1 justify-start space-x-4 md:space-x-10 text-white">
                    <p class="px-3 py-0.5 text-xs hover:bg-black bg-gray-600 text-white dark:bg-gray-900 rounded-full p-0.5 pr-2 dark:text-gray-300">
                      {{ $t('hero.working.job') }}
                      </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {
  }
}
</script>

<style scoped>
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

.hover-arrow {
  position: relative;
  stroke-width: 1px;
}

#hero-bg {
  position: relative;
  z-index: 1;
  /* animation: bounce 10s infinite; */
}

#hero-img {
  position: absolute;
  z-index: 2;

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
