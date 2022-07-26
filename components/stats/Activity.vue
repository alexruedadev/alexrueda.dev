<template>
  
    <!-- 
        other 
    -->
    <div data-aos="zoom-in" class="lg:grid lg:grid-cols-12 max-w-5xl mx-auto">

        <!-- left -->
        <div class="lg:col-span-6 p-10 text-center lg:text-left">

        <!-- today activity -->
        <h2 class="font-pixel_boy text-lg">Today activity</h2>

        <div data-aos="zoom-in">
            <div class="w-full grid grid-cols-3 text-lg">
                <h3 class="ml-4">Skill</h3>
                <h3 class="ml-3">Action</h3>
                <h3 class="mr-4 text-right">Today XP</h3>
            </div>

            <div class="max-w-4xl sm:mx-auto bg-gray-100 dark:bg-gray-800 shadow-md overflow-hidden">
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
      
    </div>
</template>

<script>

import {
    sortLanguagesByNewExp,
    getTodayExp,
    } from '/utils/codestats'

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
                this.languages = this.getTodayExp(this.sortLanguagesByNewExp(languages));
            },
            sortLanguagesByNewExp,
            getTodayExp,
        mounted() {
            fetch(`https://codestats.net/api/users/${this.$config.social.codestats}`)
                .then(resp => resp.json())
                .then(data => {
                this.initValues(data);
                console.log(data)
            })
                .catch(err => {
                console.error(err);
            });
        },
    }
}
</script>

<style>

</style>