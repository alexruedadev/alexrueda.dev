<template>
<div id="liner" class="bg-gray-100 dark:bg-gray-800 max-w-7xl pb-10 border-r border-l border-dashed mx-auto">
  <div data-aos="fade-up" class="relative max-w-7xl py-6 mx-auto">
    <div class="text-center">
      
      <h2 id="section-title" class="text-2xl tracking-tight font-pixelated">
        {{ $t('uses.header') }}
      </h2>
      <!-- <p v-html="$t('uses.subtext')" class="mt-2 px-2 max-w-2xl mx-auto text-sm leading-7 text-gray-400"></p> -->
    </div>
  </div>
  <div data-aos="zoom-in" class="max-w-4xl mx-4 sm:mx-auto bg-gray-100 dark:bg-gray-900 shadow-md rounded-md overflow-hidden sm:rounded-lg">
    <div v-if="$config.social.codestats" class="px-4 py-5 flex flex-row justify-between border-b-3 border-green-500 sm:px-6"> <!-- Bottom border color -->
      <div class="w-full">
        <a :href="`https://codestats.net/users/${$config.social.codestats}`" target="_blank" rel="noreferrer">
          <dl>
            <div class="flex">
              <img class="w-7 h-7" src="/images/levels/noctis.gif" alt="">
              <dt class="text-sm font-semibold text-gray-700 dark:text-gray-200 ml-2 mt-2">
                  Level {{ level }}
              </dt>
            </div>
            
            <dd class="mt-1 flex justify-between items-baseline md:flex lg:flex">
              <div class="flex items-baseline text-2xl leading-8 font-semibold text-green-400">
                {{ totalXP.toLocaleString() }} XP
                <span class="ml-2 text-sm leading-5 font-medium text-gray-500">
                  from {{ (totalXP - newXP).toLocaleString() }}
                </span>
              </div>
              <div class="inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium leading-5 bg-white dark:bg-gray-800 text-green-400 md:mt-2 lg:mt-0">
                <svg class="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                </svg>
                <span class="sr-only">
                  Increased by
                </span>
                {{ newXP.toLocaleString() }}
              </div>
            </dd>
          </dl>
        </a>
      </div>
    </div>
  </div>
  <!-- equipement -->
  <div class="text-gray-300 mx-4 my-3 max-w-4xl sm:mx-auto flex">
    <img src="/images/resume/sword.webp" class="w-6 mx-3" />
  <p class="font-semibold">Equipment</p>
  </div>
  
  <div class="max-w-4xl mb-4 mx-4 sm:mx-auto shadow-md rounded-md overflow-hidden sm:rounded-lg">
    <div>
      <dl>
        <div v-for="(item, index) in $config.uses.meta" :class="index%2 === 0 ? 'bg-gray-100 dark:bg-gray-900' : 'bg-gray-200 dark:bg-gray-800'" class="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 ">
          <dt class="text-sm leading-5 font-medium text-gray-500">
            {{ item.title }}
          </dt>
          <dd class="mt-1 text-sm leading-5 text-gray-400 sm:mt-0 sm:col-span-2">
            {{ item.value }}
          </dd>
        </div>
      </dl>
    </div>
  </div>
  <!-- skills header -->
 <div class="text-gray-300 mx-4 my-3 max-w-4xl sm:mx-auto flex">
    <img src="/images/stats/diamond.webp" class="w-5 h-5 mx-3" />
    <p class="font-semibold">Daily Quests</p>
  </div>
  <!-- on vacation -->
  <div id="onVacation" class="grid place-items-center hidden" >
    <h2 class="text-2xl tracking-tight font-extrabold text-gray-200">
        today activity not found
      </h2>
      <p class="mt-2 px-2 max-w-2xl mx-auto text-sm leading-7 text-gray-400 pb-3">
        maybe i still look like Homer
      </p>
    <img src="/images/onVacation.gif" alt="" class="rounded-lg justify-center">
  </div>
<!-- codestats -->
  <div data-aos="zoom-in" class="max-w-4xl mx-4 sm:mx-auto bg-gray-100 dark:bg-gray-800 shadow-md rounded-md overflow-hidden sm:rounded-lg">
      <dl>
        <div data-aos="zoom-in" v-for="(item, index) in languages" :class="index%2 === 0 ? 'bg-gray-100 dark:bg-gray-900' : 'bg-gray-200 dark:bg-gray-800'" class="px-4 py-5 grid grid-cols-3 sm:gap-4 sm:px-6">

          <dt class="text-sm leading-5 font-medium text-gray-500 inline-flex align-middle">
            <img class="rounded-md h-7 w-7 mr-3" :src="$config.skills.languages[item.name].img">
            <p class="mt-1">{{ item.name }}</p>
          </dt>
          <dt class="text-sm font-medium text-gray-500 text-center sm:text-left mt-1">
            {{ $config.skills.languages[item.name].activity }}
          </dt> 
          <dt class="text-sm font-medium text-gray-500 text-right lg:mt-1">
              <p class="hidden sm:inline-block">Today XP</p>
              <div class="mt-1 ml-1 inline-flex items-baseline px-2.5 rounded-full text-sm font-medium leading-5 bg-gray-800 text-green-400 lg:mt-0">
                  <svg class="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                  </svg>
                  {{ item.new_xps }} 
              </div>
              
          </dt>
        </div>
      </dl>
  </div>

  <!-- top skills -->
<!-- 
  <div class="text-gray-300 mx-4 my-3 max-w-4xl sm:mx-auto flex">
    <img src="/images/stats/diamond.webp" class="w-5 h-5 mx-3" />
    <p class="font-semibold">Skills</p>
  </div>

  <div data-aos="zoom-in" class="max-w-4xl mx-4 sm:mx-auto bg-gray-100 dark:bg-gray-800 shadow-md rounded-md overflow-hidden sm:rounded-lg border border-gray-900">
      <dl>
        <div data-aos="zoom-in" v-for="(item, index) in skills" :class="index%2 === 0 ? 'bg-gray-100 dark:bg-gray-900' : 'bg-gray-200 dark:bg-gray-800'" class="px-4 py-5 grid grid-cols-2 sm:gap-4 sm:px-6">

          <dt class="text-sm leading-5 font-medium text-gray-500 inline-flex align-middle">
            <img class="rounded-md h-7 w-7 mr-3" :src="$config.skills.languages[item.name].img">
            <p class="mt-1">{{ item.name }}</p>
          </dt>
          <dt class="text-sm font-medium text-gray-500 text-right lg:mt-1">
              <p class="hidden sm:inline-block">Total XP</p>
              <div class="mt-1 ml-1 inline-flex items-baseline px-2.5 rounded-full text-sm font-medium leading-5 bg-gray-800 text-gray-200 lg:mt-0">
                  
                  {{ item.xps }} 
              </div>
              
          </dt>
        </div>
      </dl>
  </div> -->

  <!-- Github Calendar -->
    <div data-aos="zoom-in" class="max-w-7xl mx-auto">
      <div class="max-w-prose content-center mx-auto py-9">
        <a :href="`https://github.com/${$config.social.github}`" target="_blank" rel="noreferrer" class="mt-2 text-3xl hover:text-hot-pink leading-8 font-extrabold tracking-tight text-gray-500"></a>
      </div>
      <div class="calendar max-w-4xl content-center lowercase">
      </div>
    </div>
  <!-- End of Github Calendar -->

</div>
</template>

<script>
import GitHubCalendar from 'github-calendar'
import {
  sortLanguagesByNewExp,
  sortLanguagesByTotalExp,
  getTodayExp,
  shortSizeTo
  } from '/utils/codestats.js';

export default {
  head() {
    return {
      title: `${this.$config.name} | Stats`
    }
  },
  data() {
    return {
      totalXP: 0,
      newXP: 0,
      level: 0,
      languages: [],
      skills: []
    }
  },
  methods: {
    initValues({total_xp, new_xp, languages, dates}) {
      this.totalXP = total_xp;
      this.newXP = new_xp;
      this.level = Math.floor(0.025 * Math.sqrt(total_xp))
      this.languages = this.getTodayExp(this.sortLanguagesByNewExp(languages))
      this.skills = this.sortSizeTo(7,this.sortLanguagesByTotalExp(languages))
    },
    sortLanguagesByNewExp,
    sortLanguagesByTotalExp,
    getTodayExp,
    shortSizeTo,
    onVacation(){
      const onVacation = document.getElementById('onVacation')
      const liner = document.getElementById('activity-liner')
      onVacation.classList.remove('hidden')
      liner.classList.add('hidden')
    }
  },
  mounted() {
    fetch(`https://codestats.net/api/users/${this.$config.social.codestats}`)
      .then(resp => resp.json())
      .then(data => {
        this.initValues(data)
      })
      .catch(err => {
        console.error(err);
      })
       GitHubCalendar(".calendar", this.$config.social.github, { responsive: true, tooltips: false });
  },
}
</script>

<style scoped>

/* Github Calendar Styles */

::v-deep rect.ContributionCalendar-day[data-level='0'] {
  @apply fill-current text-gray-900;
}

::v-deep rect.ContributionCalendar-day[data-level='1'] {
  fill: rgb(14, 68, 41);
}

::v-deep rect.ContributionCalendar-day[data-level='2'] {
  fill: rgb(0, 109, 50);
}

::v-deep rect.ContributionCalendar-day[data-level='3'] {
  fill: rgb(38, 166, 65);
}

::v-deep rect.ContributionCalendar-day[data-level='4'] {
  fill: rgb(57, 211, 83);
}

::v-deep .graph-before-activity-overview {
  border: none;
}

.calendar {
  border: none;
}

.calendar ::v-deep .width-full > .float-right {
  @apply text-sm text-gray-400 flex flex-row items-center justify-center px-4;
}

.calendar ::v-deep .width-full > .float-right svg {
  @apply mx-0.5;
}


.calendar ::v-deep .width-full > .float-left {
  @apply flex items-center justify-center;
}

.calendar ::v-deep .width-full > .float-left a {
  @apply pl-8 text-sm text-gray-400 hover:text-indigo-500;
}

::v-deep text.ContributionCalendar-label {
  font-size: 9px;
  @apply text-gray-500;
}

::v-deep .contrib-column {
  @apply border-none;
}

::v-deep .contrib-number {
  @apply text-gray-200 font-bold;
}

::v-deep .text-muted {
  @apply text-gray-300;
}

</style>
