<template>
    <div id="liner" class="max-w-7xl mx-auto border-l border-r border-dashed">

    <h1 class="text-3xl md:text-2x1 lg:text-3x1 xl:text-2x1 font-pixelated_bold text-center">
        Stats
    </h1>

    <div data-aos="zoom-in" class="lg:grid lg:grid-cols-12">

        <!-- left -->
        <div class="lg:col-span-6 p-10 text-center lg:text-left">
          
        <h2 class="font-pixelated my-7">Developer Exp</h2>
        <!-- exp -->
        <div class="grid-rows-2 text-center bg-gray-900 p-3 border-2 border-gray-500">
            <!-- character + empty -->
            <div class="pl-6 pb-2">
                <img :src="'/images/levels/' + level + '.png'" class="w-14 h-14 p-3 justify-self-center bg-gray-800 rounded-sm" alt="">
            </div>

            <!-- level + progress bar -->
            <div class="flex">
                <div class="grid w-1/5">
                    <p class="text-white">Lvl {{level}}</p>
                </div>
                
                <div class="w-4/5 h-5 mx-5 bg-gray-200 rounded-sm dark:bg-gray-700 self-center">
                    <div id="progress-bar" class="h-5 text-xs font-medium text-blue-100 text-center p-0.5 pt-1 leading-none rounded-sm" :style="{width: levelProgress + '%'}"> {{levelProgress}}%</div>
                </div>
            </div>

            <!-- <p class="w-2/12 text-gray-400">Lvl {{level + 1}} </p> -->
        </div>

        <!-- skills -->
        <div data-aos="zoom-in" class="grid grid-cols-2 max-w-4xl mx-4 sm:mx-auto bg-gray-100 dark:bg-gray-800 shadow-md overflow-hidden border-2 border-gray-500 border-t-0">
            
            <div v-for="(item, index) in skills" :class="index%2 === 0 ? 'bg-gray-100 dark:bg-gray-900' : 'bg-gray-200 dark:bg-gray-800'" class="p-3 sm:gap-4 sm:px-6 flex">

            <dt class="text-sm leading-5 font-medium text-gray-500 inline-flex align-middle">
                <img class="rounded-md h-7 w-7 mr-3" :src="$config.skills.languages[item.name].img">
                <p class="mt-1">{{ item.name }}</p>
            </dt>
<!--                 <dt class="text-sm font-medium text-gray-500 text-right lg:mt-1">
                    <p class="hidden sm:inline-block">Total XP</p>
                    <div class="mt-1 ml-1 inline-flex items-baseline px-2.5 rounded-full text-sm font-medium leading-5 bg-gray-800 text-gray-200 lg:mt-0">
                        
                        {{ item.xps }} 
                    </div>
                    
                </dt> -->
            </div>
            
        </div>

        <p class="text-white">Total EXP: {{totalXP}} </p>

        <p class="text-white">EXP to next level: {{nextLvlExp}}</p>


        <!-- today activity -->
        <h2 class="py-7 font-pixelated">Today activity</h2>

        <div data-aos="zoom-in">
            <div class="w-full grid grid-cols-3 border-2 border-gray-500 p-2 border-b-0">
                <h3 class="ml-4">Skill</h3>
                <h3 class="ml-3">Action</h3>
                <h3 class="mr-4 text-right">Today XP</h3>
            </div>

            <div class="max-w-4xl sm:mx-auto bg-gray-100 dark:bg-gray-800 shadow-md overflow-hidden border-2 border-gray-500">
                <dl>
                    <div v-for="(item, index) in languages" :class="index%2 === 0 ? 'bg-gray-100 dark:bg-gray-900' : 'bg-gray-200 dark:bg-gray-800'" class="p-3 grid grid-cols-3 sm:gap-4 sm:px-6">

                    <dt class="text-sm leading-5 font-medium text-gray-500 inline-flex align-middle">
                        <img class="rounded-md h-7 w-7 mr-3" :src="$config.skills.languages[item.name].img">
                        <p class="mt-1">{{ item.name }}</p>
                    </dt>
                    <dt class="text-sm font-medium text-gray-500 text-center sm:text-left mt-1">
                        {{ $config.skills.languages[item.name].activity }}
                    </dt> 
                    <dt class="text-sm font-medium text-gray-500 text-right lg:mt-1">
                        <!-- <p class="hidden sm:inline-block">Today XP</p> -->
                        <div class="mt-1 ml-1 inline-flex items-baseline px-2.5 text-sm font-medium leading-5 bg-gray-800 text-green-400 lg:mt-0">
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
    
        <p class="text-white">Total new EXP: {{newXP}}</p>
        <!-- characters -->
<!--         <div class="flex">
            <img :src="'/images/levels/' + level + '.png'" class="w-7 h-7" alt="">
            <img :src="'/images/levels/' + (level + 1) + '.png'" class="w-7 h-7" alt="">
        </div> -->
        

      </div>

        <!-- right -->
        <div id="liner" class=" justify-center lg:col-span-6 lg:border-r lg:border-dashed p-10">

        <h2 class="font-pixelated my-7">Equipement</h2>
        
        <div class="max-w-4xl sm:mx-auto shadow-md overflow-hidden border-2 border-gray-500 border-b-0">
            <div>
            <dl>
                <div v-for="(item, index) in $config.uses.meta" :class="index%2 === 0 ? 'bg-gray-100 dark:bg-gray-900' : 'bg-gray-200 dark:bg-gray-800'" class="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 border-b-2 border-gray-500">
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

      </div>
      

      
    </div>
  </div>
</template>

<script>

import { 
    get_level,
    get_next_level_xp,
    get_level_progress,
    sortLanguagesByNewExp,
    getTodayExp,
    sortSizeTo,
    sortLanguagesByTotalExp

     
    } from '/utils/codestats'

export default {

    data(){
        return {
            totalXP: 0,
            newXP: 0,
            level: 0,
            nextLvlExp: 0,
            levelProgress: 0,
            languages: [],
            skills: []
        }
    },

     methods: {
        initValues({total_xp, new_xp, languages, dates}) {
            this.totalXP = total_xp;
            this.newXP = new_xp;
            this.level = get_level(total_xp)
            this.nextLvlExp = get_next_level_xp(this.level)
            this.levelProgress = get_level_progress(total_xp)
            this.languages = this.getTodayExp(this.sortLanguagesByNewExp(languages))
            this.skills = this.sortSizeTo(6,this.sortLanguagesByTotalExp(languages))
        },
        sortLanguagesByNewExp,
        getTodayExp,
        sortSizeTo,
        sortLanguagesByTotalExp
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

    }
}
</script>

<style>

#progress-bar {
    @apply bg-gradient-to-r from-green-600 to-green-400
}

</style>