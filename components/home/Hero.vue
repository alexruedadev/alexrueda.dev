<template>
  <div id="section" class="max-w-5xl mx-auto py-10 lg:grid lg:grid-cols-12">
      <!-- avatar -->
      <div class="lg:col-span-6 grid justify-center self-center">
        <img class="sm:h-52 h-52" :src="$config.image" :alt="$config.name"/>
      </div>

      <!-- title & description -->
      <div class="lg:col-span-6 text-center lg:text-left p-10 lg:p-0">
          <!-- title -->
          <h1 class="text-4xl md:text-2x1 lg:text-3x1 xl:text-2x1 font-playmegames tracking-wide ">
            <span class="text-gray-200">{{ $t('hero.friendlyNeighborhood') }}</span>
            <div class="pt-2">
              <vue-typer :text="$t('hero.words')"></vue-typer>
            </div>
          </h1>
          <!-- buttons -->
          <div class="flex mx-auto my-10 text-md justify-center lg:justify-start">
            <PixelButton img="images/pixelart/github.png" name="Github" link="projects" />
            <PixelButton img="images/pixelart/plaintext.png" name="Resume" link="resume" />
          </div>
          <!-- description -->
          <p 
          v-html="$t('hero.description')" 
          class="text-gray-400 dark:text-gray-200 text-lg text-justify max-w-lg mx-auto font-playmegames lg:pr-10">
          </p>
      </div>
  </div>
</template>

<script>

import PixelButton from '~/pages/lab/components/pixelbutton/PixelButton.vue'

export default {
    data() {
        return {};
    },
    comments: { PixelButton },
    components: { PixelButton }
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
