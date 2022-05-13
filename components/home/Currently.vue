<template>
  <main id="liner" class=" relative overflow-hidden mx-auto py-8 max-w-7xl border-l border-r border-dashed">
    <h2 id="section-title" data-aos="zoom-in" class="text-gray-900 dark:text-gray-200 text-center py-2 text-3xl leading-8 font-extrabold tracking-tight">
      {{ $t('currently.header') }}
    </h2>
    <div class="lg:grid lg:grid-cols-12">
      <!-- studing -->
      <div id="liner" class="px-5 lg:col-span-6 lg:border-r lg:border-dashed w-full sm:mx-auto flex flex-1 rounded-lg sm:overflow-hidden">

        <div class="max-w-prose mx-auto pb-4 lg:text-right text-center">
          <!-- <p v-html="$t('currently.studing.upheader')" data-aos="zoom-in" id="section-subtitle" class="text-xs leading-6 font-semibold tracking-wide lowercase">
      
          </p> -->
          <a data-aos="zoom-in" id="section-title" class="text-3xl font-extrabold tracking-tight">
            {{ $t('currently.studing.header') }}
          </a>
          <p v-html="$t('currently.studing.description')" data-aos="zoom-in" id="section-desc" class="my-8 text-base text-gray-300 sm:mt-5 text-left lg:text-right"></p>

          <div id="study-card" data-aos="zoom-in" v-for="(item, index) in $config.studing.courses" :class="index%2 === 0 ? 'group p-2 bg-gray-900 rounded-md flex-1 flex flex-row justify-between' : 'group p-2 bg-gray-800 rounded-md flex-1 flex flex-row justify-between'">

            <div class="flex-1 flex flex-col justify-between">
              <!-- info -->
              <a :href="[item.url]">
                <div id="course-info" class="flex py-2 gap-4 sm:px-6">
                  <img :src="[item.icon]" class="w-5 h-5 flex-shrink-0" alt="">
                  <dt class="text-sm leading-2 font-medium text-gray-200 group-hover:text-gray-400 transform duration-300">
                    {{ item.title }}
                  </dt>
                  <dt class="mt-1 text-sm leading-2 text-gray-400 sm:mt-0 sm:col-span-2">
                    from {{ item.from }}
                  </dt>
                </div>
                <!-- progress bar -->
                <div class="progress-bar">
                  <div class="progress-line" :style="item.progress"></div>
                </div>
              </a>
            </div>
            <!-- arrow -->
            <div class="m-auto mr-3">
              <a :href="[item.url]">
                <svg class="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
          <!-- end of study card -->
        </div>
      </div>

            <!-- Working -->
            <div class="mt-8 px-5 sm:mt-16 lg:mt-0 lg:col-span-6">

                  <div class="max-w-prose mx-auto pb-4 text-left">
                    
                    <a data-aos="zoom-in" id="section-title" :href="`https://github.com/${$config.social.github}`" target="_blank" rel="noreferrer" class="mt-2 text-3xl hover:text-hot-pink leading-8 font-extrabold tracking-tight text-gray-500">
                      {{ $t('currently.working.header') }}
                    </a>
                    <!-- <p data-aos="zoom-in" id="section-subtitle" class="text-xs leading-6 font-semibold tracking-wide lowercase">
                      {{ $t('currently.working.upheader') }}
                    </p> -->
                    <p data-aos="zoom-in" id= "section-desc" class="my-8 text-base sm:mt-5">
                      {{ $t('currently.working.description') }}
                    </p>
                </div>
                
                <!-- project card -->
                <div class="flex-1 bg-gray-900 p-5 flex flex-row justify-between rounded-md max-w-prose mx-auto">
                  <div class="flex-1 flex flex-col justify-between">
                    <div>
                      <div class="text-xs font-medium text-hot-pink hover:text-hot-pink">
                      <p class="text-hot-pink">
                        {{ $t('currently.working.project.techs') }}
                      </p>
                    </div> 
                    <a href="" class="group">
                      <h3 class="mt-0.5 group-hover:text-indigo-500 text-md leading-7 font-semibold text-gray-200">
                        {{ $t('currently.working.project.title') }}
                      </h3>
                      <p class="text-xs text-gray-400">
                        {{ $t('currently.working.project.description') }}
                      </p>
                    </a>
                  </div> 
                  <div class="flex mt-2 space-x-2 flex-row">
                    <a target="_blank" rel="noreferrer" :href="$t('currently.working.project.url')" class="hover:text-indigo-500 text-gray-600">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5">
                      <path fill-rule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clip-rule="evenodd"></path></svg>
                    </a>
                    <a target="_blank" rel="noreferrer" :href="$t('currently.working.project.github')" class="hover:text-indigo-500 text-gray-600">
                      <span class="sr-only">
                        GitHub
                      </span> 
                      <svg aria-hidden="true" fill="currentColor" viewBox="0 0 24 24" class="h-5 w-5"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path></svg>
                    </a>
                  </div>
                </div> 
                <div class="bg-gray-300 dark:bg-gray-800 rounded-md m-auto p-3">
                  <img src="/images/discord-bot.png" alt="logo" class="h-16 rounded-md">
                </div>
              </div>
                <!-- end of project card -->
                <!-- Button to projects -->
                <div class="pt-10 px-4 sm:px-6 md:max-w-2xl md:mx-auto lg:col-span-6 text-center sm:text-left">
                    <nuxt-link :to="localePath('/uses')" class="group inline-flex hover:bg-black items-center bg-gray-700 text-white dark:bg-gray-900 rounded-full p-0.5 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200">
                    <span id="button-slim" class="px-3 py-0.5 text-white text-xs font-semibold leading-5 tracking-wide rounded-full">{{$t('button.projects')}}</span>
                    <span class="ml-4 text-xs">{{$t('button.action')}}</span>
                    <svg class="transition duration-500 transform block group-hover:rotate-180 hover-arrow ml-2 w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                    </svg>
                    </nuxt-link>
                </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {}
</script>

<style scoped>

.progress-bar {
  @apply w-5/6 md:w-2/3 my-3 mx-3 bg-gray-200 rounded-full h-1.5 dark:bg-gray-700
}
.progress-line {
  @apply bg-gradient-to-r from-indigo-500 to-green-500 h-1.5 rounded-full
}

.arrow {
  @apply transition duration-500 transform group-hover:rotate-180 ml-2 w-5 h-5 text-gray-400
}

</style>
