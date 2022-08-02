<template>
      <!-- Github Calendar -->
    <div data-aos="zoom-in" class="max-w-7xl mx-auto">
        <div class="max-w-prose content-center mx-auto py-9">
            <a :href="`https://github.com/{{username}}`" target="_blank" rel="noreferrer" class="mt-2 text-3xl hover:text-hot-pink leading-8 font-extrabold tracking-tight text-gray-500"></a>
        </div>
        <div class="calendar max-w-4xl content-center lowercase">
            <!-- ?? -->
        </div>
    </div>
  <!-- End of Github Calendar -->
</template>

<script>
import GitHubCalendar from 'github-calendar'

export default {
    name: 'GithubHeatmap',
    props: {
        username: {
            type: String,
            required: true
        }
    },
    components: {
        GitHubCalendar
    },
    mounted() {
        GitHubCalendar(".calendar", this.$config.social.github, { responsive: true, tooltips: false });
    }
}
</script>

<style>

/* Github Calendar Styles */

::v-deep rect.ContributionCalendar-day[data-level='0'] {
  fill: rgb(42, 44, 46);
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

.graph-before-activity-overview {
  border: none;
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