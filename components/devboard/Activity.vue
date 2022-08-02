<template>
    <div data-aos="zoom-in" class="max-w-5xl md:mx-auto mx-5 font-playmegames">
        <div class="lg:col-span-6 text-center lg:text-left">

        <!-- today activity -->
        <div class="flex justify-between bg-gray-800 border-b-2 border-gray-600 ">
                    <h2 class="pl-3 text-md">TODAY ACTIVITY</h2>

                    <!-- info btn -->
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
                            <p v-html="$t('devboard.bestskills.info')"></p>
                        </div>
                    </div>
                </div>

        <div data-aos="zoom-in">
            <!-- <div class="w-full grid grid-cols-3 text-lg">
                <h3 class="ml-4">Skill</h3>
                <h3 class="ml-3">Action</h3>
                <h3 class="mr-4 text-right">Today XP</h3>
            </div> -->

            <div v-if="todayHaveXps === true" class="max-w-5xl sm:mx-auto bg-gray-100 dark:bg-gray-800 shadow-md overflow-hidden">
                <dl>
                    <div data-aos="zoom-in" v-for="(item, index) in languages" :class="index%2 === 0 ? 'bg-gray-100 dark:bg-gray-900' : 'bg-gray-200 dark:bg-gray-800'" class="p-5 grid grid-cols-2 sm:gap-4 sm:px-6 text-lg">
                    <dt class="text-gray-500 text-center sm:text-left mt-1 flex">
                        {{ $config.skills.languages[item.name].activity }} with 
                        <img class="h-6 w-6 ml-3" :src="$config.skills.languages[item.name].img">
                    </dt> 
                    <!-- <dt class="text-gray-500 inline-flex align-middle">
                        <img class="rounded-md h-7 w-7 mr-3" :src="$config.skills.languages[item.name].img">
                        <p class="mt-1">{{ item.name }}</p>
                    </dt> -->
                    
                    <dt class="text-gray-500 text-right lg:mt-1 rounded-sm text-md items-center self-center leading-3 pr-2 p-0.5 pt-1">
                        <div class="pt-1 inline-flex items-baseline px-2.5 leading-5 bg-gray-800 text-green-400 lg:mt-0">
                            <svg class="self-center h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                            </svg>
                            {{ item.new_xps }} 
                        </div>

                        <!-- <dt class="rounded-sm text-right text-md inline-flex bg-gray-800 text-green-400 items-center self-center leading-3 pr-2 p-0.5 pt-1">
                            <svg class="h-5 w-5 -mt-1" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                            </svg>
                            {{ item.xps }}
                        </dt> -->
                        
                    </dt>
                    </div>
                </dl>
            </div>
            <!-- No activity found -->
            <div v-else>
                <p class="text-center text-gray-500">No XPs today</p>
            </div>
        </div>
      </div>

      
    </div>
</template>

<script>

import {
    sortLanguagesBy,
    getTodayExp,
    } from '/utils/codestats'

    export default {
    data() {
        return {
            languages: [],
            todayHaveXps: [],
            newXps: 0,
        };
    },
    methods: {
        initValues({ total_xp, new_xp, languages, dates }) {
            // today date
            var todayDate = new Date().toISOString().slice(0, 10);
            // today xps
            this.languages = getTodayExp(sortLanguagesBy("new_xps", languages));
            // Check if today have xps
            this.todayHaveXps = Object.keys(dates).filter(date => date === todayDate).length !== 0 ? true : false
            // new xps
            this.newXps = new_xp;
        },
    },
    mounted() {
        fetch(`https://codestats.net/api/users/${this.$config.social.codestats}`)
            .then(resp => resp.json())
            .then(data => {
            this.initValues(data);
        })
            .catch(err => {
            console.error(err);
        });
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
