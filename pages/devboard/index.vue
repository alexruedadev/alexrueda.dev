<template>
    <div>
      <DevBoard :user="$config.social.codestats"/>
      <Activity/>

        <!-- Github Calendar -->
      <div data-aos="zoom-in" class="max-w-5xl font-playmegames pt-10 md:mx-auto mx-5">
        <div class="flex justify-between bg-gray-800 border-b-2 border-gray-600 ">
            <h2 class="pl-3 text-md">GITHUB HEATMAP</h2>
            <!-- info btn -->
            <div id="info-btn" class="w-4 h-4 mr-2 mb-2 self-center">
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
      
      <div class="max-w-prose content-center mx-auto">
        

        <a :href="`https://github.com/${$config.social.github}`" target="_blank" rel="noreferrer" class="mt-2 text-3xl hover:text-hot-pink leading-8 font-extrabold tracking-tight text-gray-500"></a>
      </div>
      <div class="calendar max-w-5xl content-center lowercase">
      </div>
    </div>

  <!-- End of Github Calendar -->
  </div>
</template>

<script>

import DevBoard from '~/components/devboard/DevBoard.vue';
import Activity from '~/components/devboard/Activity.vue';
import GitHubCalendar from 'github-calendar'

export default {
    components: { DevBoard, Activity },
    mounted() {
        GitHubCalendar(".calendar", this.$config.social.github, { responsive: true, tooltips: false, global_stats: false });
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