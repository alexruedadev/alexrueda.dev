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
            <div class="w-full grid grid-cols-3 text-lg">
                <h3 class="ml-4">Skill</h3>
                <h3 class="ml-3">Action</h3>
                <h3 class="mr-4 text-right">Today XP</h3>
            </div>

            <div class="max-w-5xl sm:mx-auto bg-gray-100 dark:bg-gray-800 shadow-md overflow-hidden">
                <dl>
                    <div v-for="(item, index) in languages" :class="index%2 === 0 ? 'bg-gray-100 dark:bg-gray-900' : 'bg-gray-200 dark:bg-gray-800'" class="p-3 grid grid-cols-3 sm:gap-4 sm:px-6 text-lg">

                    <dt class="text-gray-500 inline-flex align-middle">
                        <img class="rounded-md h-7 w-7 mr-3" :src="$config.skills.languages[item.name].img">
                        <p class="mt-1">{{ item.name }}</p>
                    </dt>
                    <dt class="text-gray-500 text-center sm:text-left mt-1">
                        {{ $config.skills.languages[item.name].activity }}
                    </dt> 
                    <dt class="text-gray-500 text-right lg:mt-1">
                        <div class="mt-1 ml-1 inline-flex items-baseline px-2.5 leading-5 bg-gray-800 text-green-400 lg:mt-0">
                            <svg class="-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                            </svg>
                            {{ item.new_xps }} 
                        </div>
                        
                    </dt>
                    </div>
                </dl>
            </div>
        </div>
      </div>

      <GithubHeatmap :username="'alexruedadev'" />
    </div>
</template>

<script>

import GithubCalendarVue from './GithubHeatmap.vue';

import {
    sortLanguagesBy,
    getTodayExp,
    } from '/utils/codestats'
import GithubHeatmap from './GithubHeatmap.vue'

    export default {
    data() {
        return {
            totalXP: 0,
            newXP: 0,
            level: 0,
            nextLvlExp: 0,
            levelProgress: 0,
            languages: [],
            skills: []
        };
    },
    methods: {
        initValues({ total_xp, new_xp, languages, dates }) {
            this.languages = getTodayExp(sortLanguagesBy("new_xps", languages));
            console.log(this.languages);
        },
    },
    mounted() {
        fetch(`https://codestats.net/api/users/${this.$config.social.codestats}`)
            .then(resp => resp.json())
            .then(data => {
            this.initValues(data);
            console.log(data);
        })
            .catch(err => {
            console.error(err);
        });
    },
    components: { GithubHeatmap }
}

</script>

<style>

</style>