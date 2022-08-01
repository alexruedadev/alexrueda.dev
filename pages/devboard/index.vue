<template>
    <div>
      <DevBoard :user="$config.social.codestats"/>
      <Activity/>
  </div>
</template>

<script>

import DevBoard from '~/components/stats/DevBoard.vue';
import Activity from '~/components/stats/Activity.vue';

export default {
    components: { DevBoard, Activity }
}

</script>

<style>

</style>