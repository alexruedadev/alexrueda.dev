<template>
  <div id="liner" class="max-w-7xl mx-auto border-l border-r border-dashed">
    <div data-aos="zoom-in" class="lg:grid lg:grid-cols-12">
      <!-- avatar -->
      <div id="liner" class="flex justify-center lg:col-span-6 lg:border-r lg:border-dashed p-10">
        <img class="sm:h-60 h-60" :src="$config.image" :alt="$config.name"/>
      </div>
      <!-- title & description -->
      <div class="lg:col-span-6 p-10 text-center lg:text-left">
          <!-- title -->
          <h1 class="text-3xl md:text-2x1 lg:text-3x1 xl:text-2x1 font-pixelated_bold">
            <span>{{ $t('hero.friendlyNeighborhood') }}</span>
            <div class="pt-2">
              <vue-typer :text="$t('hero.words')"></vue-typer>
            </div>
          </h1>
          <p 
          v-html="$t('hero.description')" 
          class="text-gray-400 dark:text-gray-300 text-base text-left mt-20">
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
