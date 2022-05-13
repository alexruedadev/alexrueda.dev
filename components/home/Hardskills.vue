<template>
    <div>

    <div id="liner" class="border-t border-b border-dashed">
        <div id="liner" data-aos="fade-up" class="max-w-7xl mx-auto border-l border-dashed border-r p-8">
            <!-- Title and Subtitle -->
            <div class="max-w-prose text-center mx-auto py-4 pb-10">
                <h2 id="section-title" class="dark:text-gray-200 text-3xl leading-8 font-extrabold tracking-tight m-auto py-5 sm:py-0">
                    {{ $t('hardskills.header') }}
                </h2>
                <!-- <p id="section-subtitle" class="text-xs leading-6 font-semibold tracking-wide lowercase">
                    {{ $t('hardskills.subtext') }}
                </p> -->
                <p v-html="$t('hardskills.description')" id="section-desc" class="mt-3 text-left lg:text-center text-base sm:mt-5">
                </p>
            </div>

            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <!-- Stats -->
                <div v-for="item in mostUsed" data-aos="zoom-in" class="w-full sm:mx-auto bg-gray-900 shadow-md rounded-md overflow-hidden sm:rounded-lg hover:border-double transition duration-1000">
                    <div class="px-4 py-5 flex flex-row border-b border-green-400 sm:px-6"> <!-- Bottom border color -->
                    <div class="w-full">
                        <dl>
                            <dt class="text-sm leading-6 font-normal text-hot-pink">
                                <div class="flex flex-row">
                                        <cite class="flex items-center rounded-b-lg not-italic">
                                        <div class=" rounded-full mr-4">
                                            <img class="rounded-md h-12 w-12" :src="$config.skills.languages[item.name].img">
                                        </div>
                                        <span class="text-gray-400 font-semibold py-2">
                                        <strong class="text-gray-700 dark:text-gray-200 font-semibold">{{item.name}}</strong>
                                        {{$config.skills.languages[item.name].abr}}
                                        </span>
                                        </cite>
                                </div>
                            </dt>
                        </dl>
                    </div>
                    </div>
                    <div>
                    <dl>
                        <div class="px-4 py-5 grid grid-cols-2 sm:gap-4 sm:px-6 bg-gray-800">
                        <dt class="text-sm leading-5 font-medium text-gray-500">
                            Total EXP
                        </dt>
                        <dt class="text-sm leading-5 font-medium text-gray-500 text-center">
                            <div class="inline-flex items-baseline px-2.5 rounded-full text-sm font-medium leading-5 bg-gray-800 text-green-400 lg:mt-0">
                                <svg class="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                                </svg>
                                <span class="sr-only">
                                Increased by
                                </span>
                                {{ item.xps }}
                            </div>
                        </dt>
                        </div>
                    </dl>
                    </div>
                </div>
                </div>
                <!-- Button to Stats --> 
                <div class="pb-7 pt-10 px-4 sm:px-6 md:max-w-2xl md:mx-auto lg:col-span-6 text-center">
                    <nuxt-link :to="localePath('/uses')" class="group inline-flex hover:bg-black items-center bg-gray-700 text-white dark:bg-gray-900 rounded-full p-0.5 pr-2 hover:text-gray-200">
                    <span id="button-slim" class="px-3 py-1 sm:py-0.5 text-sm sm:text-xs">{{$t('button.stats')}}</span>
                    <span class="ml-4 text-xs">{{$t('button.action')}}</span>
                    <svg class="transition duration-500 transform block group-hover:rotate-180 hover-arrow ml-2 w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                    </svg>
                    </nuxt-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

  data() {
    return {
      totalXP: 0,
      newXP: 0,
      level: 0,
      jsXP: 0,
      vueXP: 0,
      htmlXP: 0,
      cssXP: 0,
      languages: '',
      mostUsed: []
    }
  },
  methods: {
    sortLanguagesByXp({languages}){
    let result = []
    const orderedLangs = Object.values(languages).sort((a,b)  => b.xps - a.xps)

    for(const value in orderedLangs){
        for (const key in languages) {
            if(languages[key] == orderedLangs[value]){
                result.push({name:key, new_xps:orderedLangs[value].new_xps, xps:orderedLangs[value].xps})
            }
        }
    }
    return result
    },
    /**
     * Sort the array size of languages.
     * @param {*} number Number of languages that wants to return.
     * @param {*} array All laguages getted by codestats.net
     */
    sortSizeTo(number,array){
        let result = []
        for (let i = 0; i < number; i++) {
            result[i] = array[i]
        }
        return this.mostUsed = result
    },
  },
  mounted() {
    fetch(`https://codestats.net/api/users/${this.$config.social.codestats}`)
      .then(resp => resp.json())
      .then(data => {
        this.sortSizeTo(4, this.sortLanguagesByXp(data))
      })
      .catch(err => {
        console.error(err);
      })
  }
}
</script>

<style scoped>

</style>
