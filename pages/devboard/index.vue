<template>
    <div>
      <DevBoard :user="$config.social.codestats"/>
      <Activity/>
  </div>
</template>

<script>

import DevBoard from '~/components/devboard/DevBoard.vue';
import Activity from '~/components/devboard/Activity.vue';

export default {
    components: { DevBoard, Activity }
}

</script>

<style>

</style>