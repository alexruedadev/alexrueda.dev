<template>
    <div id="liner" class="max-w-7xl mx-auto border-l border-r border-dashed mt-10">
        <div>
        <!-- avatar -->
        <div class="sm:flex grid justify-center">
        <!-- tools -->
        <div data-aos="zoom-in" v-for="(item, index, n) in $config.fullstack[tech]" id="tools" class="sm:flex-col flex-row m-2 text-center">
            <ul id="tool-logos">
                <li>
                    <button :class="n == 0 ? 'active-tool' : 'inactive'" type="button">
                      <img :src="item.img" class="h-10 w-10 mx-5 hover:scale-125" alt="">
                      <!-- <p class="font-vt text-gray-300 pt-3">{{index}}</p> -->
                    </button>
                </li>
            </ul>

            <div class="m-5">
                <p class="text-sm text-gray-500 dark:text-gray-400">{{ $config.fullstack[tech][tool].desc }}</p>
            </div>

        </div>
        <!-- tools description -->
        
      </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
    return {
      tech: 'languages',
      tool: 'html'
    }
  }
}
</script>

<style>

#tools-nav {
  @apply w-full bg-gray-900 rounded-lg my-10 p-3
}

.active-tech {
  @apply dark:bg-gray-900 dark:text-white;
}

.active-tool {
  @apply bg-transparent
}
</style>